'use strict';

// Create an instance
var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function () {
    let playButton = document.querySelector('#playBtn'),
        // toggleMuteButton = document.querySelector('#toggleMuteBtn'),


        // Init wavesurfer
        wavesurfer = WaveSurfer.create({
            container: '#wave',
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

            backend: 'MediaElement',
            // plugins: [
            //     WaveSurfer.timeline.create({
            //         container: "#wave-timeline"
            //     })
            //   ]

        });




    wavesurfer.on('error', function (e) {
        console.warn(e);
    });

    wavesurfer.once('ready', function () {
        playButton.onclick = function () {
            wavesurfer.playPause();
        };

        stopBtn.onclick = function () {
            wavesurfer.stop()
        };
        skipBack.onclick = function () {
            wavesurfer.skipBackward()
        };
        skipForward.onclick = function () {
            wavesurfer.skipForward()
        };
        toggle.onclick = function () {
            wavesurfer.toggleMute();
        }


    });

     wavesurfer.load('../media/dummy1.flac');
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

 
});

