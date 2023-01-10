'use strict';

// Create an instance
var wavesurfer;

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    // Init
    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
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
        scrollParent: true,
        plugins: [
            
            WaveSurfer.timeline.create({
                container: '#timeline'
            })
        ]
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    // Load audio from URL
    wavesurfer.load('../media/dummy1.flac');

    // Zoom slider
    let slider = document.querySelector('[data-action="zoom"]');

    slider.value = wavesurfer.params.minPxPerSec;
    slider.min = wavesurfer.params.minPxPerSec;
    // Allow extreme zoom-in, to see individual samples
    slider.max = 1000;

    slider.addEventListener('input', function() {
        wavesurfer.zoom(Number(this.value));
    });

    // set initial zoom to match slider value
    wavesurfer.zoom(slider.value);

    // Play button
    let button = document.querySelector('[data-action="play"]');

    button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});
