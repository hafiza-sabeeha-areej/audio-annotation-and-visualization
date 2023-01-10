'use strict';


var wavesurfer;
console.log(wavesurfer)
// Init & load
function initAndLoadSpectrogram(colorMap) {
    // Create an instance
    let options = {
        container: '#waveform',
        waveColor: [ // an array of colors, to be applied as gradient color stops to the waveform.
            "red",
            "green",
            "purple",
            "yellow",
            "rgba(0,255,255,.5)",
        ],
        progressColor: [ // the gradient fill styles are also available on the progressColor option
            "orange",
            "blue",
            "cyan",
            "black",
            "rgba(0,255,255,.5)",
        ],
        loaderColor: 'purple',
        cursorColor: 'navy',
        plugins: [
            WaveSurfer.spectrogram.create({
                container: '#wave-spectrogram',
                labels: true,
                colorMap: colorMap,
                fftSamples: 1024,
                height: 400,
                width: 200,

            }),


            WaveSurfer.timeline.create({
                container: '#timeline'
            })



        ]
    };

    if (location.search.match('scroll')) {
        options.minPxPerSec = 100;
        options.scrollParent = true;
    }

    if (location.search.match('normalize')) {
        options.normalize = true;
    }

    wavesurfer = WaveSurfer.create(options);


    /* Progress bar */
    (function () {
        let progressDiv = document.querySelector('#progress-bar');
        let progressBar = progressDiv.querySelector('.progress-bar');

        let showProgress = function (percent) {
            progressDiv.style.display = 'block';
            progressBar.style.width = percent + '%';
        };

        let hideProgress = function () {
            progressDiv.style.display = 'none';
        };

        wavesurfer.on('loading', showProgress);
        wavesurfer.on('ready', hideProgress);
        wavesurfer.on('destroy', hideProgress);
        wavesurfer.on('error', hideProgress);
    })();

    wavesurfer.load('../media/dummy1.flac');
    // console.log('../media/dummy1.flac')
    console.log(wavesurfer)
    // Time stretcher
    wavesurfer.on('ready', function () {
        let st = new window.soundtouch.SoundTouch(
            wavesurfer.backend.ac.sampleRate
        );
        let buffer = wavesurfer.backend.buffer;
        let channels = buffer.numberOfChannels;
        let l = buffer.getChannelData(0);
        let r = channels > 1 ? buffer.getChannelData(1) : l;
        let length = buffer.length;
        let seekingPos = null;
        let seekingDiff = 0;

        let source = {
            extract: function (target, numFrames, position) {
                if (seekingPos != null) {
                    seekingDiff = seekingPos - position;
                    seekingPos = null;
                }

                position += seekingDiff;

                for (let i = 0; i < numFrames; i++) {
                    target[i * 2] = l[i + position];
                    target[i * 2 + 1] = r[i + position];
                }

                return Math.min(numFrames, length - position);
            }
        };

        let soundtouchNode;

        wavesurfer.on('play', function () {
            seekingPos = ~~(wavesurfer.backend.getPlayedPercents() * length);
            st.tempo = wavesurfer.getPlaybackRate();

            if (st.tempo === 1) {
                wavesurfer.backend.disconnectFilters();
            } else {
                if (!soundtouchNode) {
                    let filter = new window.soundtouch.SimpleFilter(source, st);
                    soundtouchNode = window.soundtouch.getWebAudioNode(
                        wavesurfer.backend.ac,
                        filter
                    );
                }
                wavesurfer.backend.setFilter(soundtouchNode);
            }
        });

        wavesurfer.on('pause', function () {
            soundtouchNode && soundtouchNode.disconnect();
        });

        wavesurfer.on('seek', function () {
            seekingPos = ~~(wavesurfer.backend.getPlayedPercents() * length);
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Load a colormap json file to be passed to the spectrogram.create method.
    WaveSurfer.util
        .fetchFile({
            url: 'hot-colormap.json',
            responseType: 'json'
        })
        .on('success', colorMap => {
            initAndLoadSpectrogram(colorMap);
        });

});
