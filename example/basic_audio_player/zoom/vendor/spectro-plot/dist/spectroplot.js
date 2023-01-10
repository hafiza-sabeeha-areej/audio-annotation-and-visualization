(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for (var i in a)(typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(self, function () {
    return /******/ (function () { // webpackBootstrap
        /******/
        var __webpack_modules__ = ({

            /***/
            "./lib/autorange.js":
                /*!**************************!*\
                  !*** ./lib/autorange.js ***!
                  \**************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "autorange": function () {
                            return /* binding */ autorange;
                        }
                        /* harmony export */
                    });
                    /**
                        Determine divisor and SI prefix.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */
                    const autoranges = [{
                        name: 'yotta',
                        scale: 1e24,
                        prefix: 'Y'
                    }, {
                        name: 'zetta',
                        scale: 1e21,
                        prefix: 'Z'
                    }, {
                        name: 'exa',
                        scale: 1e18,
                        prefix: 'E'
                    }, {
                        name: 'peta',
                        scale: 1e15,
                        prefix: 'P'
                    }, {
                        name: 'tera',
                        scale: 1e12,
                        prefix: 'T'
                    }, {
                        name: 'giga',
                        scale: 1e9,
                        prefix: 'G'
                    }, {
                        name: 'mega',
                        scale: 1e6,
                        prefix: 'M'
                    }, {
                        name: 'kilo',
                        scale: 1e3,
                        prefix: 'k'
                    }, {
                        name: '',
                        scale: 1e0,
                        prefix: ''
                    }, {
                        name: 'milli',
                        scale: 1e-3,
                        prefix: 'm'
                    }, {
                        name: 'micro',
                        scale: 1e-6,
                        prefix: 'u'
                    }, {
                        name: 'nano',
                        scale: 1e-9,
                        prefix: 'n'
                    }, {
                        name: 'pico',
                        scale: 1e-12,
                        prefix: 'p'
                    }, {
                        name: 'femto',
                        scale: 1e-15,
                        prefix: 'f'
                    }, {
                        name: 'atto',
                        scale: 1e-18,
                        prefix: 'a'
                    }, {
                        name: 'zepto',
                        scale: 1e-21,
                        prefix: 'z'
                    }, {
                        name: 'yocto',
                        scale: 1e-24,
                        prefix: 'y'
                    }];
                    /** Determine divisor and SI prefix. */

                    function autorange(num, min_int = 10.0) {
                        if (num == 0.0) return autoranges[8];
                        num = num / min_int;

                        for (let i = 0; i < autoranges.length; ++i) {
                            if (num >= autoranges[i].scale) return autoranges[i];
                        }

                        return autoranges[autoranges.length - 1];
                    }



                    /***/
                }),

            /***/
            "./lib/autostep.js":
                /*!*************************!*\
                  !*** ./lib/autostep.js ***!
                  \*************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "autostep": function () {
                            return /* binding */ autostep;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Determine step width (e.g. on an axis).

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /** Decimal scale to get the num in the range +-[1; 10), twice as fast as `Math.pow(10, Math.floor(Math.log10(Math.abs(num))))`. */
                    function decimal_scale(num) {
                        num = Math.abs(num);

                        if (num > 0) {
                            let scale = 0;

                            while (num < 1) {
                                num *= 10;
                                scale -= 1;
                            }

                            while (num >= 10) {
                                num /= 10;
                                scale += 1;
                            }

                            return Math.pow(10, scale);
                        } else {
                            return 1;
                        }
                    }

                    const autosteps = [1, 2, 5, 10];
                    /** Determine step width (e.g. on an axis). */

                    function autostep(range, max_ticks) {
                        const scale = decimal_scale(range / max_ticks);
                        const norm_range = range / scale;

                        for (let i = 0; i < autosteps.length; ++i) {
                            const step = autosteps[i];

                            if ((max_ticks + 1) * step > norm_range) {
                                const major_step = step * scale;
                                const minor_step = major_step / (step == 5 ? 5 : 10);
                                return {
                                    major_step,
                                    minor_step
                                };
                            }
                        }

                        return {
                            major_step: scale,
                            minor_step: scale / 10
                        }; // fallback
                    }

                    /***/
                }),

            /***/
            "./lib/cube1cmap.js":
                /*!**************************!*\
                  !*** ./lib/cube1cmap.js ***!
                  \**************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "cube1_cmap": function () {
                            return /* binding */ cube1_cmap;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Matteo Niccoli's cubeYF variant cube1.

                        @see https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/
                        @see https://mycarta.wordpress.com/2013/03/06/perceptual-rainbow-palette-the-goodies/

                        @copyright Matteo Niccoli, MyCarta, 2013
                        @license
                        All rights reserved. Most rights sharable.
                        Go ahead if you want to use my code, modify it, improve it, for
                        non-commercial AND for commercial use. You are also welcome to
                        download and reuse my media files - unless otherwise stated. With
                        both code and images, please give full and clear credit to Matteo
                        Niccoli as the author and mycarta.wordpress.com as the source.
                    */

                    /** Matteo Niccoli's cubeYF variant cube1. */
                    const cube1_cmap = [
                        [116, 0, 129],
                        [118, 0, 133],
                        [119, 0, 136],
                        [120, 0, 139],
                        [121, 0, 142],
                        [122, 0, 145],
                        [123, 0, 148],
                        [124, 0, 151],
                        [125, 0, 154],
                        [126, 0, 157],
                        [127, 1, 160],
                        [128, 2, 163],
                        [128, 4, 166],
                        [129, 6, 169],
                        [130, 8, 172],
                        [131, 11, 176],
                        [131, 13, 179],
                        [132, 16, 182],
                        [133, 18, 185],
                        [133, 20, 188],
                        [133, 23, 191],
                        [133, 26, 194],
                        [133, 29, 197],
                        [133, 32, 200],
                        [133, 35, 203],
                        [133, 38, 205],
                        [132, 41, 208],
                        [131, 44, 210],
                        [131, 47, 212],
                        [130, 50, 214],
                        [129, 53, 216],
                        [128, 56, 218],
                        [128, 59, 220],
                        [127, 62, 222],
                        [126, 64, 224],
                        [126, 66, 226],
                        [125, 69, 228],
                        [124, 71, 231],
                        [124, 73, 233],
                        [123, 75, 235],
                        [121, 77, 237],
                        [120, 79, 240],
                        [119, 81, 242],
                        [118, 83, 244],
                        [117, 85, 246],
                        [116, 87, 247],
                        [115, 89, 249],
                        [114, 91, 250],
                        [113, 93, 252],
                        [112, 94, 252],
                        [111, 96, 253],
                        [110, 98, 253],
                        [109, 100, 253],
                        [108, 102, 253],
                        [107, 104, 253],
                        [106, 107, 252],
                        [105, 109, 252],
                        [104, 111, 251],
                        [103, 113, 251],
                        [102, 115, 250],
                        [102, 117, 249],
                        [101, 119, 248],
                        [100, 121, 247],
                        [99, 123, 247],
                        [98, 125, 246],
                        [97, 126, 245],
                        [96, 128, 244],
                        [95, 130, 243],
                        [94, 132, 242],
                        [93, 134, 241],
                        [92, 135, 240],
                        [91, 137, 239],
                        [90, 138, 238],
                        [89, 140, 236],
                        [88, 142, 235],
                        [87, 143, 234],
                        [86, 145, 232],
                        [85, 146, 230],
                        [83, 148, 229],
                        [82, 149, 227],
                        [81, 151, 226],
                        [80, 152, 224],
                        [79, 153, 222],
                        [78, 155, 221],
                        [77, 156, 219],
                        [76, 158, 217],
                        [74, 159, 215],
                        [73, 161, 214],
                        [72, 162, 212],
                        [70, 164, 210],
                        [69, 165, 208],
                        [67, 167, 206],
                        [66, 168, 204],
                        [64, 170, 202],
                        [63, 171, 201],
                        [61, 173, 199],
                        [60, 174, 197],
                        [59, 175, 194],
                        [58, 177, 192],
                        [57, 178, 190],
                        [57, 179, 188],
                        [56, 181, 186],
                        [56, 182, 184],
                        [56, 183, 182],
                        [56, 184, 180],
                        [57, 185, 178],
                        [57, 187, 176],
                        [58, 188, 174],
                        [58, 189, 171],
                        [59, 190, 169],
                        [60, 191, 167],
                        [61, 192, 165],
                        [62, 193, 163],
                        [62, 194, 160],
                        [63, 195, 158],
                        [64, 196, 156],
                        [65, 197, 154],
                        [66, 198, 151],
                        [67, 199, 149],
                        [67, 200, 147],
                        [68, 201, 145],
                        [69, 202, 142],
                        [69, 203, 140],
                        [70, 203, 138],
                        [71, 204, 135],
                        [71, 205, 133],
                        [72, 206, 131],
                        [73, 207, 129],
                        [73, 208, 126],
                        [74, 208, 124],
                        [75, 209, 122],
                        [75, 210, 119],
                        [76, 211, 117],
                        [77, 211, 115],
                        [77, 212, 113],
                        [78, 213, 111],
                        [79, 214, 108],
                        [80, 215, 106],
                        [80, 216, 104],
                        [81, 216, 101],
                        [82, 217, 98],
                        [82, 218, 96],
                        [83, 219, 93],
                        [84, 220, 90],
                        [84, 221, 87],
                        [85, 222, 85],
                        [86, 222, 82],
                        [87, 223, 80],
                        [87, 224, 78],
                        [88, 225, 76],
                        [89, 225, 75],
                        [90, 226, 74],
                        [91, 227, 73],
                        [92, 227, 73],
                        [94, 228, 73],
                        [95, 229, 73],
                        [97, 229, 73],
                        [99, 230, 74],
                        [101, 230, 74],
                        [104, 231, 74],
                        [106, 231, 75],
                        [109, 232, 75],
                        [111, 232, 76],
                        [114, 233, 76],
                        [117, 233, 77],
                        [120, 234, 78],
                        [122, 234, 78],
                        [125, 234, 79],
                        [128, 235, 79],
                        [130, 235, 80],
                        [133, 235, 80],
                        [135, 235, 80],
                        [137, 235, 81],
                        [140, 235, 81],
                        [142, 235, 82],
                        [145, 235, 82],
                        [147, 235, 82],
                        [150, 236, 83],
                        [152, 236, 83],
                        [155, 236, 84],
                        [157, 236, 84],
                        [160, 236, 84],
                        [162, 236, 85],
                        [165, 236, 85],
                        [167, 236, 85],
                        [169, 236, 86],
                        [171, 236, 86],
                        [173, 236, 86],
                        [175, 236, 87],
                        [177, 236, 87],
                        [180, 236, 87],
                        [182, 236, 87],
                        [184, 236, 88],
                        [185, 236, 88],
                        [187, 236, 88],
                        [189, 236, 88],
                        [191, 236, 89],
                        [193, 236, 89],
                        [195, 236, 89],
                        [196, 236, 89],
                        [198, 236, 89],
                        [200, 236, 89],
                        [201, 236, 90],
                        [203, 236, 90],
                        [204, 236, 90],
                        [205, 236, 90],
                        [207, 236, 90],
                        [208, 235, 90],
                        [209, 234, 91],
                        [210, 234, 91],
                        [211, 233, 91],
                        [212, 232, 91],
                        [213, 230, 91],
                        [214, 229, 91],
                        [215, 228, 91],
                        [216, 226, 91],
                        [217, 225, 91],
                        [218, 224, 92],
                        [219, 222, 92],
                        [220, 221, 92],
                        [221, 219, 92],
                        [222, 218, 92],
                        [223, 217, 92],
                        [224, 215, 92],
                        [226, 214, 92],
                        [227, 213, 93],
                        [229, 211, 93],
                        [230, 210, 93],
                        [231, 208, 93],
                        [233, 206, 93],
                        [234, 205, 93],
                        [236, 203, 93],
                        [237, 201, 94],
                        [238, 200, 94],
                        [239, 198, 94],
                        [240, 196, 94],
                        [241, 194, 94],
                        [242, 192, 94],
                        [243, 190, 94],
                        [243, 188, 94],
                        [244, 186, 94],
                        [244, 184, 94],
                        [245, 182, 94],
                        [245, 180, 94],
                        [246, 178, 94],
                        [246, 176, 93],
                        [247, 173, 93],
                        [247, 171, 93],
                        [248, 168, 93],
                        [248, 166, 93],
                        [248, 163, 92],
                        [249, 161, 92],
                        [249, 158, 92],
                        [249, 156, 92],
                        [249, 153, 91],
                        [249, 150, 9]
                    ];

                    /***/
                }),

            /***/
            "./lib/dropzone.js":
                /*!*************************!*\
                  !*** ./lib/dropzone.js ***!
                  \*************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "DropZone": function () {
                            return /* binding */ DropZone;
                        }
                        /* harmony export */
                    });
                    /* harmony import */
                    var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./utils.js */ "./lib/utils.js");
                    /**
                        @file DropZone JS.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /*eslint no-console: "off"*/

                    class DropZone {
                        constructor(elementOrSelector, fileLoader) {
                            elementOrSelector = elementOrSelector || '#dropZone';
                            elementOrSelector = (0, _utils_js__WEBPACK_IMPORTED_MODULE_0__.selector)(elementOrSelector); // https://css-tricks.com/drag-and-drop-file-uploading/

                            this.dropZone = elementOrSelector;
                            this.fileLoader = fileLoader;
                            this.inputEls = [];
                            this.dragEnteredEls = [];
                            window.addEventListener('dragenter', this);
                            window.addEventListener('dragleave', this);
                            window.addEventListener('dropleave', this);
                            const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
                            events.forEach(evt => this.dropZone.addEventListener(evt, this, false));
                        }

                        addInput(elementOrSelector) {
                            elementOrSelector = elementOrSelector || '#inputfile';
                            elementOrSelector = (0, _utils_js__WEBPACK_IMPORTED_MODULE_0__.selector)(elementOrSelector);
                            elementOrSelector.addEventListener('change', this, false);
                            this.inputEls.push(elementOrSelector);
                        }

                        destroy() {
                            window.removeEventListener('dragenter', this, false);
                            window.removeEventListener('dragleave', this, false);
                            window.removeEventListener('dropleave', this, false);
                            const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
                            events.forEach(evt => this.dropZone.removeEventListener(evt, this, false));

                            for (let el of this.inputEls) {
                                el.removeEventListener('change', this, false);
                            }
                        }

                        allowDrag(e) {
                            // ...Test that the item being dragged is a valid one
                            e.dataTransfer.dropEffect = 'copy';
                            e.preventDefault();
                        }

                        handleDrop(e) {
                            e.preventDefault();
                            this.handleFileSelect(e);
                        } // https://www.html5rocks.com/en/tutorials/file/dndfiles/


                        handleFileSelect(evt) {
                            evt.stopPropagation();
                            evt.preventDefault(); //const files = evt.dataTransfer.files // FileList object.
                            //const files = evt.target.files // FileList object

                            const files = 'dataTransfer' in evt ? evt.dataTransfer.files : evt.target.files; // files is a FileList of File objects. List some properties.

                            for (let i = 0, file; file = files[i]; i++) {
                                // output some info right away?
                                // Blob.arrayBuffer() promise isn't generally supported
                                // use older FileReader.readAsArrayBuffer()
                                const reader = new FileReader(); // Closure to capture the file information.

                                reader.onload = e => {
                                    // Process data
                                    file['fileBuffer'] = e.target.result; //console.log(file.name)

                                    this.fileLoader(file);
                                }; // Read in the image file as a data URL.


                                reader.readAsArrayBuffer(file);
                            }
                        } // events


                        handleEvent(e) {
                            const handler = e.type;

                            if (typeof this[handler] === 'function') {
                                e.preventDefault();
                                return this[handler](e);
                            }
                        }

                        dragenter(e) {
                            this.dragEnteredEls.push(e.target);
                            document.documentElement.classList.add('dragdrop');
                            this.dropZone.classList.add('active');
                        }

                        dragover(e) {
                            this.dropZone.classList.add('hover');
                            this.allowDrag(e);
                        }

                        dragleave(e) {
                            const index = this.dragEnteredEls.indexOf(e.target);

                            if (index > -1) {
                                this.dragEnteredEls.splice(index, 1);
                            }

                            if (this.dragEnteredEls.indexOf(this.dropZone) < 0) {
                                this.dropZone.classList.remove('hover');
                            }

                            if (this.dragEnteredEls.length === 0) {
                                document.documentElement.classList.remove('dragdrop');
                                this.dropZone.classList.remove('active');
                            }
                        }

                        dropleave() {
                            this.dragEnteredEls.splice(0);
                            this.dropZone.classList.remove('hover');
                            this.dropZone.classList.remove('active');
                            document.documentElement.classList.remove('dragdrop');
                        }

                        drop(e) {
                            const event = new Event('dropleave');
                            window.dispatchEvent(event);
                            this.handleDrop(e);
                        }

                        change(e) {
                            this.handleFileSelect(e);
                        }

                    }

                    /***/
                }),

            /***/
            "./lib/easy.js":
                /*!*********************!*\
                  !*** ./lib/easy.js ***!
                  \*********************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "EasyCloning": function () {
                            return /* binding */ EasyCloning;
                        }
                        /* harmony export */
                    });
                    /* harmony import */
                    var _spectroplot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./spectroplot.js */ "./lib/spectroplot.js");
                    /* harmony import */
                    var _dropzone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./dropzone.js */ "./lib/dropzone.js");
                    /* harmony import */
                    var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./utils.js */ "./lib/utils.js");
                    /**
                        @file Spectroplot easy template cloning.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */




                    /**
                        An example easy template cloning class.
                    */

                    class EasyCloning {
                        /**
                            Initialize a new EasyCloning.
                            @example
                            new EasyCloning('#spectros', document.location.hash.substring(1))
                             @param {Object|string} elementOrSelector - Parent element or selector
                            @param {string} [dataUrl] - URL to load data from
                        */
                        constructor(elementOrSelector, dataUrl) {
                            this.cloneParent = (0, _utils_js__WEBPACK_IMPORTED_MODULE_2__.selector)(elementOrSelector); // grab the template and remove from DOM

                            this.cloneTemplate = this.cloneParent.firstElementChild; // this.cloneTemplate.remove(); // would need polyfill on IE

                            this.cloneParent.removeChild(this.cloneTemplate);
                            this.dropZone = new _dropzone_js__WEBPACK_IMPORTED_MODULE_1__.DropZone('#dropZone', this.cloneLoader.bind(this));
                            this.dropZone.addInput('#inputfile');
                            this.dropZone.addInput('#addfile');

                            if (dataUrl) {
                                this.loadUrl(dataUrl);
                            }
                        }
                        /**
                            Load data into a new clone.
                             @param {Object} [filedata] - data object to load
                        */


                        cloneLoader(filedata) {
                            const parent = this.cloneTemplate.cloneNode(true);
                            this.cloneParent.appendChild(parent);
                            const spectroplot = new _spectroplot_js__WEBPACK_IMPORTED_MODULE_0__.Spectroplot({
                                parent,
                                filedata
                            });
                            spectroplot.enableGuides();
                            spectroplot.enableButtons(); // spectroplot.createDropZone($refs.dropzone)
                        }
                        /**
                            Load data from a URL.
                             @param {string} [dataUrl] - URL to load data from
                        */


                        loadUrl(dataUrl) {
                            (0, _spectroplot_js__WEBPACK_IMPORTED_MODULE_0__.loadUrl)(dataUrl, this.cloneLoader);
                        }

                    }

                    /***/
                }),

            /***/
            "./lib/matplotlibcmaps.js":
                /*!********************************!*\
                  !*** ./lib/matplotlibcmaps.js ***!
                  \********************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "afmhot_cmap": function () {
                            return /* binding */ afmhot_cmap;
                        },
                        /* harmony export */
                        "gist_heat_cmap": function () {
                            return /* binding */ gist_heat_cmap;
                        },
                        /* harmony export */
                        "hot_cmap": function () {
                            return /* binding */ hot_cmap;
                        },
                        /* harmony export */
                        "inferno_cmap": function () {
                            return /* binding */ inferno_cmap;
                        },
                        /* harmony export */
                        "magma_cmap": function () {
                            return /* binding */ magma_cmap;
                        },
                        /* harmony export */
                        "plasma_cmap": function () {
                            return /* binding */ plasma_cmap;
                        },
                        /* harmony export */
                        "viridis_cmap": function () {
                            return /* binding */ viridis_cmap;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Matplotlib color maps.

                        @see https://bids.github.io/colormap/

                        @copyright Matplotlib, 2015
                        @license
                        mpl-colormaps by Nathaniel Smith & Stefan van der Walt

                        To the extent possible under law, the persons who associated CC0 with
                        mpl-colormaps have waived all copyright and related or neighboring rights
                        to mpl-colormaps.

                        You should have received a copy of the CC0 legalcode along with this
                        work.  If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
                    */

                    /** Matplotlib's Viridis color map. */
                    const viridis_cmap = [
                        [68, 1, 84],
                        [68, 2, 86],
                        [69, 4, 87],
                        [69, 5, 89],
                        [70, 7, 90],
                        [70, 8, 92],
                        [70, 10, 93],
                        [70, 11, 94],
                        [71, 13, 96],
                        [71, 14, 97],
                        [71, 16, 99],
                        [71, 17, 100],
                        [71, 19, 101],
                        [72, 20, 103],
                        [72, 22, 104],
                        [72, 23, 105],
                        [72, 24, 106],
                        [72, 26, 108],
                        [72, 27, 109],
                        [72, 28, 110],
                        [72, 29, 111],
                        [72, 31, 112],
                        [72, 32, 113],
                        [72, 33, 115],
                        [72, 35, 116],
                        [72, 36, 117],
                        [72, 37, 118],
                        [72, 38, 119],
                        [72, 40, 120],
                        [72, 41, 121],
                        [71, 42, 122],
                        [71, 44, 122],
                        [71, 45, 123],
                        [71, 46, 124],
                        [71, 47, 125],
                        [70, 48, 126],
                        [70, 50, 126],
                        [70, 51, 127],
                        [70, 52, 128],
                        [69, 53, 129],
                        [69, 55, 129],
                        [69, 56, 130],
                        [68, 57, 131],
                        [68, 58, 131],
                        [68, 59, 132],
                        [67, 61, 132],
                        [67, 62, 133],
                        [66, 63, 133],
                        [66, 64, 134],
                        [66, 65, 134],
                        [65, 66, 135],
                        [65, 68, 135],
                        [64, 69, 136],
                        [64, 70, 136],
                        [63, 71, 136],
                        [63, 72, 137],
                        [62, 73, 137],
                        [62, 74, 137],
                        [62, 76, 138],
                        [61, 77, 138],
                        [61, 78, 138],
                        [60, 79, 138],
                        [60, 80, 139],
                        [59, 81, 139],
                        [59, 82, 139],
                        [58, 83, 139],
                        [58, 84, 140],
                        [57, 85, 140],
                        [57, 86, 140],
                        [56, 88, 140],
                        [56, 89, 140],
                        [55, 90, 140],
                        [55, 91, 141],
                        [54, 92, 141],
                        [54, 93, 141],
                        [53, 94, 141],
                        [53, 95, 141],
                        [52, 96, 141],
                        [52, 97, 141],
                        [51, 98, 141],
                        [51, 99, 141],
                        [50, 100, 142],
                        [50, 101, 142],
                        [49, 102, 142],
                        [49, 103, 142],
                        [49, 104, 142],
                        [48, 105, 142],
                        [48, 106, 142],
                        [47, 107, 142],
                        [47, 108, 142],
                        [46, 109, 142],
                        [46, 110, 142],
                        [46, 111, 142],
                        [45, 112, 142],
                        [45, 113, 142],
                        [44, 113, 142],
                        [44, 114, 142],
                        [44, 115, 142],
                        [43, 116, 142],
                        [43, 117, 142],
                        [42, 118, 142],
                        [42, 119, 142],
                        [42, 120, 142],
                        [41, 121, 142],
                        [41, 122, 142],
                        [41, 123, 142],
                        [40, 124, 142],
                        [40, 125, 142],
                        [39, 126, 142],
                        [39, 127, 142],
                        [39, 128, 142],
                        [38, 129, 142],
                        [38, 130, 142],
                        [38, 130, 142],
                        [37, 131, 142],
                        [37, 132, 142],
                        [37, 133, 142],
                        [36, 134, 142],
                        [36, 135, 142],
                        [35, 136, 142],
                        [35, 137, 142],
                        [35, 138, 141],
                        [34, 139, 141],
                        [34, 140, 141],
                        [34, 141, 141],
                        [33, 142, 141],
                        [33, 143, 141],
                        [33, 144, 141],
                        [33, 145, 140],
                        [32, 146, 140],
                        [32, 146, 140],
                        [32, 147, 140],
                        [31, 148, 140],
                        [31, 149, 139],
                        [31, 150, 139],
                        [31, 151, 139],
                        [31, 152, 139],
                        [31, 153, 138],
                        [31, 154, 138],
                        [30, 155, 138],
                        [30, 156, 137],
                        [30, 157, 137],
                        [31, 158, 137],
                        [31, 159, 136],
                        [31, 160, 136],
                        [31, 161, 136],
                        [31, 161, 135],
                        [31, 162, 135],
                        [32, 163, 134],
                        [32, 164, 134],
                        [33, 165, 133],
                        [33, 166, 133],
                        [34, 167, 133],
                        [34, 168, 132],
                        [35, 169, 131],
                        [36, 170, 131],
                        [37, 171, 130],
                        [37, 172, 130],
                        [38, 173, 129],
                        [39, 173, 129],
                        [40, 174, 128],
                        [41, 175, 127],
                        [42, 176, 127],
                        [44, 177, 126],
                        [45, 178, 125],
                        [46, 179, 124],
                        [47, 180, 124],
                        [49, 181, 123],
                        [50, 182, 122],
                        [52, 182, 121],
                        [53, 183, 121],
                        [55, 184, 120],
                        [56, 185, 119],
                        [58, 186, 118],
                        [59, 187, 117],
                        [61, 188, 116],
                        [63, 188, 115],
                        [64, 189, 114],
                        [66, 190, 113],
                        [68, 191, 112],
                        [70, 192, 111],
                        [72, 193, 110],
                        [74, 193, 109],
                        [76, 194, 108],
                        [78, 195, 107],
                        [80, 196, 106],
                        [82, 197, 105],
                        [84, 197, 104],
                        [86, 198, 103],
                        [88, 199, 101],
                        [90, 200, 100],
                        [92, 200, 99],
                        [94, 201, 98],
                        [96, 202, 96],
                        [99, 203, 95],
                        [101, 203, 94],
                        [103, 204, 92],
                        [105, 205, 91],
                        [108, 205, 90],
                        [110, 206, 88],
                        [112, 207, 87],
                        [115, 208, 86],
                        [117, 208, 84],
                        [119, 209, 83],
                        [122, 209, 81],
                        [124, 210, 80],
                        [127, 211, 78],
                        [129, 211, 77],
                        [132, 212, 75],
                        [134, 213, 73],
                        [137, 213, 72],
                        [139, 214, 70],
                        [142, 214, 69],
                        [144, 215, 67],
                        [147, 215, 65],
                        [149, 216, 64],
                        [152, 216, 62],
                        [155, 217, 60],
                        [157, 217, 59],
                        [160, 218, 57],
                        [162, 218, 55],
                        [165, 219, 54],
                        [168, 219, 52],
                        [170, 220, 50],
                        [173, 220, 48],
                        [176, 221, 47],
                        [178, 221, 45],
                        [181, 222, 43],
                        [184, 222, 41],
                        [186, 222, 40],
                        [189, 223, 38],
                        [192, 223, 37],
                        [194, 223, 35],
                        [197, 224, 33],
                        [200, 224, 32],
                        [202, 225, 31],
                        [205, 225, 29],
                        [208, 225, 28],
                        [210, 226, 27],
                        [213, 226, 26],
                        [216, 226, 25],
                        [218, 227, 25],
                        [221, 227, 24],
                        [223, 227, 24],
                        [226, 228, 24],
                        [229, 228, 25],
                        [231, 228, 25],
                        [234, 229, 26],
                        [236, 229, 27],
                        [239, 229, 28],
                        [241, 229, 29],
                        [244, 230, 30],
                        [246, 230, 32],
                        [248, 230, 33],
                        [251, 231, 35],
                        [253, 231, 37]
                    ];
                    /** Matplotlib's Plasma color map. */

                    const plasma_cmap = [
                        [13, 8, 135],
                        [16, 7, 136],
                        [19, 7, 137],
                        [22, 7, 138],
                        [25, 6, 140],
                        [27, 6, 141],
                        [29, 6, 142],
                        [32, 6, 143],
                        [34, 6, 144],
                        [36, 6, 145],
                        [38, 5, 145],
                        [40, 5, 146],
                        [42, 5, 147],
                        [44, 5, 148],
                        [46, 5, 149],
                        [47, 5, 150],
                        [49, 5, 151],
                        [51, 5, 151],
                        [53, 4, 152],
                        [55, 4, 153],
                        [56, 4, 154],
                        [58, 4, 154],
                        [60, 4, 155],
                        [62, 4, 156],
                        [63, 4, 156],
                        [65, 4, 157],
                        [67, 3, 158],
                        [68, 3, 158],
                        [70, 3, 159],
                        [72, 3, 159],
                        [73, 3, 160],
                        [75, 3, 161],
                        [76, 2, 161],
                        [78, 2, 162],
                        [80, 2, 162],
                        [81, 2, 163],
                        [83, 2, 163],
                        [85, 2, 164],
                        [86, 1, 164],
                        [88, 1, 164],
                        [89, 1, 165],
                        [91, 1, 165],
                        [92, 1, 166],
                        [94, 1, 166],
                        [96, 1, 166],
                        [97, 0, 167],
                        [99, 0, 167],
                        [100, 0, 167],
                        [102, 0, 167],
                        [103, 0, 168],
                        [105, 0, 168],
                        [106, 0, 168],
                        [108, 0, 168],
                        [110, 0, 168],
                        [111, 0, 168],
                        [113, 0, 168],
                        [114, 1, 168],
                        [116, 1, 168],
                        [117, 1, 168],
                        [119, 1, 168],
                        [120, 1, 168],
                        [122, 2, 168],
                        [123, 2, 168],
                        [125, 3, 168],
                        [126, 3, 168],
                        [128, 4, 168],
                        [129, 4, 167],
                        [131, 5, 167],
                        [132, 5, 167],
                        [134, 6, 166],
                        [135, 7, 166],
                        [136, 8, 166],
                        [138, 9, 165],
                        [139, 10, 165],
                        [141, 11, 165],
                        [142, 12, 164],
                        [143, 13, 164],
                        [145, 14, 163],
                        [146, 15, 163],
                        [148, 16, 162],
                        [149, 17, 161],
                        [150, 19, 161],
                        [152, 20, 160],
                        [153, 21, 159],
                        [154, 22, 159],
                        [156, 23, 158],
                        [157, 24, 157],
                        [158, 25, 157],
                        [160, 26, 156],
                        [161, 27, 155],
                        [162, 29, 154],
                        [163, 30, 154],
                        [165, 31, 153],
                        [166, 32, 152],
                        [167, 33, 151],
                        [168, 34, 150],
                        [170, 35, 149],
                        [171, 36, 148],
                        [172, 38, 148],
                        [173, 39, 147],
                        [174, 40, 146],
                        [176, 41, 145],
                        [177, 42, 144],
                        [178, 43, 143],
                        [179, 44, 142],
                        [180, 46, 141],
                        [181, 47, 140],
                        [182, 48, 139],
                        [183, 49, 138],
                        [184, 50, 137],
                        [186, 51, 136],
                        [187, 52, 136],
                        [188, 53, 135],
                        [189, 55, 134],
                        [190, 56, 133],
                        [191, 57, 132],
                        [192, 58, 131],
                        [193, 59, 130],
                        [194, 60, 129],
                        [195, 61, 128],
                        [196, 62, 127],
                        [197, 64, 126],
                        [198, 65, 125],
                        [199, 66, 124],
                        [200, 67, 123],
                        [201, 68, 122],
                        [202, 69, 122],
                        [203, 70, 121],
                        [204, 71, 120],
                        [204, 73, 119],
                        [205, 74, 118],
                        [206, 75, 117],
                        [207, 76, 116],
                        [208, 77, 115],
                        [209, 78, 114],
                        [210, 79, 113],
                        [211, 81, 113],
                        [212, 82, 112],
                        [213, 83, 111],
                        [213, 84, 110],
                        [214, 85, 109],
                        [215, 86, 108],
                        [216, 87, 107],
                        [217, 88, 106],
                        [218, 90, 106],
                        [218, 91, 105],
                        [219, 92, 104],
                        [220, 93, 103],
                        [221, 94, 102],
                        [222, 95, 101],
                        [222, 97, 100],
                        [223, 98, 99],
                        [224, 99, 99],
                        [225, 100, 98],
                        [226, 101, 97],
                        [226, 102, 96],
                        [227, 104, 95],
                        [228, 105, 94],
                        [229, 106, 93],
                        [229, 107, 93],
                        [230, 108, 92],
                        [231, 110, 91],
                        [231, 111, 90],
                        [232, 112, 89],
                        [233, 113, 88],
                        [233, 114, 87],
                        [234, 116, 87],
                        [235, 117, 86],
                        [235, 118, 85],
                        [236, 119, 84],
                        [237, 121, 83],
                        [237, 122, 82],
                        [238, 123, 81],
                        [239, 124, 81],
                        [239, 126, 80],
                        [240, 127, 79],
                        [240, 128, 78],
                        [241, 129, 77],
                        [241, 131, 76],
                        [242, 132, 75],
                        [243, 133, 75],
                        [243, 135, 74],
                        [244, 136, 73],
                        [244, 137, 72],
                        [245, 139, 71],
                        [245, 140, 70],
                        [246, 141, 69],
                        [246, 143, 68],
                        [247, 144, 68],
                        [247, 145, 67],
                        [247, 147, 66],
                        [248, 148, 65],
                        [248, 149, 64],
                        [249, 151, 63],
                        [249, 152, 62],
                        [249, 154, 62],
                        [250, 155, 61],
                        [250, 156, 60],
                        [250, 158, 59],
                        [251, 159, 58],
                        [251, 161, 57],
                        [251, 162, 56],
                        [252, 163, 56],
                        [252, 165, 55],
                        [252, 166, 54],
                        [252, 168, 53],
                        [252, 169, 52],
                        [253, 171, 51],
                        [253, 172, 51],
                        [253, 174, 50],
                        [253, 175, 49],
                        [253, 177, 48],
                        [253, 178, 47],
                        [253, 180, 47],
                        [253, 181, 46],
                        [254, 183, 45],
                        [254, 184, 44],
                        [254, 186, 44],
                        [254, 187, 43],
                        [254, 189, 42],
                        [254, 190, 42],
                        [254, 192, 41],
                        [253, 194, 41],
                        [253, 195, 40],
                        [253, 197, 39],
                        [253, 198, 39],
                        [253, 200, 39],
                        [253, 202, 38],
                        [253, 203, 38],
                        [252, 205, 37],
                        [252, 206, 37],
                        [252, 208, 37],
                        [252, 210, 37],
                        [251, 211, 36],
                        [251, 213, 36],
                        [251, 215, 36],
                        [250, 216, 36],
                        [250, 218, 36],
                        [249, 220, 36],
                        [249, 221, 37],
                        [248, 223, 37],
                        [248, 225, 37],
                        [247, 226, 37],
                        [247, 228, 37],
                        [246, 230, 38],
                        [246, 232, 38],
                        [245, 233, 38],
                        [245, 235, 39],
                        [244, 237, 39],
                        [243, 238, 39],
                        [243, 240, 39],
                        [242, 242, 39],
                        [241, 244, 38],
                        [241, 245, 37],
                        [240, 247, 36],
                        [240, 249, 33]
                    ];
                    /** Matplotlib's Inferno color map. */

                    const inferno_cmap = [
                        [0, 0, 4],
                        [1, 0, 5],
                        [1, 1, 6],
                        [1, 1, 8],
                        [2, 1, 10],
                        [2, 2, 12],
                        [2, 2, 14],
                        [3, 2, 16],
                        [4, 3, 18],
                        [4, 3, 20],
                        [5, 4, 23],
                        [6, 4, 25],
                        [7, 5, 27],
                        [8, 5, 29],
                        [9, 6, 31],
                        [10, 7, 34],
                        [11, 7, 36],
                        [12, 8, 38],
                        [13, 8, 41],
                        [14, 9, 43],
                        [16, 9, 45],
                        [17, 10, 48],
                        [18, 10, 50],
                        [20, 11, 52],
                        [21, 11, 55],
                        [22, 11, 57],
                        [24, 12, 60],
                        [25, 12, 62],
                        [27, 12, 65],
                        [28, 12, 67],
                        [30, 12, 69],
                        [31, 12, 72],
                        [33, 12, 74],
                        [35, 12, 76],
                        [36, 12, 79],
                        [38, 12, 81],
                        [40, 11, 83],
                        [41, 11, 85],
                        [43, 11, 87],
                        [45, 11, 89],
                        [47, 10, 91],
                        [49, 10, 92],
                        [50, 10, 94],
                        [52, 10, 95],
                        [54, 9, 97],
                        [56, 9, 98],
                        [57, 9, 99],
                        [59, 9, 100],
                        [61, 9, 101],
                        [62, 9, 102],
                        [64, 10, 103],
                        [66, 10, 104],
                        [68, 10, 104],
                        [69, 10, 105],
                        [71, 11, 106],
                        [73, 11, 106],
                        [74, 12, 107],
                        [76, 12, 107],
                        [77, 13, 108],
                        [79, 13, 108],
                        [81, 14, 108],
                        [82, 14, 109],
                        [84, 15, 109],
                        [85, 15, 109],
                        [87, 16, 110],
                        [89, 16, 110],
                        [90, 17, 110],
                        [92, 18, 110],
                        [93, 18, 110],
                        [95, 19, 110],
                        [97, 19, 110],
                        [98, 20, 110],
                        [100, 21, 110],
                        [101, 21, 110],
                        [103, 22, 110],
                        [105, 22, 110],
                        [106, 23, 110],
                        [108, 24, 110],
                        [109, 24, 110],
                        [111, 25, 110],
                        [113, 25, 110],
                        [114, 26, 110],
                        [116, 26, 110],
                        [117, 27, 110],
                        [119, 28, 109],
                        [120, 28, 109],
                        [122, 29, 109],
                        [124, 29, 109],
                        [125, 30, 109],
                        [127, 30, 108],
                        [128, 31, 108],
                        [130, 32, 108],
                        [132, 32, 107],
                        [133, 33, 107],
                        [135, 33, 107],
                        [136, 34, 106],
                        [138, 34, 106],
                        [140, 35, 105],
                        [141, 35, 105],
                        [143, 36, 105],
                        [144, 37, 104],
                        [146, 37, 104],
                        [147, 38, 103],
                        [149, 38, 103],
                        [151, 39, 102],
                        [152, 39, 102],
                        [154, 40, 101],
                        [155, 41, 100],
                        [157, 41, 100],
                        [159, 42, 99],
                        [160, 42, 99],
                        [162, 43, 98],
                        [163, 44, 97],
                        [165, 44, 96],
                        [166, 45, 96],
                        [168, 46, 95],
                        [169, 46, 94],
                        [171, 47, 94],
                        [173, 48, 93],
                        [174, 48, 92],
                        [176, 49, 91],
                        [177, 50, 90],
                        [179, 50, 90],
                        [180, 51, 89],
                        [182, 52, 88],
                        [183, 53, 87],
                        [185, 53, 86],
                        [186, 54, 85],
                        [188, 55, 84],
                        [189, 56, 83],
                        [191, 57, 82],
                        [192, 58, 81],
                        [193, 58, 80],
                        [195, 59, 79],
                        [196, 60, 78],
                        [198, 61, 77],
                        [199, 62, 76],
                        [200, 63, 75],
                        [202, 64, 74],
                        [203, 65, 73],
                        [204, 66, 72],
                        [206, 67, 71],
                        [207, 68, 70],
                        [208, 69, 69],
                        [210, 70, 68],
                        [211, 71, 67],
                        [212, 72, 66],
                        [213, 74, 65],
                        [215, 75, 63],
                        [216, 76, 62],
                        [217, 77, 61],
                        [218, 78, 60],
                        [219, 80, 59],
                        [221, 81, 58],
                        [222, 82, 56],
                        [223, 83, 55],
                        [224, 85, 54],
                        [225, 86, 53],
                        [226, 87, 52],
                        [227, 89, 51],
                        [228, 90, 49],
                        [229, 92, 48],
                        [230, 93, 47],
                        [231, 94, 46],
                        [232, 96, 45],
                        [233, 97, 43],
                        [234, 99, 42],
                        [235, 100, 41],
                        [235, 102, 40],
                        [236, 103, 38],
                        [237, 105, 37],
                        [238, 106, 36],
                        [239, 108, 35],
                        [239, 110, 33],
                        [240, 111, 32],
                        [241, 113, 31],
                        [241, 115, 29],
                        [242, 116, 28],
                        [243, 118, 27],
                        [243, 120, 25],
                        [244, 121, 24],
                        [245, 123, 23],
                        [245, 125, 21],
                        [246, 126, 20],
                        [246, 128, 19],
                        [247, 130, 18],
                        [247, 132, 16],
                        [248, 133, 15],
                        [248, 135, 14],
                        [248, 137, 12],
                        [249, 139, 11],
                        [249, 140, 10],
                        [249, 142, 9],
                        [250, 144, 8],
                        [250, 146, 7],
                        [250, 148, 7],
                        [251, 150, 6],
                        [251, 151, 6],
                        [251, 153, 6],
                        [251, 155, 6],
                        [251, 157, 7],
                        [252, 159, 7],
                        [252, 161, 8],
                        [252, 163, 9],
                        [252, 165, 10],
                        [252, 166, 12],
                        [252, 168, 13],
                        [252, 170, 15],
                        [252, 172, 17],
                        [252, 174, 18],
                        [252, 176, 20],
                        [252, 178, 22],
                        [252, 180, 24],
                        [251, 182, 26],
                        [251, 184, 29],
                        [251, 186, 31],
                        [251, 188, 33],
                        [251, 190, 35],
                        [250, 192, 38],
                        [250, 194, 40],
                        [250, 196, 42],
                        [250, 198, 45],
                        [249, 199, 47],
                        [249, 201, 50],
                        [249, 203, 53],
                        [248, 205, 55],
                        [248, 207, 58],
                        [247, 209, 61],
                        [247, 211, 64],
                        [246, 213, 67],
                        [246, 215, 70],
                        [245, 217, 73],
                        [245, 219, 76],
                        [244, 221, 79],
                        [244, 223, 83],
                        [244, 225, 86],
                        [243, 227, 90],
                        [243, 229, 93],
                        [242, 230, 97],
                        [242, 232, 101],
                        [242, 234, 105],
                        [241, 236, 109],
                        [241, 237, 113],
                        [241, 239, 117],
                        [241, 241, 121],
                        [242, 242, 125],
                        [242, 244, 130],
                        [243, 245, 134],
                        [243, 246, 138],
                        [244, 248, 142],
                        [245, 249, 146],
                        [246, 250, 150],
                        [248, 251, 154],
                        [249, 252, 157],
                        [250, 253, 161],
                        [252, 255, 164]
                    ];
                    /** Matplotlib's Magma color map. */

                    const magma_cmap = [
                        [0, 0, 4],
                        [1, 0, 5],
                        [1, 1, 6],
                        [1, 1, 8],
                        [2, 1, 9],
                        [2, 2, 11],
                        [2, 2, 13],
                        [3, 3, 15],
                        [3, 3, 18],
                        [4, 4, 20],
                        [5, 4, 22],
                        [6, 5, 24],
                        [6, 5, 26],
                        [7, 6, 28],
                        [8, 7, 30],
                        [9, 7, 32],
                        [10, 8, 34],
                        [11, 9, 36],
                        [12, 9, 38],
                        [13, 10, 41],
                        [14, 11, 43],
                        [16, 11, 45],
                        [17, 12, 47],
                        [18, 13, 49],
                        [19, 13, 52],
                        [20, 14, 54],
                        [21, 14, 56],
                        [22, 15, 59],
                        [24, 15, 61],
                        [25, 16, 63],
                        [26, 16, 66],
                        [28, 16, 68],
                        [29, 17, 71],
                        [30, 17, 73],
                        [32, 17, 75],
                        [33, 17, 78],
                        [34, 17, 80],
                        [36, 18, 83],
                        [37, 18, 85],
                        [39, 18, 88],
                        [41, 17, 90],
                        [42, 17, 92],
                        [44, 17, 95],
                        [45, 17, 97],
                        [47, 17, 99],
                        [49, 17, 101],
                        [51, 16, 103],
                        [52, 16, 105],
                        [54, 16, 107],
                        [56, 16, 108],
                        [57, 15, 110],
                        [59, 15, 112],
                        [61, 15, 113],
                        [63, 15, 114],
                        [64, 15, 116],
                        [66, 15, 117],
                        [68, 15, 118],
                        [69, 16, 119],
                        [71, 16, 120],
                        [73, 16, 120],
                        [74, 16, 121],
                        [76, 17, 122],
                        [78, 17, 123],
                        [79, 18, 123],
                        [81, 18, 124],
                        [82, 19, 124],
                        [84, 19, 125],
                        [86, 20, 125],
                        [87, 21, 126],
                        [89, 21, 126],
                        [90, 22, 126],
                        [92, 22, 127],
                        [93, 23, 127],
                        [95, 24, 127],
                        [96, 24, 128],
                        [98, 25, 128],
                        [100, 26, 128],
                        [101, 26, 128],
                        [103, 27, 128],
                        [104, 28, 129],
                        [106, 28, 129],
                        [107, 29, 129],
                        [109, 29, 129],
                        [110, 30, 129],
                        [112, 31, 129],
                        [114, 31, 129],
                        [115, 32, 129],
                        [117, 33, 129],
                        [118, 33, 129],
                        [120, 34, 129],
                        [121, 34, 130],
                        [123, 35, 130],
                        [124, 35, 130],
                        [126, 36, 130],
                        [128, 37, 130],
                        [129, 37, 129],
                        [131, 38, 129],
                        [132, 38, 129],
                        [134, 39, 129],
                        [136, 39, 129],
                        [137, 40, 129],
                        [139, 41, 129],
                        [140, 41, 129],
                        [142, 42, 129],
                        [144, 42, 129],
                        [145, 43, 129],
                        [147, 43, 128],
                        [148, 44, 128],
                        [150, 44, 128],
                        [152, 45, 128],
                        [153, 45, 128],
                        [155, 46, 127],
                        [156, 46, 127],
                        [158, 47, 127],
                        [160, 47, 127],
                        [161, 48, 126],
                        [163, 48, 126],
                        [165, 49, 126],
                        [166, 49, 125],
                        [168, 50, 125],
                        [170, 51, 125],
                        [171, 51, 124],
                        [173, 52, 124],
                        [174, 52, 123],
                        [176, 53, 123],
                        [178, 53, 123],
                        [179, 54, 122],
                        [181, 54, 122],
                        [183, 55, 121],
                        [184, 55, 121],
                        [186, 56, 120],
                        [188, 57, 120],
                        [189, 57, 119],
                        [191, 58, 119],
                        [192, 58, 118],
                        [194, 59, 117],
                        [196, 60, 117],
                        [197, 60, 116],
                        [199, 61, 115],
                        [200, 62, 115],
                        [202, 62, 114],
                        [204, 63, 113],
                        [205, 64, 113],
                        [207, 64, 112],
                        [208, 65, 111],
                        [210, 66, 111],
                        [211, 67, 110],
                        [213, 68, 109],
                        [214, 69, 108],
                        [216, 69, 108],
                        [217, 70, 107],
                        [219, 71, 106],
                        [220, 72, 105],
                        [222, 73, 104],
                        [223, 74, 104],
                        [224, 76, 103],
                        [226, 77, 102],
                        [227, 78, 101],
                        [228, 79, 100],
                        [229, 80, 100],
                        [231, 82, 99],
                        [232, 83, 98],
                        [233, 84, 98],
                        [234, 86, 97],
                        [235, 87, 96],
                        [236, 88, 96],
                        [237, 90, 95],
                        [238, 91, 94],
                        [239, 93, 94],
                        [240, 95, 94],
                        [241, 96, 93],
                        [242, 98, 93],
                        [242, 100, 92],
                        [243, 101, 92],
                        [244, 103, 92],
                        [244, 105, 92],
                        [245, 107, 92],
                        [246, 108, 92],
                        [246, 110, 92],
                        [247, 112, 92],
                        [247, 114, 92],
                        [248, 116, 92],
                        [248, 118, 92],
                        [249, 120, 93],
                        [249, 121, 93],
                        [249, 123, 93],
                        [250, 125, 94],
                        [250, 127, 94],
                        [250, 129, 95],
                        [251, 131, 95],
                        [251, 133, 96],
                        [251, 135, 97],
                        [252, 137, 97],
                        [252, 138, 98],
                        [252, 140, 99],
                        [252, 142, 100],
                        [252, 144, 101],
                        [253, 146, 102],
                        [253, 148, 103],
                        [253, 150, 104],
                        [253, 152, 105],
                        [253, 154, 106],
                        [253, 155, 107],
                        [254, 157, 108],
                        [254, 159, 109],
                        [254, 161, 110],
                        [254, 163, 111],
                        [254, 165, 113],
                        [254, 167, 114],
                        [254, 169, 115],
                        [254, 170, 116],
                        [254, 172, 118],
                        [254, 174, 119],
                        [254, 176, 120],
                        [254, 178, 122],
                        [254, 180, 123],
                        [254, 182, 124],
                        [254, 183, 126],
                        [254, 185, 127],
                        [254, 187, 129],
                        [254, 189, 130],
                        [254, 191, 132],
                        [254, 193, 133],
                        [254, 194, 135],
                        [254, 196, 136],
                        [254, 198, 138],
                        [254, 200, 140],
                        [254, 202, 141],
                        [254, 204, 143],
                        [254, 205, 144],
                        [254, 207, 146],
                        [254, 209, 148],
                        [254, 211, 149],
                        [254, 213, 151],
                        [254, 215, 153],
                        [254, 216, 154],
                        [253, 218, 156],
                        [253, 220, 158],
                        [253, 222, 160],
                        [253, 224, 161],
                        [253, 226, 163],
                        [253, 227, 165],
                        [253, 229, 167],
                        [253, 231, 169],
                        [253, 233, 170],
                        [253, 235, 172],
                        [252, 236, 174],
                        [252, 238, 176],
                        [252, 240, 178],
                        [252, 242, 180],
                        [252, 244, 182],
                        [252, 246, 184],
                        [252, 247, 185],
                        [252, 249, 187],
                        [252, 251, 189],
                        [252, 253, 191]
                    ];
                    /** Matplotlib's Hot color map. */

                    const hot_cmap = [
                        [11, 0, 0],
                        [13, 0, 0],
                        [16, 0, 0],
                        [18, 0, 0],
                        [21, 0, 0],
                        [24, 0, 0],
                        [26, 0, 0],
                        [29, 0, 0],
                        [32, 0, 0],
                        [34, 0, 0],
                        [37, 0, 0],
                        [39, 0, 0],
                        [42, 0, 0],
                        [45, 0, 0],
                        [47, 0, 0],
                        [50, 0, 0],
                        [53, 0, 0],
                        [55, 0, 0],
                        [58, 0, 0],
                        [60, 0, 0],
                        [63, 0, 0],
                        [66, 0, 0],
                        [68, 0, 0],
                        [71, 0, 0],
                        [74, 0, 0],
                        [76, 0, 0],
                        [79, 0, 0],
                        [81, 0, 0],
                        [84, 0, 0],
                        [87, 0, 0],
                        [89, 0, 0],
                        [92, 0, 0],
                        [95, 0, 0],
                        [97, 0, 0],
                        [100, 0, 0],
                        [102, 0, 0],
                        [105, 0, 0],
                        [108, 0, 0],
                        [110, 0, 0],
                        [113, 0, 0],
                        [116, 0, 0],
                        [118, 0, 0],
                        [121, 0, 0],
                        [123, 0, 0],
                        [126, 0, 0],
                        [129, 0, 0],
                        [131, 0, 0],
                        [134, 0, 0],
                        [137, 0, 0],
                        [139, 0, 0],
                        [142, 0, 0],
                        [144, 0, 0],
                        [147, 0, 0],
                        [150, 0, 0],
                        [152, 0, 0],
                        [155, 0, 0],
                        [158, 0, 0],
                        [160, 0, 0],
                        [163, 0, 0],
                        [165, 0, 0],
                        [168, 0, 0],
                        [171, 0, 0],
                        [173, 0, 0],
                        [176, 0, 0],
                        [179, 0, 0],
                        [181, 0, 0],
                        [184, 0, 0],
                        [186, 0, 0],
                        [189, 0, 0],
                        [192, 0, 0],
                        [194, 0, 0],
                        [197, 0, 0],
                        [200, 0, 0],
                        [202, 0, 0],
                        [205, 0, 0],
                        [207, 0, 0],
                        [210, 0, 0],
                        [213, 0, 0],
                        [215, 0, 0],
                        [218, 0, 0],
                        [221, 0, 0],
                        [223, 0, 0],
                        [226, 0, 0],
                        [228, 0, 0],
                        [231, 0, 0],
                        [234, 0, 0],
                        [236, 0, 0],
                        [239, 0, 0],
                        [242, 0, 0],
                        [244, 0, 0],
                        [247, 0, 0],
                        [249, 0, 0],
                        [252, 0, 0],
                        [255, 0, 0],
                        [255, 2, 0],
                        [255, 5, 0],
                        [255, 8, 0],
                        [255, 10, 0],
                        [255, 13, 0],
                        [255, 16, 0],
                        [255, 18, 0],
                        [255, 21, 0],
                        [255, 23, 0],
                        [255, 26, 0],
                        [255, 29, 0],
                        [255, 31, 0],
                        [255, 34, 0],
                        [255, 37, 0],
                        [255, 39, 0],
                        [255, 42, 0],
                        [255, 44, 0],
                        [255, 47, 0],
                        [255, 50, 0],
                        [255, 52, 0],
                        [255, 55, 0],
                        [255, 58, 0],
                        [255, 60, 0],
                        [255, 63, 0],
                        [255, 65, 0],
                        [255, 68, 0],
                        [255, 71, 0],
                        [255, 73, 0],
                        [255, 76, 0],
                        [255, 79, 0],
                        [255, 81, 0],
                        [255, 84, 0],
                        [255, 86, 0],
                        [255, 89, 0],
                        [255, 92, 0],
                        [255, 94, 0],
                        [255, 97, 0],
                        [255, 100, 0],
                        [255, 102, 0],
                        [255, 105, 0],
                        [255, 107, 0],
                        [255, 110, 0],
                        [255, 113, 0],
                        [255, 115, 0],
                        [255, 118, 0],
                        [255, 121, 0],
                        [255, 123, 0],
                        [255, 126, 0],
                        [255, 128, 0],
                        [255, 131, 0],
                        [255, 134, 0],
                        [255, 136, 0],
                        [255, 139, 0],
                        [255, 142, 0],
                        [255, 144, 0],
                        [255, 147, 0],
                        [255, 149, 0],
                        [255, 152, 0],
                        [255, 155, 0],
                        [255, 157, 0],
                        [255, 160, 0],
                        [255, 162, 0],
                        [255, 165, 0],
                        [255, 168, 0],
                        [255, 170, 0],
                        [255, 173, 0],
                        [255, 176, 0],
                        [255, 178, 0],
                        [255, 181, 0],
                        [255, 183, 0],
                        [255, 186, 0],
                        [255, 189, 0],
                        [255, 191, 0],
                        [255, 194, 0],
                        [255, 197, 0],
                        [255, 199, 0],
                        [255, 202, 0],
                        [255, 204, 0],
                        [255, 207, 0],
                        [255, 210, 0],
                        [255, 212, 0],
                        [255, 215, 0],
                        [255, 218, 0],
                        [255, 220, 0],
                        [255, 223, 0],
                        [255, 225, 0],
                        [255, 228, 0],
                        [255, 231, 0],
                        [255, 233, 0],
                        [255, 236, 0],
                        [255, 239, 0],
                        [255, 241, 0],
                        [255, 244, 0],
                        [255, 246, 0],
                        [255, 249, 0],
                        [255, 252, 0],
                        [255, 254, 0],
                        [255, 255, 3],
                        [255, 255, 7],
                        [255, 255, 11],
                        [255, 255, 15],
                        [255, 255, 19],
                        [255, 255, 23],
                        [255, 255, 27],
                        [255, 255, 31],
                        [255, 255, 34],
                        [255, 255, 38],
                        [255, 255, 42],
                        [255, 255, 46],
                        [255, 255, 50],
                        [255, 255, 54],
                        [255, 255, 58],
                        [255, 255, 62],
                        [255, 255, 66],
                        [255, 255, 70],
                        [255, 255, 74],
                        [255, 255, 78],
                        [255, 255, 82],
                        [255, 255, 86],
                        [255, 255, 90],
                        [255, 255, 94],
                        [255, 255, 97],
                        [255, 255, 101],
                        [255, 255, 105],
                        [255, 255, 109],
                        [255, 255, 113],
                        [255, 255, 117],
                        [255, 255, 121],
                        [255, 255, 125],
                        [255, 255, 129],
                        [255, 255, 133],
                        [255, 255, 137],
                        [255, 255, 141],
                        [255, 255, 145],
                        [255, 255, 149],
                        [255, 255, 153],
                        [255, 255, 157],
                        [255, 255, 160],
                        [255, 255, 164],
                        [255, 255, 168],
                        [255, 255, 172],
                        [255, 255, 176],
                        [255, 255, 180],
                        [255, 255, 184],
                        [255, 255, 188],
                        [255, 255, 192],
                        [255, 255, 196],
                        [255, 255, 200],
                        [255, 255, 204],
                        [255, 255, 208],
                        [255, 255, 212],
                        [255, 255, 216],
                        [255, 255, 220],
                        [255, 255, 223],
                        [255, 255, 227],
                        [255, 255, 231],
                        [255, 255, 235],
                        [255, 255, 239],
                        [255, 255, 243],
                        [255, 255, 247],
                        [255, 255, 251],
                        [255, 255, 255]
                    ];
                    /** Matplotlib's AfmHot color map. */

                    const afmhot_cmap = [
                        [0, 0, 0],
                        [2, 0, 0],
                        [4, 0, 0],
                        [6, 0, 0],
                        [8, 0, 0],
                        [10, 0, 0],
                        [12, 0, 0],
                        [14, 0, 0],
                        [16, 0, 0],
                        [18, 0, 0],
                        [20, 0, 0],
                        [22, 0, 0],
                        [24, 0, 0],
                        [26, 0, 0],
                        [28, 0, 0],
                        [30, 0, 0],
                        [32, 0, 0],
                        [34, 0, 0],
                        [36, 0, 0],
                        [38, 0, 0],
                        [40, 0, 0],
                        [42, 0, 0],
                        [44, 0, 0],
                        [46, 0, 0],
                        [48, 0, 0],
                        [50, 0, 0],
                        [52, 0, 0],
                        [54, 0, 0],
                        [56, 0, 0],
                        [58, 0, 0],
                        [60, 0, 0],
                        [62, 0, 0],
                        [64, 0, 0],
                        [66, 0, 0],
                        [68, 0, 0],
                        [70, 0, 0],
                        [72, 0, 0],
                        [74, 0, 0],
                        [76, 0, 0],
                        [78, 0, 0],
                        [80, 0, 0],
                        [82, 0, 0],
                        [84, 0, 0],
                        [86, 0, 0],
                        [88, 0, 0],
                        [90, 0, 0],
                        [92, 0, 0],
                        [94, 0, 0],
                        [96, 0, 0],
                        [98, 0, 0],
                        [100, 0, 0],
                        [102, 0, 0],
                        [104, 0, 0],
                        [106, 0, 0],
                        [108, 0, 0],
                        [110, 0, 0],
                        [112, 0, 0],
                        [114, 0, 0],
                        [116, 0, 0],
                        [118, 0, 0],
                        [120, 0, 0],
                        [122, 0, 0],
                        [124, 0, 0],
                        [126, 0, 0],
                        [128, 0, 0],
                        [130, 2, 0],
                        [132, 4, 0],
                        [134, 7, 0],
                        [136, 8, 0],
                        [138, 10, 0],
                        [140, 13, 0],
                        [142, 15, 0],
                        [144, 16, 0],
                        [146, 18, 0],
                        [148, 20, 0],
                        [150, 23, 0],
                        [152, 24, 0],
                        [154, 26, 0],
                        [156, 29, 0],
                        [158, 31, 0],
                        [160, 33, 0],
                        [162, 34, 0],
                        [164, 36, 0],
                        [166, 39, 0],
                        [168, 41, 0],
                        [170, 42, 0],
                        [172, 45, 0],
                        [174, 47, 0],
                        [176, 49, 0],
                        [178, 50, 0],
                        [180, 52, 0],
                        [182, 55, 0],
                        [184, 57, 0],
                        [186, 58, 0],
                        [188, 61, 0],
                        [190, 63, 0],
                        [192, 65, 0],
                        [194, 66, 0],
                        [196, 68, 0],
                        [198, 71, 0],
                        [200, 73, 0],
                        [202, 74, 0],
                        [204, 77, 0],
                        [206, 79, 0],
                        [208, 81, 0],
                        [210, 82, 0],
                        [212, 84, 0],
                        [214, 87, 0],
                        [216, 89, 0],
                        [218, 90, 0],
                        [220, 93, 0],
                        [222, 95, 0],
                        [224, 97, 0],
                        [226, 98, 0],
                        [228, 100, 0],
                        [230, 103, 0],
                        [232, 105, 0],
                        [234, 106, 0],
                        [236, 109, 0],
                        [238, 111, 0],
                        [240, 113, 0],
                        [242, 114, 0],
                        [244, 116, 0],
                        [246, 119, 0],
                        [248, 121, 0],
                        [250, 122, 0],
                        [252, 125, 0],
                        [254, 127, 0],
                        [255, 129, 1],
                        [255, 131, 3],
                        [255, 132, 5],
                        [255, 134, 7],
                        [255, 136, 9],
                        [255, 139, 11],
                        [255, 141, 13],
                        [255, 143, 15],
                        [255, 145, 17],
                        [255, 147, 19],
                        [255, 148, 21],
                        [255, 150, 23],
                        [255, 153, 25],
                        [255, 155, 27],
                        [255, 157, 29],
                        [255, 159, 31],
                        [255, 161, 33],
                        [255, 163, 35],
                        [255, 164, 37],
                        [255, 166, 39],
                        [255, 168, 41],
                        [255, 171, 43],
                        [255, 173, 45],
                        [255, 175, 47],
                        [255, 177, 49],
                        [255, 179, 51],
                        [255, 180, 53],
                        [255, 182, 55],
                        [255, 185, 57],
                        [255, 187, 59],
                        [255, 189, 61],
                        [255, 191, 63],
                        [255, 193, 65],
                        [255, 195, 67],
                        [255, 196, 69],
                        [255, 198, 71],
                        [255, 200, 73],
                        [255, 203, 75],
                        [255, 205, 77],
                        [255, 207, 79],
                        [255, 209, 81],
                        [255, 211, 83],
                        [255, 212, 85],
                        [255, 214, 87],
                        [255, 217, 89],
                        [255, 219, 91],
                        [255, 221, 93],
                        [255, 223, 95],
                        [255, 225, 97],
                        [255, 227, 99],
                        [255, 228, 101],
                        [255, 230, 103],
                        [255, 232, 105],
                        [255, 235, 107],
                        [255, 237, 109],
                        [255, 239, 111],
                        [255, 241, 113],
                        [255, 243, 115],
                        [255, 244, 117],
                        [255, 246, 119],
                        [255, 249, 121],
                        [255, 251, 123],
                        [255, 253, 125],
                        [255, 255, 127],
                        [255, 255, 129],
                        [255, 255, 131],
                        [255, 255, 133],
                        [255, 255, 135],
                        [255, 255, 137],
                        [255, 255, 139],
                        [255, 255, 141],
                        [255, 255, 143],
                        [255, 255, 145],
                        [255, 255, 147],
                        [255, 255, 149],
                        [255, 255, 151],
                        [255, 255, 153],
                        [255, 255, 155],
                        [255, 255, 157],
                        [255, 255, 159],
                        [255, 255, 161],
                        [255, 255, 163],
                        [255, 255, 165],
                        [255, 255, 167],
                        [255, 255, 169],
                        [255, 255, 171],
                        [255, 255, 173],
                        [255, 255, 175],
                        [255, 255, 177],
                        [255, 255, 179],
                        [255, 255, 181],
                        [255, 255, 183],
                        [255, 255, 185],
                        [255, 255, 187],
                        [255, 255, 189],
                        [255, 255, 191],
                        [255, 255, 193],
                        [255, 255, 195],
                        [255, 255, 197],
                        [255, 255, 199],
                        [255, 255, 201],
                        [255, 255, 203],
                        [255, 255, 205],
                        [255, 255, 207],
                        [255, 255, 209],
                        [255, 255, 211],
                        [255, 255, 213],
                        [255, 255, 215],
                        [255, 255, 217],
                        [255, 255, 219],
                        [255, 255, 221],
                        [255, 255, 223],
                        [255, 255, 225],
                        [255, 255, 227],
                        [255, 255, 229],
                        [255, 255, 231],
                        [255, 255, 233],
                        [255, 255, 235],
                        [255, 255, 237],
                        [255, 255, 239],
                        [255, 255, 241],
                        [255, 255, 243],
                        [255, 255, 245],
                        [255, 255, 247],
                        [255, 255, 249],
                        [255, 255, 251],
                        [255, 255, 253],
                        [255, 255, 255]
                    ];
                    /** Matplotlib's Gist-Heat color map. */

                    const gist_heat_cmap = [
                        [0, 0, 0],
                        [2, 0, 0],
                        [3, 0, 0],
                        [5, 0, 0],
                        [6, 0, 0],
                        [8, 0, 0],
                        [9, 0, 0],
                        [11, 0, 0],
                        [12, 0, 0],
                        [14, 0, 0],
                        [15, 0, 0],
                        [16, 0, 0],
                        [18, 0, 0],
                        [20, 0, 0],
                        [21, 0, 0],
                        [22, 0, 0],
                        [24, 0, 0],
                        [26, 0, 0],
                        [27, 0, 0],
                        [28, 0, 0],
                        [30, 0, 0],
                        [32, 0, 0],
                        [33, 0, 0],
                        [35, 0, 0],
                        [36, 0, 0],
                        [38, 0, 0],
                        [39, 0, 0],
                        [41, 0, 0],
                        [42, 0, 0],
                        [44, 0, 0],
                        [45, 0, 0],
                        [47, 0, 0],
                        [48, 0, 0],
                        [49, 0, 0],
                        [51, 0, 0],
                        [53, 0, 0],
                        [54, 0, 0],
                        [55, 0, 0],
                        [57, 0, 0],
                        [59, 0, 0],
                        [60, 0, 0],
                        [61, 0, 0],
                        [63, 0, 0],
                        [65, 0, 0],
                        [66, 0, 0],
                        [67, 0, 0],
                        [69, 0, 0],
                        [71, 0, 0],
                        [72, 0, 0],
                        [74, 0, 0],
                        [75, 0, 0],
                        [77, 0, 0],
                        [78, 0, 0],
                        [80, 0, 0],
                        [81, 0, 0],
                        [83, 0, 0],
                        [84, 0, 0],
                        [86, 0, 0],
                        [87, 0, 0],
                        [89, 0, 0],
                        [90, 0, 0],
                        [91, 0, 0],
                        [93, 0, 0],
                        [95, 0, 0],
                        [96, 0, 0],
                        [98, 0, 0],
                        [99, 0, 0],
                        [101, 0, 0],
                        [102, 0, 0],
                        [104, 0, 0],
                        [105, 0, 0],
                        [107, 0, 0],
                        [108, 0, 0],
                        [110, 0, 0],
                        [111, 0, 0],
                        [113, 0, 0],
                        [114, 0, 0],
                        [115, 0, 0],
                        [117, 0, 0],
                        [119, 0, 0],
                        [120, 0, 0],
                        [122, 0, 0],
                        [123, 0, 0],
                        [125, 0, 0],
                        [126, 0, 0],
                        [128, 0, 0],
                        [129, 0, 0],
                        [131, 0, 0],
                        [132, 0, 0],
                        [133, 0, 0],
                        [135, 0, 0],
                        [137, 0, 0],
                        [138, 0, 0],
                        [139, 0, 0],
                        [141, 0, 0],
                        [143, 0, 0],
                        [144, 0, 0],
                        [146, 0, 0],
                        [147, 0, 0],
                        [149, 0, 0],
                        [150, 0, 0],
                        [152, 0, 0],
                        [153, 0, 0],
                        [155, 0, 0],
                        [156, 0, 0],
                        [158, 0, 0],
                        [159, 0, 0],
                        [161, 0, 0],
                        [162, 0, 0],
                        [163, 0, 0],
                        [165, 0, 0],
                        [167, 0, 0],
                        [168, 0, 0],
                        [170, 0, 0],
                        [171, 0, 0],
                        [173, 0, 0],
                        [174, 0, 0],
                        [176, 0, 0],
                        [177, 0, 0],
                        [179, 0, 0],
                        [180, 0, 0],
                        [181, 0, 0],
                        [183, 0, 0],
                        [185, 0, 0],
                        [186, 0, 0],
                        [187, 0, 0],
                        [189, 0, 0],
                        [191, 0, 0],
                        [192, 1, 0],
                        [194, 3, 0],
                        [195, 5, 0],
                        [196, 7, 0],
                        [198, 9, 0],
                        [200, 11, 0],
                        [201, 13, 0],
                        [203, 15, 0],
                        [204, 17, 0],
                        [206, 19, 0],
                        [207, 21, 0],
                        [209, 23, 0],
                        [210, 25, 0],
                        [212, 27, 0],
                        [213, 29, 0],
                        [215, 31, 0],
                        [216, 33, 0],
                        [218, 35, 0],
                        [219, 37, 0],
                        [220, 39, 0],
                        [222, 41, 0],
                        [224, 43, 0],
                        [225, 45, 0],
                        [227, 47, 0],
                        [228, 49, 0],
                        [229, 51, 0],
                        [231, 53, 0],
                        [232, 55, 0],
                        [234, 57, 0],
                        [236, 59, 0],
                        [237, 61, 0],
                        [239, 63, 0],
                        [240, 65, 0],
                        [242, 67, 0],
                        [243, 69, 0],
                        [244, 71, 0],
                        [246, 73, 0],
                        [248, 75, 0],
                        [249, 77, 0],
                        [251, 79, 0],
                        [252, 81, 0],
                        [254, 83, 0],
                        [255, 85, 0],
                        [255, 87, 0],
                        [255, 89, 0],
                        [255, 91, 0],
                        [255, 93, 0],
                        [255, 95, 0],
                        [255, 97, 0],
                        [255, 99, 0],
                        [255, 101, 0],
                        [255, 103, 0],
                        [255, 105, 0],
                        [255, 107, 0],
                        [255, 109, 0],
                        [255, 111, 0],
                        [255, 113, 0],
                        [255, 115, 0],
                        [255, 117, 0],
                        [255, 119, 0],
                        [255, 121, 0],
                        [255, 123, 0],
                        [255, 125, 0],
                        [255, 127, 0],
                        [255, 129, 3],
                        [255, 131, 7],
                        [255, 133, 11],
                        [255, 135, 15],
                        [255, 137, 19],
                        [255, 139, 23],
                        [255, 141, 27],
                        [255, 143, 31],
                        [255, 145, 35],
                        [255, 147, 39],
                        [255, 149, 43],
                        [255, 151, 47],
                        [255, 153, 51],
                        [255, 155, 55],
                        [255, 157, 59],
                        [255, 159, 63],
                        [255, 161, 67],
                        [255, 163, 71],
                        [255, 165, 75],
                        [255, 167, 79],
                        [255, 169, 83],
                        [255, 171, 87],
                        [255, 173, 91],
                        [255, 175, 95],
                        [255, 177, 99],
                        [255, 179, 103],
                        [255, 181, 107],
                        [255, 183, 111],
                        [255, 185, 115],
                        [255, 187, 119],
                        [255, 189, 123],
                        [255, 191, 127],
                        [255, 193, 131],
                        [255, 195, 135],
                        [255, 197, 139],
                        [255, 199, 143],
                        [255, 201, 147],
                        [255, 203, 151],
                        [255, 205, 155],
                        [255, 207, 159],
                        [255, 209, 163],
                        [255, 211, 167],
                        [255, 213, 171],
                        [255, 215, 175],
                        [255, 217, 179],
                        [255, 219, 183],
                        [255, 221, 187],
                        [255, 223, 191],
                        [255, 225, 195],
                        [255, 227, 199],
                        [255, 229, 203],
                        [255, 231, 207],
                        [255, 233, 211],
                        [255, 235, 215],
                        [255, 237, 219],
                        [255, 239, 223],
                        [255, 241, 227],
                        [255, 243, 231],
                        [255, 245, 235],
                        [255, 247, 239],
                        [255, 249, 243],
                        [255, 251, 247],
                        [255, 253, 251],
                        [255, 255, 255]
                    ];

                    /***/
                }),

            /***/
            "./lib/naivecmap.js":
                /*!**************************!*\
                  !*** ./lib/naivecmap.js ***!
                  \**************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "grayscale_cmap": function () {
                            return /* binding */ grayscale_cmap;
                        },
                        /* harmony export */
                        "naive_cmap": function () {
                            return /* binding */ naive_cmap;
                        },
                        /* harmony export */
                        "phosphor_cmap": function () {
                            return /* binding */ phosphor_cmap;
                        },
                        /* harmony export */
                        "roentgen_cmap": function () {
                            return /* binding */ roentgen_cmap;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Some naive color maps.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */
                    function _naive_cmap(stops = 256) {
                        const cmap = [];

                        for (let i = 0; i < stops; ++i) {
                            let r, g, b;

                            if (i < stops / 4) {
                                b = i * 128 / (stops / 4);
                                g = 0;
                                r = 0;
                            } else if (i < stops / 2) {
                                b = 256 - i / 2;
                                g = 0;
                                r = i - stops / 4;
                            } else if (i < stops * 3 / 4) {
                                b = 0;
                                g = i - stops / 2;
                                r = 255;
                            } else {
                                b = i - stops * 3 / 4;
                                g = 255;
                                r = 255;
                            }

                            cmap.push([~~r, ~~g, ~~b]);
                        }

                        return cmap;
                    }
                    /** Naive rainbow color map. */


                    const naive_cmap = _naive_cmap();

                    function _grayscale_cmap(stops = 256) {
                        const cmap = [];

                        for (let i = 0; i < stops; ++i) {
                            let c = i * 255 / stops;
                            cmap.push([~~c, ~~c, ~~c]);
                        }

                        return cmap;
                    }
                    /** Black to white color map. */


                    const grayscale_cmap = _grayscale_cmap();

                    function _roentgen_cmap(stops = 256) {
                        const cmap = [];

                        for (let i = 0; i < stops; ++i) {
                            let c = 255 - i * 255 / stops;
                            cmap.push([~~c, ~~c, ~~c]);
                        }

                        return cmap;
                    }
                    /** White to black color map. */


                    const roentgen_cmap = _roentgen_cmap();

                    function _phosphor_cmap(stops = 256) {
                        const cmap = [];

                        for (let i = 0; i < stops; ++i) {
                            let r, g, b;

                            if (i < stops / 2) {
                                r = 0;
                                g = i * 191 / (stops / 2);
                                b = 0;
                            } else {
                                r = (i - stops / 2) * 255 / (stops / 2);
                                g = 191 + (i - stops / 2) * 64 / (stops / 2);
                                b = (i - stops / 2) * 255 / (stops / 2);
                            }

                            cmap.push([~~r, ~~g, ~~b]);
                        }

                        return cmap;
                    }
                    /** Black to green color map. */


                    const phosphor_cmap = _phosphor_cmap();

                    /***/
                }),

            /***/
            "./lib/parabolacmap.js":
                /*!*****************************!*\
                  !*** ./lib/parabolacmap.js ***!
                  \*****************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "parabola_cmap": function () {
                            return /* binding */ parabola_cmap;
                        }
                        /* harmony export */
                    });
                    /** Parabola color map. */
                    const parabola_cmap = [
                        [53, 42, 135],
                        [54, 48, 147],
                        [54, 55, 160],
                        [53, 61, 173],
                        [50, 67, 186],
                        [44, 74, 199],
                        [32, 83, 212],
                        [15, 92, 221],
                        [3, 99, 225],
                        [2, 104, 225],
                        [4, 109, 224],
                        [8, 113, 222],
                        [13, 117, 220],
                        [16, 121, 218],
                        [18, 125, 216],
                        [20, 129, 214],
                        [20, 133, 212],
                        [19, 137, 211],
                        [16, 142, 210],
                        [12, 147, 210],
                        [9, 152, 209],
                        [7, 156, 207],
                        [6, 160, 205],
                        [6, 164, 202],
                        [6, 167, 198],
                        [7, 169, 194],
                        [10, 172, 190],
                        [15, 174, 185],
                        [21, 177, 180],
                        [29, 179, 175],
                        [37, 181, 169],
                        [46, 183, 164],
                        [56, 185, 158],
                        [66, 187, 152],
                        [77, 188, 146],
                        [89, 189, 140],
                        [101, 190, 134],
                        [113, 191, 128],
                        [124, 191, 123],
                        [135, 191, 119],
                        [146, 191, 115],
                        [156, 191, 111],
                        [165, 190, 107],
                        [174, 190, 103],
                        [183, 189, 100],
                        [192, 188, 96],
                        [200, 188, 93],
                        [209, 187, 89],
                        [217, 186, 86],
                        [225, 185, 82],
                        [233, 185, 78],
                        [241, 185, 74],
                        [248, 187, 68],
                        [253, 190, 61],
                        [255, 195, 55],
                        [254, 200, 50],
                        [252, 206, 46],
                        [250, 211, 42],
                        [247, 216, 38],
                        [245, 222, 33],
                        [245, 228, 29],
                        [245, 235, 24],
                        [246, 243, 19],
                        [249, 251, 14]
                    ];

                    /***/
                }),

            /***/
            "./lib/parseFreqRate.js":
                /*!******************************!*\
                  !*** ./lib/parseFreqRate.js ***!
                  \******************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "parseFormat": function () {
                            return /* binding */ parseFormat;
                        },
                        /* harmony export */
                        "parseFreqRate": function () {
                            return /* binding */ parseFreqRate;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Functions to parse file name info.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /*eslint no-console: "off"*/

                    /** Parse frequency and sample rate from a file name. */
                    function parseFreqRate(name = '') {
                        if (!name || typeof name !== 'string') {
                            return {
                                freq: 0,
                                rate: 0
                            };
                        } // remove path


                        const pos = name.lastIndexOf('/');

                        if (pos !== -1) {
                            name = name.substr(pos + 1);
                            console.log(`skipping to ${pos + 1}, ${name}`);
                        }

                        let freq = 0,
                            rate = 1; // skip until separator [-_ .]

                        for (let p = 0; p < name.length - 1; ++p) {
                            if (name[p] == '_' || name[p] == '-' || name[p] == ' ' || name[p] == '.') {
                                ++p; // try to parse a double (float has too few digits)

                                const f = parseFloat(name.substr(p));
                                if (isNaN(f)) continue; // skip digits

                                while (p < name.length && (name[p] >= '0' && name[p] <= '9' || name[p] == '.')) ++p; // suffixed with 'M' and separator?


                                if (name[p] == 'M' || name[p] == 'm') {
                                    freq = f * 1000000.0;
                                } // suffixed with 'k' and separator?


                                if (name[p] == 'k' || name[p] == 'K') {
                                    rate = f * 1000.0;
                                }
                            }
                        }

                        return {
                            freq: freq,
                            rate: rate
                        };
                    }
                    /** Parse format indication from a file name. */

                    function parseFormat(name = '') {
                        if (!name || typeof name !== 'string') {
                            return '?';
                        } // remove path


                        const pos = name.lastIndexOf('.');

                        if (pos !== -1) {
                            return name.substr(pos + 1).toUpperCase();
                        }

                        return '?';
                    }

                    /***/
                }),

            /***/
            "./lib/polyfill.js":
                /*!*************************!*\
                  !*** ./lib/polyfill.js ***!
                  \*************************/
                /***/
                (function () {

                    /**
                        @file Various polyfill snippets from MDN.

                        @copyright CC0 Licenses for code examples and snippets
                        @license
                        Any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/
                    */
                    // polyfill: Object.assign
                    if (!Object.assign) Object.assign = function (target, ...sources) {
                        return sources.reduce(function (r, o) {
                            Object.keys(o).forEach(function (k) {
                                r[k] = o[k];
                            });
                            return r;
                        }, target);
                    }; // polyfill: Math.clamp

                    if (!Math.clamp) Math.clamp = function (x, lower, upper) {
                        return Math.max(lower, Math.min(x, upper));
                    }; // polyfill: Math.log10

                    if (!Math.log10) Math.log10 = function (x) {
                        return Math.log(x) * Math.LOG10E;
                    }; // polyfill: Math.log2

                    if (!Math.log2) Math.log2 = function (x) {
                        return Math.log(x) * Math.LOG2E;
                    }; // polyfill IE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill

                    if (!Array.prototype.fill) Object.defineProperty(Array.prototype, 'fill', {
                        value: function (value) {
                            // Steps 1-2.
                            if (this == null) {
                                throw new TypeError('this is null or not defined');
                            }

                            var O = Object(this); // Steps 3-5.

                            var len = O.length >>> 0; // Steps 6-7.

                            var start = arguments[1];
                            var relativeStart = start >> 0; // Step 8.

                            var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.

                            var end = arguments[2];
                            var relativeEnd = end === undefined ? len : end >> 0; // Step 11.

                            var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.

                            while (k < final) {
                                O[k] = value;
                                k++;
                            } // Step 13.


                            return O;
                        }
                    });

                    /***/
                }),

            /***/
            "./lib/samples.js":
                /*!************************!*\
                  !*** ./lib/samples.js ***!
                  \************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /**
                        @file Class for viewing sample formats.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /** Class for viewing sample formats. */
                    class SampleView {
                        constructor(format, buffer, sampleRate, centerFreq) {
                            /** A float representing the sample rate, in samples per second, of the data stored in the buffer. */
                            this.sampleRate = sampleRate || 250000;
                            /** A float representing the center frequency, in Hz, of the data stored in the buffer. */

                            this.centerFreq = centerFreq || 0;
                            format = format.toUpperCase();
                            /** A string representing the data format, of the data stored in the buffer. */

                            this.format = format; // TODO: Endianess?
                            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

                            let typedArray, sampleBias, sampleScale, sampleWidth;

                            if (format == 'CU4') {
                                // CU4 - Uint8Array (needs unpacking)
                                sampleBias = 7.5;
                                sampleScale = 1.0 / 7.5;
                                sampleWidth = 1; // bytes

                                typedArray = Uint8Array;
                                this.sampleI = this.unpackI_CU4;
                                this.sampleQ = this.unpackQ_CU4;
                            } else if (format == 'CS4') {
                                // CS4 - Uint8Array (needs unpacking)
                                sampleBias = 0;
                                sampleScale = 1.0 / 8.0;
                                sampleWidth = 1; // bytes

                                typedArray = Uint8Array;
                                this.sampleI = this.unpackI_CS4;
                                this.sampleQ = this.unpackQ_CS4;
                            } else if (format == 'CU8' || format == 'DATA' || format == 'COMPLEX16U') {
                                // CU8 - Uint8Array
                                sampleBias = 127.5; // or 127? or 128?

                                sampleScale = 1.0 / 127.5;
                                sampleWidth = 2; // bytes

                                typedArray = Uint8Array;
                            } else if (format == 'CS8' || format == 'COMPLEX16S') {
                                // CS8 - Int8Array
                                sampleBias = 0;
                                sampleScale = 1.0 / 128.0;
                                sampleWidth = 2; // bytes

                                typedArray = Int8Array;
                            } else if (format == 'CU16') {
                                // CU16 - Uint16Array
                                sampleBias = 32767.5;
                                sampleScale = 1.0 / 32768.0;
                                sampleWidth = 4; // bytes

                                typedArray = Uint16Array;
                            } else if (format == 'CS16') {
                                // CS16 - Int16Array
                                sampleBias = 0;
                                sampleScale = 1.0 / 32768.0;
                                sampleWidth = 4; // bytes

                                typedArray = Int16Array;
                            } else if (format == 'CU12') {
                                // CU12 - Uint8Array (needs unpacking)
                                sampleBias = 2047.5;
                                sampleScale = 1.0 / 2047.5;
                                sampleWidth = 3; // bytes

                                typedArray = Uint8Array;
                                this.sampleI = this.unpackI_CU12;
                                this.sampleQ = this.unpackQ_CU12;
                            } else if (format == 'CS12') {
                                // CS12 - Uint8Array (needs unpacking)
                                sampleBias = 0;
                                sampleScale = 1.0 / 2048.0;
                                sampleWidth = 3; // bytes

                                typedArray = Uint8Array;
                                this.sampleI = this.unpackI_CS12;
                                this.sampleQ = this.unpackQ_CS12;
                            } else if (format == 'CU32') {
                                // CU32 - Uint32Array
                                sampleBias = 2147483647.5;
                                sampleScale = 1.0 / 2147483648.0;
                                sampleWidth = 8; // bytes

                                typedArray = Uint32Array;
                            } else if (format == 'CS32') {
                                // CS32 - Int32Array
                                sampleBias = 0;
                                sampleScale = 1.0 / 2147483648.0;
                                sampleWidth = 8; // bytes

                                typedArray = Int32Array;
                            } else if (format == 'CU64') {
                                // CU64 - Uint64Array (needs translation)
                                sampleBias = 1.0;
                                sampleScale = 1.0;
                                sampleWidth = 16; // bytes

                                typedArray = Uint32Array;
                                this.sampleI = this.unpackI_CU64;
                                this.sampleQ = this.unpackQ_CU64;
                            } else if (format == 'CS64') {
                                // CS64 - Int64Array (needs translation)
                                sampleBias = 0;
                                sampleScale = 1.0;
                                sampleWidth = 16; // bytes

                                typedArray = Uint32Array;
                                this.sampleI = this.unpackI_CS64;
                                this.sampleQ = this.unpackQ_CS64;
                            } else if (format == 'CF32' || format == 'CFILE' || format == 'COMPLEX') {
                                // CF32 - Float32Array
                                sampleBias = 0;
                                sampleScale = 1.0;
                                sampleWidth = 8; // bytes

                                typedArray = Float32Array;
                            } else if (format == 'CF64') {
                                // CF64 - Float64Array
                                sampleBias = 0;
                                sampleScale = 1.0;
                                sampleWidth = 16; // bytes

                                typedArray = Float64Array;
                            } // https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility
                            else if (format == 'WAV' || format == 'BWF' || format == 'WEBM' || format == 'OGG' || format == 'OPUS' || format == 'FLAC' || format == 'MP4' || format == 'M4A' || format == 'AAC' || format == 'MP3') {
                                buffer = null; // need to wait for Promise resolve

                                sampleWidth = 8; // bytes

                                this.sampleI = this.unpackI_audio;
                                this.sampleQ = this.unpackQ_audio;
                                this.format = 'CF32'; // force format on decompressed buffer
                            } else {
                                // default to CU8 - Uint8Array
                                sampleBias = 127.5; // or 127? or 128?

                                sampleScale = 1.0 / 127.5;
                                sampleWidth = 2; // bytes

                                typedArray = Uint8Array;
                            }

                            this.sampleBias = sampleBias;
                            this.sampleScale = sampleScale;
                            this.sampleWidth = sampleWidth;
                            this.typedArray = typedArray;

                            if (buffer) {
                                this.buffer = buffer;
                                this.view = new typedArray(buffer); // generally:
                                // this.sampleCount = this.view.length / 2 // I+Q
                                // but for CS12 rather:

                                this.sampleCount = buffer.byteLength / this.sampleWidth;
                            }
                        }

                        loadBuffer(buffer) {
                            if (this.typedArray) {
                                this.buffer = buffer;
                                this.view = new this.typedArray(buffer); // generally:
                                // this.sampleCount = this.view.length / 2 // I+Q
                                // but for CS12 rather:

                                this.sampleCount = buffer.byteLength / this.sampleWidth;
                                return Promise.resolve();
                            } else {
                                return this.readAudio(buffer);
                            }
                        } /// This will give a noisy envelope of OOK/ASK signals.
                        /// Subtracts the bias (-128) and calculates the norm (scaled by 16384).


                        amplitude_cu8() {
                            const am_buf = new Uint16Array(this.sampleCount);

                            for (let i = 0; i < this.sampleCount; i++) {
                                let x = 127 - this.view[2 * i];
                                let y = 127 - this.view[2 * i + 1];
                                am_buf[i] = x * x + y * y; // max 32768, fs 16384
                            }

                            return am_buf;
                        } /// 122/128, 51/128 Magnitude Estimator for CU8 (SIMD has min/max).
                        /// Note that magnitude emphasizes quiet signals / deemphasizes loud signals.


                        magnitude_est_cu8() {
                            const am_buf = new Uint16Array(this.sampleCount);

                            for (let i = 0; i < this.sampleCount; i++) {
                                let x = Math.abs(this.view[2 * i] - 128);
                                let y = Math.abs(this.view[2 * i + 1] - 128);
                                let mi = x < y ? x : y;
                                let mx = x > y ? x : y;
                                let mag_est = 122 * mx + 51 * mi;
                                am_buf[i] = mag_est; // max 22144, fs 16384
                            }

                            return am_buf;
                        } /// True Magnitude for CU8 (sqrt can SIMD but float is slow).


                        magnitude_true_cu8() {
                            const am_buf = new Uint16Array(this.sampleCount);

                            for (let i = 0; i < this.sampleCount; i++) {
                                let x = this.view[2 * i] - 128;
                                let y = this.view[2 * i + 1] - 128;
                                am_buf[i] = Math.sqrt(x * x + y * y) * 128.0; // max 181, scaled 23170, fs 16384
                            }

                            return am_buf;
                        } /// 122/128, 51/128 Magnitude Estimator for CS16 (SIMD has min/max).


                        magnitude_est_cs16() {
                            const am_buf = new Uint16Array(this.sampleCount);

                            for (let i = 0; i < this.sampleCount; i++) {
                                let x = Math.abs(this.view[2 * i]);
                                let y = Math.abs(this.view[2 * i + 1]);
                                let mi = x < y ? x : y;
                                let mx = x > y ? x : y;
                                let mag_est = 122 * mx + 51 * mi;
                                am_buf[i] = mag_est >> 8; // max 5668864, scaled 22144, fs 16384
                            }

                            return am_buf;
                        } /// True Magnitude for CS16 (sqrt can SIMD but float is slow).


                        magnitude_true_cs16() {
                            const am_buf = new Uint16Array(this.sampleCount);

                            for (let i = 0; i < this.sampleCount; i++) {
                                let x = this.view[2 * i];
                                let y = this.view[2 * i + 1];
                                am_buf[i] = Math.sqrt(x * x + y * y) >> 1; // max 46341, scaled 23170, fs 16384
                            }

                            return am_buf;
                        }
                        /** The duration property returns a double representing the duration, in seconds, of the data stored in the buffer. */


                        get duration() {
                            return this.sampleCount / this.sampleRate;
                        }

                        slice(sliceIndex, sliceCount, startSample, endSample) {
                            startSample = startSample || 0;
                            endSample = endSample || ~~this.sampleCount;
                            const sliceLength = this.sampleWidth * ~~((endSample - startSample) / sliceCount);
                            return this.buffer.slice(startSample * this.sampleWidth + sliceLength * sliceIndex, startSample * this.sampleWidth + sliceLength * (sliceIndex + 1));
                        }

                        readAudio(audioData) {
                            const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
                            return audioCtx.decodeAudioData(audioData).then(buffer => {
                                this.audioBuffer = buffer;
                                this.sampleCount = buffer.length;
                                this.sampleRate = buffer.sampleRate;
                                this.view = this.interleaved();
                                this.buffer = this.view.buffer; //console.log('decodeAudioData', buffer, this.view, this.buffer)
                            }).catch(error => {
                                if (!this.audioBuffer) throw `decodeAudioData error: ${error}`;
                            });
                        }

                        interleaved() {
                            if (!this.audioBuffer) {
                                console.error('AudioBuffer not initialized');
                                throw 'AudioBuffer not initialized';
                            }

                            if (this.audioBuffer.numberOfChannels < 1) {
                                console.error(`AudioBuffer wrong numberOfChannels (${this.audioBuffer.numberOfChannels})`);
                                throw `AudioBuffer wrong numberOfChannels (${this.audioBuffer.numberOfChannels})`;
                            }

                            if (this.audioBuffer.numberOfChannels == 1) {
                                console.warn('AudioBuffer is mono, duplicating channel to stereo');
                            }

                            if (this.audioBuffer.numberOfChannels > 2) {
                                console.warn(`AudioBuffer has too many channels (${this.audioBuffer.numberOfChannels}), using first two`);
                            }

                            const n = this.sampleCount;
                            const data = new Float32Array(n * 2);
                            const ch0 = this.audioBuffer.getChannelData(0);
                            const ch1 = this.audioBuffer.numberOfChannels > 1 ? this.audioBuffer.getChannelData(1) : this.audioBuffer.getChannelData(0);

                            for (let i = 0; i < n; i += 1) {
                                data[2 * i + 0] = ch0[i];
                                data[2 * i + 1] = ch1[i];
                            }

                            return data;
                        }

                        unpackI_audio(pos) {
                            const channel = this.audioBuffer.getChannelData(0);
                            return channel[pos];
                        }

                        unpackQ_audio(pos) {
                            const channel = this.audioBuffer.getChannelData(1);
                            return channel[pos];
                        } // read 8 bit (iq), note the intermediate is Q0.3, LSB aligned


                        unpackI_CU4(pos) {
                            const b0 = this.view[1 * pos + 0];
                            const s = (b0 & 0xf0) >> 4;
                            return (s - this.sampleBias) * this.sampleScale;
                        }

                        unpackQ_CU4(pos) {
                            const b0 = this.view[1 * pos + 0];
                            const s = (b0 & 0x0f) >> 0;
                            return (s - this.sampleBias) * this.sampleScale;
                        } // read 8 bit (iq), note the intermediate is Q0.31, MSB aligned Int32 for sign-extend


                        unpackI_CS4(pos) {
                            const b0 = this.view[1 * pos + 0];
                            const s = (b0 & 0xf0) << 24 >> 28;
                            return s * this.sampleScale;
                        }

                        unpackQ_CS4(pos) {
                            const b0 = this.view[1 * pos + 0];
                            const s = (b0 & 0x0f) << 28 >> 28;
                            return s * this.sampleScale;
                        } // read 24 bit (iiqIQQ), note the intermediate is Q0.12, LSB aligned


                        unpackI_CU12(pos) {
                            const b0 = this.view[3 * pos + 0];
                            const b1 = this.view[3 * pos + 1];
                            const s = (b1 & 0x0f) << 8 | b0;
                            return (s - this.sampleBias) * this.sampleScale;
                        }

                        unpackQ_CU12(pos) {
                            const b1 = this.view[3 * pos + 1];
                            const b2 = this.view[3 * pos + 2];
                            const s = b2 << 4 | (b1 & 0xf0) >> 4;
                            return (s - this.sampleBias) * this.sampleScale;
                        } // read 24 bit (iiqIQQ), note the intermediate is Q0.31, MSB aligned Int32 for sign-extend


                        unpackI_CS12(pos) {
                            const b0 = this.view[3 * pos + 0];
                            const b1 = this.view[3 * pos + 1];
                            const s = ((b1 & 0x0f) << 28 | b0 << 20) >> 20;
                            return s * this.sampleScale;
                        }

                        unpackQ_CS12(pos) {
                            const b1 = this.view[3 * pos + 1];
                            const b2 = this.view[3 * pos + 2];
                            const s = (b2 << 24 | (b1 & 0xf0) << 16) >> 20;
                            return s * this.sampleScale;
                        } // read 64 bit signed data as 53 bits float, this might loose lots of precision


                        unpackI_CU64(pos) {
                            const b0 = this.view[4 * pos + 0];
                            const b1 = this.view[4 * pos + 1];
                            const s = b1 / 2 ** 31 + b0 / 2 ** 64;
                            return s - this.sampleBias;
                        }

                        unpackQ_CU64(pos) {
                            const b0 = this.view[4 * pos + 2];
                            const b1 = this.view[4 * pos + 3];
                            const s = b1 / 2 ** 31 + b0 / 2 ** 64;
                            return s - this.sampleBias;
                        } // read 64 bit signed data as 53 bits float, this might loose lots of precision


                        unpackI_CS64(pos) {
                            const b0 = this.view[4 * pos + 0];
                            const b1 = this.view[4 * pos + 1];
                            const s = (b1 >> 0) / 2 ** 31 + b0 / 2 ** 64;
                            return s;
                        }

                        unpackQ_CS64(pos) {
                            const b0 = this.view[4 * pos + 2];
                            const b1 = this.view[4 * pos + 3];
                            const s = (b1 >> 0) / 2 ** 31 + b0 / 2 ** 64;
                            return s;
                        }
                        /** The sample of the I-channel at index `pos`, of the data stored in the buffer. */


                        sampleI(pos) {
                            return (this.view[2 * pos + 0] - this.sampleBias) * this.sampleScale;
                        }
                        /** The sample of the Q-channel at index `pos`, of the data stored in the buffer. */


                        sampleQ(pos) {
                            return (this.view[2 * pos + 1] - this.sampleBias) * this.sampleScale;
                        }

                    }

                    /* harmony default export */
                    __webpack_exports__["default"] = (SampleView);

                    /***/
                }),

            /***/
            "./lib/soxcmap.js":
                /*!************************!*\
                  !*** ./lib/soxcmap.js ***!
                  \************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "sox_cmap": function () {
                            return /* binding */ sox_cmap;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Compute a cmap like SoX does.

                        @copyright robs@users.sourceforge.net, 2008-9
                        @license
                        This library is free software; you can redistribute it and/or modify it
                        under the terms of the GNU Lesser General Public License as published by
                        the Free Software Foundation; either version 2.1 of the License, or (at
                        your option) any later version.
                    */
                    function _sox_cmap(stops = 256) {
                        const cmap = [];

                        for (let i = 0; i < stops; ++i) {
                            let x = i / (stops - 1.0);
                            let c = [0.0, 0.0, 0.0];
                            if (x < .13) c[0] = 0;
                            else if (x < .73) c[0] = 1 * Math.sin((x - .13) / .60 * Math.PI / 2);
                            else c[0] = 1;
                            if (x < .60) c[1] = 0;
                            else if (x < .91) c[1] = 1 * Math.sin((x - .60) / .31 * Math.PI / 2);
                            else c[1] = 1;
                            if (x < .60) c[2] = .5 * Math.sin((x - .00) / .60 * Math.PI);
                            else if (x < .78) c[2] = 0;
                            else c[2] = (x - .78) / .22;
                            let r = Math.round(255 * c[0]); // or 1

                            let g = Math.round(255 * c[1]); // or 0

                            let b = Math.round(255 * c[2]);
                            cmap.push([r, g, b]);
                        }

                        return cmap;
                    }
                    /** Compute a cmap like SoX does. */


                    const sox_cmap = _sox_cmap();

                    /***/
                }),

            /***/
            "./lib/spectroplot.js":
                /*!****************************!*\
                  !*** ./lib/spectroplot.js ***!
                  \****************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "Spectroplot": function () {
                            return /* binding */ Spectroplot;
                        },
                        /* harmony export */
                        "loadUrl": function () {
                            return /* binding */ loadUrl;
                        },
                        /* harmony export */
                        "startWorkers": function () {
                            return /* binding */ startWorkers;
                        }
                        /* harmony export */
                    });
                    /* harmony import */
                    var _polyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./polyfill.js */ "./lib/polyfill.js");
                    /* harmony import */
                    var _polyfill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_polyfill_js__WEBPACK_IMPORTED_MODULE_0__);
                    /* harmony import */
                    var _windows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./windows.js */ "./lib/windows.js");
                    /* harmony import */
                    var _autorange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./autorange.js */ "./lib/autorange.js");
                    /* harmony import */
                    var _autostep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./autostep.js */ "./lib/autostep.js");
                    /* harmony import */
                    var _parseFreqRate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./parseFreqRate.js */ "./lib/parseFreqRate.js");
                    /* harmony import */
                    var _cube1cmap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./cube1cmap.js */ "./lib/cube1cmap.js");
                    /* harmony import */
                    var _soxcmap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./soxcmap.js */ "./lib/soxcmap.js");
                    /* harmony import */
                    var _naivecmap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./naivecmap.js */ "./lib/naivecmap.js");
                    /* harmony import */
                    var _matplotlibcmaps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./matplotlibcmaps.js */ "./lib/matplotlibcmaps.js");
                    /* harmony import */
                    var _parabolacmap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./parabolacmap.js */ "./lib/parabolacmap.js");
                    /* harmony import */
                    var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./utils.js */ "./lib/utils.js");
                    /* harmony import */
                    var _samples_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./samples.js */ "./lib/samples.js");
                    /* harmony import */
                    var _dropzone_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./dropzone.js */ "./lib/dropzone.js");
                    /**
                        @file I/Q Spectrogramm Plot JS.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /*eslint no-console: "off"*/












                    // import Worker from 'worker-loader!./worker.js';
                    // import Worker from 'worker-loader?filename=spectroplot.worker.js!./worker.js';
                    // const worker_url = new URL('./worker.js', import.meta.url)
                    //import './styles.css';
                    // kind of a crowbar until I figure something better out

                    const cmaps = Object.assign({}, _cube1cmap_js__WEBPACK_IMPORTED_MODULE_5__, _soxcmap_js__WEBPACK_IMPORTED_MODULE_6__, _naivecmap_js__WEBPACK_IMPORTED_MODULE_7__, _matplotlibcmaps_js__WEBPACK_IMPORTED_MODULE_8__, _parabolacmap_js__WEBPACK_IMPORTED_MODULE_9__); // polyfill ImageData constructor

                    function newImageData() {
                        var i = 0;

                        if (arguments[0] instanceof Uint8ClampedArray) {
                            var data = arguments[i++];
                        }

                        var width = arguments[i++];
                        var height = arguments[i];
                        if (data && height === undefined) height = data.length / 4 / width;
                        var canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext('2d', {
                            alpha: false
                        });
                        var imageData = ctx.createImageData(width, height);
                        if (data) imageData.data.set(data);
                        return imageData;
                    } // Check for the various File API support.


                    if (window.File && window.FileReader && window.FileList && window.Blob) { // Great success! All the File APIs are supported.
                    } else {
                        alert('The File APIs are not fully supported in this browser.');
                    }

                    let resizeTimer;
                    window.addEventListener('resize', function () {
                        clearTimeout(resizeTimer);
                        resizeTimer = setTimeout(function () {
                            // Dispatch the event.
                            const event = new Event('debouncedResize');
                            window.dispatchEvent(event);
                        }, 250);
                    }, false);
                    if (!navigator.hardwareConcurrency) console.error('The hardwareConcurrency APIs are not fully supported in this browser.');
                    const renderWorkerCount = navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 2;
                    console.log(`Creating ${renderWorkerCount} render workers.`); // narrowly tailored Promise for multiplexed worker access, relies on sequential worker execution

                    let renderWorker = new Array(renderWorkerCount);
                    let renderCallbacks = new Array(renderWorkerCount);

                    function renderPromise(i, message, transfer) {
                        return new Promise(resolve => {
                            renderCallbacks[i].push(resolve);
                            renderWorker[i].postMessage(message, transfer);
                        });
                    }

                    function startWorkers(workerOrUrl) {
                        if (!workerOrUrl) {
                            workerOrUrl = '/example/basic_audio_player/zoom/vendor/spectro-plot/dist/spectroplot.worker.js';
                        }

                        if (window.Worker) {
                            console.log(`Starting ${renderWorkerCount} render workers.`);

                            for (let i = 0; i < renderWorkerCount; ++i) {
                                renderWorker[i] = typeof workerOrUrl === 'string' ? new Worker(workerOrUrl) : new workerOrUrl(); // with Webpack 5 we could fallback to: new Worker(new URL('./worker.js', import.meta.url))

                                renderCallbacks[i] = [];

                                renderWorker[i].onmessage = msg => {
                                    const callback = renderCallbacks[i].shift();
                                    if (callback) callback(msg);
                                };
                            }

                            const ab = new ArrayBuffer(1);
                            renderWorker[0].postMessage({
                                transferable: ab
                            }, [ab]);

                            if (ab.byteLength) {
                                console.log('Transferables are not supported in your browser!');
                            } else { // Transferables are supported.
                            }
                        } else {
                            alert('The Worker APIs are not fully supported in this browser.'); // TODO: emulate web worker.
                        }
                    }
                    /**
                        Predefined Window functions.
                        @readonly
                        @enum {string}
                    */
                    // eslint-disable-next-line no-unused-vars

                    const WindowF = {
                        /** Rectangular window function */
                        rectangular: 'rectangular',

                        /** Bartlett window function */
                        bartlett: 'bartlett',

                        /** Hamming window function */
                        hamming: 'hamming',

                        /** Hann window function */
                        hann: 'hann',

                        /** Blackman window function */
                        blackman: 'blackman',

                        /** Blackman - Harris window function */
                        blackmanHarris: 'blackmanHarris'
                    };
                    /**
                        Custom Window function.
                        @callback CustomWindowF
                        @param {number} n - FFT width
                        @returns {{ window: number[], weight: number }}
                    */

                    /**
                        RGB triplet.
                        @typedef RGB
                        @type {number[]}
                    */

                    /**
                        Predefined Color maps.
                        @readonly
                        @enum {string}
                    */
                    // eslint-disable-next-line no-unused-vars

                    const Cmap = {
                        /** Cube1 color map */
                        cube1: 'cube1',

                        /** Viridis color map */
                        viridis: 'viridis',

                        /** Plasma color map */
                        plasma: 'plasma',

                        /** Inferno color map */
                        inferno: 'inferno',

                        /** Magma color map */
                        magma: 'magma',

                        /** Hot color map */
                        hot: 'hot',

                        /** Afmhot color map */
                        afmhot: 'afmhot',

                        /** Gist heat color map */
                        gist_heat: 'gist_heat',

                        /** Naive color map */
                        naive: 'naive',

                        /** Parabola color map */
                        parabola: 'parabola',

                        /** Sox color map */
                        sox: 'sox',

                        /** Gray color map */
                        grayscale: 'grayscale',

                        /** Röntgen color map */
                        roentgen: 'roentgen',

                        /** Phosphor color map */
                        phosphor: 'phosphor'
                    };

                    /**
                        The main Spectroplot class.
                    */

                    class Spectroplot {
                        /**
                            Initialize a new Spectroplot.
                             @param {Object} options
                            @param {number} [options.fftN=512] - FFT width, powers of 2 only
                            @param {number} [options.width=3000] - canvas width in px
                            @param {number} [options.height=512] - canvas height in px, 0 = auto
                            @param {number} [options.zoom=1] - Zoom factor
                            @param {WindowF|CustomWindowF} [options.windowF=blackmanHarris] - Window name or custom function
                            @param {number} [options.gain=6] - Gain in dB
                            @param {number} [options.range=30] - Range in dB
                            @param {Cmap|RGB[]} [options.cmap=cube1] - Color map name or custom map
                            @param {number} [options.ampHeight=0] - Amp bar height in px, 0 = off
                            @param {number} [options.minmaxHeight=20] - MinMax bar height in px, 0 = off
                            @param {string|Boolean} [options.channelMode=false] - Mode `'I/Q'` (false) or `'L/R'` (true)
                            @param {number} [options.dbfsWidth=60] - dbfs width in px
                            @param {number} [options.dbfsHeight=0] - 0 = auto: height + timeHeight
                            @param {number} [options.freqWidth=40] - Freq width in px
                            @param {number} [options.timeHeight=20] - Time height in px
                            @param {number} [options.rampHeight=0] - Color ramp height in px, 0 = auto
                            @param {number} [options.rampTop=10] - Color ramp top offset in px
                            @param {number} [options.rampWidth=15] - Color ramp width in px
                            @param {number} [options.histWidth=100] - Histogram width in px
                            @param {number} [options.histLeft=55] - Histogramm left offset in px
                            @param {string|Object} options.parent - Container element or selector
                            @param {string|Object} [options.renderInfo] - Info element or selector
                            @param {string|Object} [options.theme] - Theme name or options, see {@link setTheme}
                        */
                        constructor(options) {
                            this.constrain = {
                                fftN: value => parseInt(value, 10) || 512,
                                // 2 ** ~~(Math.log2(n) + 0.5)
                                height: value => parseInt(value, 10) || 0,
                                windowF: value => (0, _utils_js__WEBPACK_IMPORTED_MODULE_10__.lookup)(_windows_js__WEBPACK_IMPORTED_MODULE_1__, value) || _windows_js__WEBPACK_IMPORTED_MODULE_1__.blackmanHarrisWindow,
                                zoom: value => parseInt(value, 10) || 1,
                                gain: value => parseInt(value, 10) || 0,
                                range: value => parseInt(value, 10) || 30,
                                cmap: value => (0, _utils_js__WEBPACK_IMPORTED_MODULE_10__.lookup)(cmaps, value) || cmaps.cube1_cmap,
                                ampHeight: value => parseInt(value, 10) || 0,
                                minmaxHeight: value => parseInt(value, 10) || 0,
                                histWidth: value => parseInt(value, 10) || 0,
                                channelMode: value => typeof value === 'string' ? !value.toLowerCase().startsWith('i') : value,
                                turnFlip: value => typeof value === 'string' ? !value.toLowerCase().startsWith('s') : value
                            };
                            let defaults = {
                                fftN: 512,
                                // powers of 2 only
                                width: 3000,
                                height: 512,
                                // 0 = auto
                                zoom: 1,
                                windowF: _windows_js__WEBPACK_IMPORTED_MODULE_1__.blackmanHarrisWindow,
                                gain: 6,
                                range: 30,
                                cmap: cmaps.cube1_cmap,
                                ampHeight: 0,
                                minmaxHeight: 20,
                                channelMode: false,
                                turnFlip: false,
                                dbfsWidth: 60,
                                dbfsHeight: 0,
                                // 0 = auto: height + timeHeight
                                freqWidth: 40,
                                timeHeight: 20,
                                rampHeight: 0,
                                // 0 = auto
                                rampTop: 10,
                                rampWidth: 15,
                                histWidth: 100,
                                histLeft: 55,
                                scrollElY: document.documentElement
                            };
                            options = Object.assign({}, defaults, options);
                            this.tag = Math.random().toString().substring(2); // unique instance tag

                            this.buffer = null;
                            this.fileinfo = null;
                            this.parent = (0, _utils_js__WEBPACK_IMPORTED_MODULE_10__.selector)(options.parent);
                            this.fftN = options.fftN;
                            this.width = options.width;
                            this.height = options.height;
                            this.zoom = options.zoom;
                            this.windowF = (0, _utils_js__WEBPACK_IMPORTED_MODULE_10__.lookup)(_windows_js__WEBPACK_IMPORTED_MODULE_1__, options.windowF);
                            this.gain = options.gain;
                            this.range = options.range;
                            this.cmap = (0, _utils_js__WEBPACK_IMPORTED_MODULE_10__.lookup)(cmaps, options.cmap);
                            this.ampHeight = options.ampHeight;
                            this.minmaxHeight = options.minmaxHeight;
                            this.channelMode = options.channelMode;
                            this.turnFlip = options.turnFlip;
                            this.histWidth = options.histWidth;
                            this.renderInfo = options.renderInfo;
                            this.scrollElY = options.scrollElY;
                            this.setTheme(options.theme);
                            this.opts = options;
                            if (!renderWorker[0]) startWorkers(options.workerOrUrl);
                            if (options.filedata) this.setData(options.filedata);

                            if (window.ResizeObserver) {
                                // currently only with recent Edge, Firefox, Chrome, Opera
                                this.resizeObserver = new ResizeObserver(() => {
                                    this.processData();
                                });
                                this.resizeObserver.observe(this.parent);
                            } else {
                                // won't detect layout changes though
                                window.addEventListener('debouncedResize', this, false);
                            }
                        }
                        /**
                            Enables mouse-over guide drawing.
                        */


                        enableGuides() {
                            const guides = this.parent.getElementsByClassName('guides')[0];
                            let events = ['mousedown', 'mousemove', 'mouseup', 'wheel'];

                            if ('ontouchstart' in window) {
                                events = events.concat('touchstart', 'touchmove', 'touchend');
                            }

                            events.forEach(evt => guides.addEventListener(evt, this, false));
                        }
                        /**
                            Disables mouse-over guide drawing.
                        */


                        disableGuides() {
                            const guides = this.parent.getElementsByClassName('guides')[0];
                            let events = ['mousedown', 'mousemove', 'mouseup', 'wheel'];

                            if ('ontouchstart' in window) {
                                events = events.concat('touchstart', 'touchmove', 'touchend');
                            }

                            events.forEach(evt => guides.removeEventListener(evt, this, false));
                        }
                        /**
                            Hooks up common button elements to the setter functions.
                        */


                        enableButtons() {
                            let buttons = ['fftN', 'height', 'windowF', 'zoom', 'gain', 'range', 'cmap', 'ampHeight', 'minmaxHeight', 'histWidth', 'channelMode', 'turnFlip'];
                            buttons.forEach(btn => {
                                const els = this.parent.getElementsByClassName(btn);

                                for (let el of els) {
                                    el.addEventListener('change', e => this.setOption(btn, e.target.value), false);
                                }
                            });
                            const els = this.parent.getElementsByClassName('theme');

                            for (let el of els) {
                                el.addEventListener('change', e => this.setTheme(e.target.value), false);
                            }

                            let actions = ['zoomOut', 'zoomFit', 'zoomIn'];
                            actions.forEach(btn => {
                                const els = this.parent.getElementsByClassName(btn);

                                for (let el of els) {
                                    el.addEventListener('click', e => this[btn](e), false);
                                }
                            });
                        }
                        /**
                            Set a color theme.
                             @param {string|Object} options - Theme name or theme options
                            @param {string} [options.histoStroke=#b0b] - Histogram line color
                            @param {string} [options.histoFill=rgba(187,0,187,0.2)] - Histogram fill color
                            @param {number} [options.histoLine=2] - Histogram line width
                            @param {string} [options.dbfsStroke=#999] - FS-Histogram line color
                            @param {string} [options.dbfsFill=rgba(153,153,153,0.2)] - FS-Histogram fill color
                            @param {number} [options.dbfsLine=2] - FS-Histogram line width
                            @param {string} [options.rampFill=#666] - Color ramp text color
                            @param {string} [options.freqLabelFill=#333] - Freq label text color
                            @param {string} [options.freqMinorFill=#CCC] - Freq minor tick color
                            @param {string} [options.freqMajorFill=#666] - Freq major tick color
                            @param {string} [options.freqMarkeFill=#F00] - Freq marker tick color
                            @param {string} [options.timeLabelFill=#333] - Time label text color
                            @param {string} [options.timeMinorFill=#CCC] - Time minor tick color
                            @param {string} [options.timeMajorFill=#666] - Time major tick color
                            @param {string} [options.guidesBgFill=rgba(0,0,0,0.3)] - Guides background color
                            @param {string} [options.guidesDragFill=rgba(0,0,0,0.3)] - Guides drag color
                            @param {string} [options.guidesHairStroke=#fff] - Guides hair color
                            @param {string} [options.guidesInfoBgFill=rgba(255,255,255,0.8)] - Guides info background color
                            @param {string} [options.guidesInfoTextFill=#666] - Guides info text color
                        */


                        setTheme(options) {
                            let defaults = {
                                histoStroke: '#b0b',
                                histoFill: 'rgba(187,0,187,0.2)',
                                histoLine: 2,
                                dbfsStroke: '#999',
                                dbfsFill: 'rgba(153,153,153,0.2)',
                                dbfsLine: 2,
                                rampFill: '#666',
                                freqLabelFill: '#333',
                                freqMinorFill: '#CCC',
                                freqMajorFill: '#666',
                                freqMarkerFill: '#F00',
                                timeLabelFill: '#333',
                                timeMinorFill: '#CCC',
                                timeMajorFill: '#666',
                                guidesBgFill: 'rgba(0,0,0,0.3)',
                                guidesDragFill: 'rgba(0,0,0,0.3)',
                                guidesHairStroke: '#fff',
                                guidesInfoBgFill: 'rgba(255,255,255,0.8)',
                                guidesInfoTextFill: '#666' //minmaxCmap: colorRamp,
                                //ampCmap: colorRamp,

                            };
                            const themes = {};
                            themes.dark = {
                                histoStroke: '#b0b',
                                histoFill: 'rgba(191,0,191,0.2)',
                                dbfsStroke: '#999',
                                dbfsFill: 'rgba(153,153,153,0.2)',
                                rampFill: '#999',
                                freqLabelFill: '#DDD',
                                freqMinorFill: '#666',
                                freqMajorFill: '#999',
                                freqMarkerFill: '#C00',
                                timeLabelFill: '#DDD',
                                timeMinorFill: '#666',
                                timeMajorFill: '#999',
                                guidesBgFill: 'rgba(0,0,0,0.3)',
                                guidesDragFill: 'rgba(0,0,0,0.3)',
                                guidesHairStroke: '#fff',
                                guidesInfoBgFill: 'rgba(255,255,255,0.8)',
                                guidesInfoTextFill: '#666' //minmaxCmap: colorRamp,
                                //ampCmap: colorRamp,

                            };
                            if (typeof options === 'string' && themes[options]) defaults = themes[options];
                            this.theme = Object.assign({}, defaults, options);
                            return this.processData();
                        }
                        /** Release all event handlers and resources. */


                        destroy() {
                            if (this.dropZone) this.dropZone.destroy();
                            if (this.resizeObserver) this.resizeObserver.disconnect();
                            window.removeEventListener('debouncedResize', this, false);
                            this.disableGuides();
                            if (ArrayBuffer.transfer) ArrayBuffer.transfer(this.buffer, 0);
                        }
                        /**
                            Set an option on the Spectroplot to some value.
                            @param {string} opt - Option name, see {@link #new_Spectroplot_new new}
                            @param {Object} value - The new value for the option
                            @returns {Promise} A promise that resolves when the redrawing is complete
                        */


                        setOption(opt, value) {
                            this[opt] = this.constrain[opt](value);
                            return this.processData();
                        }
                        /**
                            Set a number of options on the Spectroplot to some values.
                            @param {Object} opts - A key/value object of options to set, see {@link #new_Spectroplot_new new}
                            @returns {Promise} A promise that resolves when the redrawing is complete
                        */


                        setOptions(opts) {
                            for (let opt in opts) {
                                this[opt] = this.constrain[opt](opts[opt]);
                            }

                            return this.processData();
                        }
                        /**
                            Set new data on the Spectroplot.
                            @param {string|Object} filedata - A URL string or File data object of `{ fileBuffer: ArrayBuffer, name: string, size: number, type: string }`
                            @returns {Promise} A promise that resolves when the redrawing is complete
                        */


                        setData(filedata) {
                            let promise; // handle if the arg is a url

                            if (typeof filedata === 'string') {
                                promise = loadUrl(filedata);
                            } else {
                                promise = Promise.resolve(filedata);
                            } // TODO: if there is no resolved arrayBuffer we should trigger a load


                            return promise.then(filedata => {
                                this.fileinfo = filedata;
                                this.buffer = filedata.fileBuffer;
                                this.sampleFormat = (0, _parseFreqRate_js__WEBPACK_IMPORTED_MODULE_4__.parseFormat)(filedata.name);
                                const nameInfo = (0, _parseFreqRate_js__WEBPACK_IMPORTED_MODULE_4__.parseFreqRate)(filedata.name);
                                this.center_freq = nameInfo.freq;
                                this.sample_rate = nameInfo.rate;
                                this.sampleView = new _samples_js__WEBPACK_IMPORTED_MODULE_11__["default"](this.sampleFormat, null, this.sample_rate, this.center_freq);
                                return this.sampleView.loadBuffer(this.buffer);
                            }).then(() => {
                                this.sample_rate = this.sampleView.sampleRate;
                                this.buildInfo();
                                return this.processData();
                            });
                        }

                        zoomOut() {
                            if (this.zoom <= 1) return Promise.resolve();
                            this.zoom -= 0.5;
                            return this.processData();
                        }

                        zoomFit() {
                            if (this.zoom == 1) return Promise.resolve();
                            this.zoom = 1;
                            return this.processData();
                        }

                        zoomIn() {
                            if (this.zoom >= 8) return Promise.resolve();
                            this.zoom += 0.5;
                            return this.processData();
                        }

                        setFftN(value) {
                            this.fftN = this.constrain['fftN'](value);
                            return this.processData();
                        }

                        setHeight(value) {
                            this.height = this.constrain['height'](value);
                            return this.processData();
                        }

                        setWindowF(value) {
                            this.windowF = this.constrain['windowF'](value);
                            return this.processData();
                        }

                        setZoom(value) {
                            this.zoom = this.constrain['zoom'](value);
                            return this.processData();
                        }

                        setGain(value) {
                            this.gain = this.constrain['gain'](value);
                            return this.processData();
                        }

                        setRange(value) {
                            this.range = this.constrain['range'](value);
                            return this.processData();
                        }

                        setCmap(value) {
                            this.cmap = this.constrain['cmap'](value);
                            return this.processData();
                        }

                        setAmpHeight(value) {
                            this.ampHeight = this.constrain['ampHeight'](value);
                            return this.processData();
                        }

                        setMinmaxHeight(value) {
                            this.minmaxHeight = this.constrain['minmaxHeight'](value);
                            return this.processData();
                        }

                        setHistWidth(value) {
                            this.histWidth = this.constrain['histWidth'](value);
                            return this.processData();
                        }

                        setChannelMode(value) {
                            this.channelMode = this.constrain['channelMode'](value);
                            return this.processData();
                        }

                        setTurnFlip(value) {
                            this.turnFlip = this.constrain['turnFlip'](value);
                            return this.processData();
                        }

                        buildInfo() {
                            const base_scale = (0, _autorange_js__WEBPACK_IMPORTED_MODULE_2__.autorange)(this.center_freq, 10.0);
                            const rate_scale = (0, _autorange_js__WEBPACK_IMPORTED_MODULE_2__.autorange)(this.sample_rate, 10.0);
                            const file = this.fileinfo; // TODO: refactor
                            //const sampleWidth = this.sampleView.sampleWidth;

                            const sampleCount = this.sampleView.sampleCount;
                            const stride = (sampleCount - this.fftN) / (this.width - 1);
                            const lastModified = file.lastModifiedDate || new Date(file.lastModified || 0); // use lastModifiedDate only on IE

                            const infos = [];
                            infos.push({
                                text: 'File name',
                                value: (0, _utils_js__WEBPACK_IMPORTED_MODULE_10__.strip)(file.name)
                            });
                            infos.push({
                                text: 'File type',
                                value: file.type || 'n/a'
                            });
                            infos.push({
                                text: 'File size',
                                value: `${file.size} bytes`
                            });
                            infos.push({
                                text: 'Last modified',
                                value: lastModified.toISOString()
                            });
                            infos.push({
                                text: 'Sample format',
                                value: this.sampleFormat
                            });
                            infos.push({
                                text: 'No. of samples',
                                value: `${sampleCount} S`
                            });
                            infos.push({
                                text: 'Stride (window to window)',
                                value: `× ${stride.toFixed(1)}`
                            });
                            if (this.center_freq) infos.push({
                                text: 'Center frequency',
                                value: `${this.center_freq / base_scale.scale}${base_scale.prefix}`
                            });
                            if (this.sample_rate > 1) infos.push({
                                text: 'Sample rate',
                                value: `${this.sample_rate / rate_scale.scale}${rate_scale.prefix}`
                            });
                            if (this.sample_rate > 1) infos.push({
                                text: 'Length (time)',
                                value: `${(sampleCount / this.sample_rate).toFixed(3)} s`
                            });
                            if (this.dBfs_min) infos.push({
                                text: 'dBfs scale',
                                value: `${this.dBfs_min.toFixed(1)} dB – ${this.dBfs_max.toFixed(1)} dB`
                            });

                            if (this.renderInfo) {
                                this.renderInfo(infos);
                            } else {
                                let text = '';

                                for (let item of infos) {
                                    text += `<span title="${item.text}">${item.value}</span>`;
                                }

                                const info = this.parent.parentNode.getElementsByClassName('fileinfo')[0];
                                info.innerHTML = text;
                            }
                        }

                        drawColorRamp() {
                            const gain = this.gain;
                            const dB_range = this.range;
                            const height = this.height || this.fftN; // draw color ramp

                            const dbfsWidth = this.opts.dbfsWidth + this.histWidth;
                            const dbfsHeight = height + this.opts.timeHeight; // this.opts.dbfsHeight;

                            const dbfsCanvas = this.parent.getElementsByClassName('dbfs')[0];
                            dbfsCanvas.width = dbfsWidth;
                            dbfsCanvas.height = dbfsHeight;
                            dbfsCanvas.style.width = dbfsCanvas.width + 'px';
                            dbfsCanvas.parentNode.style.width = dbfsCanvas.width + 'px'; //dbfsCanvas.style.height = dbfsCanvas.height;

                            const dbfsCtx = dbfsCanvas.getContext('2d');
                            dbfsCtx.font = '10px sans-serif';
                            const font_y = 10;
                            const rampWidth = this.opts.rampWidth;
                            const rampHeight = height;
                            const rampLeft = 35; // space for the ramp marker

                            const rampTop = this.opts.rampTop;
                            const rampData = newImageData(rampWidth, rampHeight);
                            const cmap = this.cmap;
                            const color_max = cmap.length - 1;

                            for (let y = 0; y < rampHeight; ++y) {
                                for (let x = 0; x < rampWidth; ++x) {
                                    const idx = Math.round(y * color_max / (rampHeight - 1));
                                    const p = color_max - idx;
                                    const color = cmap[p];
                                    const j = x * 4 + rampWidth * y * 4;
                                    rampData.data[j + 0] = color[0]; // R

                                    rampData.data[j + 1] = color[1]; // G

                                    rampData.data[j + 2] = color[2]; // B

                                    rampData.data[j + 3] = 255; // A
                                    //dbfsCtx.fillRect(rangeWidth - 5, y, 5, 1);
                                }
                            }

                            dbfsCtx.putImageData(rampData, rampLeft, rampTop); // draw dbFS marker
                            // want a dbFS marker for about every 70 pixels

                            const num_dbfs_markers = height / 50;
                            let dbfs_markers_step = (gain + dB_range) / num_dbfs_markers; // round to 3

                            dbfs_markers_step = Math.round(dbfs_markers_step / 3) * 3;
                            if (dbfs_markers_step < 1.0) dbfs_markers_step = 1.0;
                            dbfsCtx.fillStyle = this.theme.rampFill;

                            for (let d = gain; d < gain + dB_range; d += dbfs_markers_step) {
                                if (d >= gain + dB_range - dbfs_markers_step) d = gain + dB_range;
                                const y = rampTop + rampHeight * (d - gain) / dB_range;
                                dbfsCtx.fillRect(30, y, 5, 1);
                                let y1 = y + font_y / 2 - 1; // adjust the sign to line up
                                //if (d <= gain)
                                //    y1 = y + 3 * font_y / 2; // push first label down
                                //else if (d >= gain + dB_range)
                                //    y1 = y - font_y / 2; // pull last label up

                                dbfsCtx.fillText((-d).toFixed(0), 11, y1);
                            }
                        }
                        /** Prints color histogram. */


                        drawHistograms(c_hist, cB_hist) {
                            const histWidth = this.histWidth;
                            const histLeft = this.opts.histLeft;
                            if (!histWidth) return;
                            const height = this.height || this.fftN;
                            const cmap = this.cmap;
                            const color_max = cmap.length - 1;
                            const dbfsCanvas = this.parent.getElementsByClassName('dbfs')[0];
                            const dbfsCtx = dbfsCanvas.getContext('2d');
                            const rampHeight = height;
                            const rampTop = this.opts.rampTop; //console.log(c_hist);

                            let c_hist_max = 0;
                            dbfsCtx.lineWidth = this.theme.histoLine;
                            dbfsCtx.strokeStyle = this.theme.histoStroke;
                            dbfsCtx.fillStyle = this.theme.histoFill;
                            dbfsCtx.beginPath();
                            dbfsCtx.moveTo(histLeft, rampTop);

                            for (let i = 0; i <= color_max; ++i)
                                if (c_hist[i] > c_hist_max) c_hist_max = c_hist[i]; //console.log(`c_hist_max = ${c_hist_max}`);


                            for (let y = 0; y < rampHeight; ++y) {
                                let i = color_max - Math.round(y * color_max / (rampHeight - 1));
                                let h = histWidth * c_hist[i] / c_hist_max; //int h1 = i == 0 ? histWidth * c_hist[1] / c_hist_max : histWidth * c_hist[i - 1] / c_hist_max;
                                //dbfsCtx.fillStyle = 'rgba(191,0,0,0.1)';
                                //dbfsCtx.fillRect(histLeft, rampTop + y, h, 1);
                                //dbfsCtx.fillStyle = `rgb(${55 + 20 * (10 - h)},0,0)`;
                                //dbfsCtx.fillRect(histLeft + h - 1, rampTop + y, 1, 1);

                                dbfsCtx.lineTo(histLeft + h, rampTop + y);
                            }

                            dbfsCtx.lineTo(histLeft, rampTop + rampHeight); //dbfsCtx.closePath();

                            dbfsCtx.fill();
                            dbfsCtx.stroke(); // print dB histogram

                            const cB_hist_size = cB_hist.length;
                            let cB_hist_max = 0;
                            let cB_hist_mean = 0;

                            for (let i = 0; i < cB_hist_size; ++i) {
                                if (cB_hist[i] > cB_hist_max) cB_hist_max = cB_hist[i];
                                cB_hist_mean += cB_hist[i] / cB_hist_size;
                            }

                            console.log(`cB_hist_mean = ${cB_hist_mean}`);
                            dbfsCtx.lineWidth = this.theme.dbfsLine;
                            dbfsCtx.strokeStyle = this.theme.dbfsStroke;
                            dbfsCtx.fillStyle = this.theme.dbfsFill;
                            dbfsCtx.beginPath();
                            dbfsCtx.moveTo(histLeft, rampTop);

                            for (let y = 0; y < rampHeight; ++y) {
                                const i = Math.round(y * (cB_hist_size - 1) / (rampHeight - 1));
                                const h = histWidth * cB_hist[i] / cB_hist_max; //int h1 = i == 0 ? histWidth * cB_hist[1] / cB_hist_max : histWidth * cB_hist[i - 1] / cB_hist_max;
                                //dbfsCtx.fillStyle = 'rgba(0,191,0,0.1)';
                                //dbfsCtx.fillRect(histLeft, rampTop + y, h, 1);
                                //dbfsCtx.fillStyle = `rgb(0,${55 + 20 * (10 - h)},0)`;
                                //dbfsCtx.fillRect(histLeft + h - 1, rampTop + y, 1, 1);

                                dbfsCtx.lineTo(histLeft + h, rampTop + y);
                            }

                            dbfsCtx.lineTo(histLeft, rampTop + rampHeight); //dbfsCtx.closePath();

                            dbfsCtx.fill();
                            dbfsCtx.stroke();
                        }

                        drawAxes() {
                            if (this.turnFlip) {
                                this.drawWaterfallLeftAxis();
                                this.drawWaterfallBottomAxis();
                                this.updateGuides();
                            } else {
                                this.drawSpectrogramLeftAxis();
                                this.drawSpectrogramBottomAxis();
                                this.updateGuides();
                            }
                        }

                        drawSpectrogramLeftAxis() {
                            const height = this.height || this.fftN;
                            const quantity = 'f';
                            const unit = 'Hz';
                            const center_freq = this.center_freq;
                            const sample_rate = this.sample_rate; // draw y-axis

                            const width = this.opts.freqWidth;
                            const canvas = this.parent.getElementsByClassName('freq')[0];
                            canvas.width = width;
                            canvas.height = height;
                            canvas.style.width = canvas.width + 'px';
                            canvas.parentNode.style.width = canvas.width + 'px'; //canvas.style.height = canvas.height + 'px';

                            const ctx = canvas.getContext('2d');
                            ctx.font = '10px sans-serif';
                            const fontY = 10;
                            const min_spacing = 16;
                            const max_ticks = ~~(height / 2 / min_spacing);
                            const {
                                major_step,
                                minor_step
                            } = (0, _autostep_js__WEBPACK_IMPORTED_MODULE_3__.autostep)(sample_rate / 2, max_ticks);
                            const pixel_per_hz = height / 2 / (sample_rate / 2);
                            const freq_scale = (0, _autorange_js__WEBPACK_IMPORTED_MODULE_2__.autorange)(center_freq + sample_rate, 10.0);
                            const lower_hz = center_freq - sample_rate / 2;
                            const upper_hz = center_freq + sample_rate / 2;
                            const lower_major = ~~(lower_hz / major_step) * major_step; // might be offscreen

                            ctx.fillStyle = this.theme.freqLabelFill;
                            ctx.fillText(`${quantity}[${freq_scale.prefix}${unit}]`, 6, fontY - 1);
                            ctx.fillStyle = this.theme.freqMinorFill;

                            for (let j = lower_major; j <= upper_hz; j += minor_step) {
                                const y = ~~(height / 2 - (j - center_freq) * pixel_per_hz);
                                ctx.fillRect(width - 5, y - 1, 5, 1);
                            }

                            ctx.fillStyle = this.theme.freqMajorFill;

                            for (let j = lower_major; j <= upper_hz; j += major_step) {
                                const y = ~~(height / 2 - (j - center_freq) * pixel_per_hz);
                                ctx.fillRect(width - 10, y - 1, 10, 1);
                                if (y < fontY || y > height - fontY) continue;
                                const y1 = y + fontY - 2;
                                const scaleHz = j / freq_scale.scale;
                                if (this.channelMode) ctx.fillText(Math.abs(scaleHz).toFixed(2), 0, y1);
                                else if (center_freq) ctx.fillText(scaleHz.toFixed(3), 0, y1);
                                else ctx.fillText(scaleHz.toFixed(2), 0, y1);
                            }

                            ctx.fillStyle = this.theme.freqMarkerFill;
                            const marker_pos = 0; // Hz rel to center_freq

                            if (marker_pos !== null) {
                                const y = ~~(height / 2 - marker_pos * pixel_per_hz);
                                ctx.fillRect(width - 10, y - 1, 10, 1);
                            }

                            this.freq_scale = freq_scale;
                        }

                        drawSpectrogramBottomAxis() {
                            const width = this.width;
                            const quantity = 't';
                            const unit = 's';
                            const sample_rate = this.sample_rate;
                            const sampleCount = this.sampleView.sampleCount; // draw x-axis

                            const height = this.opts.timeHeight;
                            const canvas = this.parent.getElementsByClassName('time')[0];
                            canvas.width = width;
                            canvas.height = height; //canvas.style.width = canvas.width;
                            //canvas.style.height = canvas.height;

                            const ctx = canvas.getContext('2d');
                            ctx.font = '10px sans-serif';
                            const fontX = ctx.measureText('8').width;
                            const total_time = sampleCount / sample_rate;
                            const time_scale = (0, _autorange_js__WEBPACK_IMPORTED_MODULE_2__.autorange)(total_time, 10.0);
                            const total_time_scaled = total_time / time_scale.scale;
                            const pixel_per_time = width / total_time_scaled;
                            const min_spacing = 75; // a time marker at most every 75 pixels

                            const max_ticks = width / min_spacing;
                            const {
                                major_step,
                                minor_step
                            } = (0, _autostep_js__WEBPACK_IMPORTED_MODULE_3__.autostep)(total_time_scaled, max_ticks);
                            ctx.fillStyle = this.theme.timeLabelFill;
                            ctx.fillText(`${quantity}[${time_scale.prefix}${unit}]`, 32, 18);
                            ctx.fillStyle = this.theme.timeMinorFill;

                            for (let t = 0; t * minor_step < total_time_scaled; ++t) {
                                const x = ~~(t * minor_step * pixel_per_time);
                                const tick_size = t % 5 ? 5 : 10;
                                ctx.fillRect(x, 0, 1, tick_size);
                            }

                            ctx.fillStyle = this.theme.timeMajorFill;

                            for (let t = 0.0; t < total_time_scaled; t += major_step) {
                                // make last step the non-rounded end
                                if (t >= total_time_scaled - major_step) t = total_time_scaled;
                                const x = ~~(t * pixel_per_time);
                                ctx.fillRect(x, 0, 1, 10);
                                let x1 = x + 3;
                                if (t >= total_time_scaled) x1 = x - 6 * fontX; //ctx.fillText(`${t.toFixed(0)}${time_scale.prefix}s`, x1, 18);

                                ctx.fillText(t.toFixed(0), x1, 16);
                            }

                            this.time_scale = time_scale;
                        }

                        drawWaterfallLeftAxis() {
                            const height = this.width; // ???

                            const quantity = 't';
                            const unit = 's';
                            const sample_rate = this.sample_rate;
                            const sampleCount = this.sampleView.sampleCount; // draw y-axis

                            const width = this.opts.freqWidth;
                            const canvas = this.parent.getElementsByClassName('freq')[0];
                            canvas.width = width;
                            canvas.height = height;
                            canvas.style.width = canvas.width + 'px';
                            canvas.parentNode.style.width = canvas.width + 'px'; //canvas.style.height = canvas.height + 'px';

                            const ctx = canvas.getContext('2d');
                            ctx.font = '10px sans-serif';
                            const fontY = 10;
                            const total_time = sampleCount / sample_rate;
                            const time_scale = (0, _autorange_js__WEBPACK_IMPORTED_MODULE_2__.autorange)(total_time, 10.0);
                            const total_time_scaled = total_time / time_scale.scale;
                            const pixel_per_time = height / total_time_scaled;
                            const min_spacing = 32; // a time marker at most every 32 pixels

                            const max_ticks = height / min_spacing;
                            const {
                                major_step,
                                minor_step
                            } = (0, _autostep_js__WEBPACK_IMPORTED_MODULE_3__.autostep)(total_time_scaled, max_ticks);
                            ctx.fillStyle = this.theme.freqLabelFill;
                            ctx.fillText(`${quantity}[${time_scale.prefix}${unit}]`, 6, fontY - 1);
                            ctx.textAlign = 'right';
                            ctx.fillStyle = this.theme.freqMinorFill;

                            for (let t = 0; t * minor_step < total_time_scaled; ++t) {
                                const y = height - ~~(t * minor_step * pixel_per_time);
                                const tick_size = t % 5 ? 5 : 10;
                                ctx.fillRect(width - tick_size, y - 1, tick_size, 1);
                            }

                            ctx.fillStyle = this.theme.freqMajorFill;

                            for (let t = 0.0; t < total_time_scaled; t += major_step) {
                                // make last step the non-rounded end
                                if (t >= total_time_scaled - major_step) t = total_time_scaled;
                                const y = height - ~~(t * pixel_per_time);
                                ctx.fillRect(width - 10, y - 1, 10, 1);
                                let y1 = y - 2;
                                if (t >= total_time_scaled) y1 = y + 2 * fontY;
                                ctx.fillText(t.toFixed(0), width - 10, y1);
                            }

                            this.time_scale = time_scale;
                        }

                        drawWaterfallBottomAxis() {
                            const width = this.height || this.fftN;
                            const quantity = 'f';
                            const unit = 'Hz';
                            const center_freq = this.center_freq;
                            const sample_rate = this.sample_rate; // draw x-axis

                            const height = this.opts.timeHeight;
                            const canvas = this.parent.getElementsByClassName('time')[0];
                            canvas.width = width;
                            canvas.height = height; //canvas.style.width = canvas.width;
                            //canvas.style.height = canvas.height;

                            const ctx = canvas.getContext('2d');
                            ctx.font = '10px sans-serif';
                            const fontX = ctx.measureText('8').width;
                            const min_spacing = 48;
                            const max_ticks = ~~(width / 2 / min_spacing);
                            const {
                                major_step,
                                minor_step
                            } = (0, _autostep_js__WEBPACK_IMPORTED_MODULE_3__.autostep)(sample_rate / 2, max_ticks);
                            const pixel_per_hz = width / 2 / (sample_rate / 2);
                            const freq_scale = (0, _autorange_js__WEBPACK_IMPORTED_MODULE_2__.autorange)(center_freq + sample_rate, 10.0);
                            const lower_hz = center_freq - sample_rate / 2;
                            const upper_hz = center_freq + sample_rate / 2;
                            const lower_major = ~~(lower_hz / major_step) * major_step; // might be offscreen

                            ctx.fillStyle = this.theme.timeLabelFill;
                            ctx.fillText(`${quantity}[${freq_scale.prefix}${unit}]`, 10, 10);
                            ctx.textAlign = 'center';
                            ctx.fillStyle = this.theme.timeMinorFill;

                            for (let j = lower_major; j <= upper_hz; j += minor_step) {
                                const x = ~~(width / 2 + (j - center_freq) * pixel_per_hz);
                                ctx.fillRect(x, 0, 1, 5);
                            }

                            ctx.fillStyle = this.theme.timeMajorFill;

                            for (let j = lower_major; j <= upper_hz; j += major_step) {
                                const x = ~~(width / 2 + (j - center_freq) * pixel_per_hz);
                                ctx.fillRect(x, 0, 1, 10);
                                const scaleHz = j / freq_scale.scale;
                                let x1 = x + 0;
                                if (x1 > 0 && x1 < 4 * fontX) x1 = 4 * fontX;
                                if (x1 > width - 3 * fontX) x1 = width - 3 * fontX;
                                if (this.channelMode) ctx.fillText(Math.abs(scaleHz).toFixed(2), x1, 16);
                                else if (center_freq) ctx.fillText(scaleHz.toFixed(3), x1, 16);
                                else ctx.fillText(scaleHz.toFixed(2), x1, 16);
                            }

                            ctx.fillStyle = this.theme.freqMarkerFill;
                            const marker_pos = 0; // Hz rel to center_freq

                            if (marker_pos !== null) {
                                const x = ~~(width / 2 + marker_pos * pixel_per_hz);
                                ctx.fillRect(x, 0, 1, 10);
                            }

                            this.freq_scale = freq_scale;
                        }

                        updateGuides() {
                            // TODO: var names are confusing
                            const width = this.turnFlip ? this.height || this.fftN : this.width;
                            const height = this.turnFlip ? this.width : this.height || this.fftN;
                            const timeHeight = this.opts.timeHeight;
                            const guides = this.parent.getElementsByClassName('guides')[0];
                            guides.style.width = width + 'px';
                            guides.style.height = height + timeHeight + this.ampHeight + this.minmaxHeight + 'px';
                            const center_freq = this.center_freq;
                            const sample_rate = this.sample_rate;
                            const sampleCount = this.sampleView.sampleCount;
                            this.hz_per_pixel = sample_rate / (this.height || this.fftN);
                            this.hz_offset = center_freq - sample_rate / 2;
                            this.time_per_pixel = sampleCount / sample_rate / this.width;
                        }

                        drawGuides(x, y) {
                            if (!this.hz_per_pixel || !this.hz_offset || !this.freq_scale || !this.time_per_pixel || !this.time_scale) return;
                            const width = this.turnFlip ? this.height || this.fftN : this.width;
                            const height = this.turnFlip ? this.width : this.height || this.fftN;
                            const timeHeight = this.opts.timeHeight;
                            const fullHeight = height + timeHeight + this.ampHeight + this.minmaxHeight;
                            const guidesCanvas = this.parent.getElementsByClassName('guides')[0];
                            guidesCanvas.width = width;
                            guidesCanvas.height = fullHeight;
                            const ctx = guidesCanvas.getContext('2d');
                            ctx.font = '14px sans-serif'; //ctx.globalCompositeOperation = 'xor';

                            ctx.fillStyle = this.theme.guidesBgFill;
                            ctx.fillRect(x - 2, 0, 3, height);
                            ctx.fillRect(0, y - 2, width, 3);

                            if (this.isDrag) {
                                ctx.fillStyle = this.theme.guidesDragFill;
                                ctx.fillRect(this.dragX + 1, 0, x - this.dragX, height);
                            }

                            ctx.strokeStyle = this.theme.guidesHairStroke;
                            ctx.setLineDash([1, 1]);
                            ctx.beginPath();
                            ctx.moveTo(x - 0.5, 0);
                            ctx.lineTo(x - 0.5, height);
                            ctx.moveTo(0, y - 0.5);
                            ctx.lineTo(width, y - 0.5);
                            ctx.stroke();
                            let f;
                            let t;

                            if (this.turnFlip) {
                                const y1 = height - y; // Y is inverted

                                f = (x * this.hz_per_pixel + this.hz_offset) / this.freq_scale.scale;
                                t = (this.isDrag ? y1 - this.dragY : y1) * this.time_per_pixel / this.time_scale.scale;
                            } else {
                                const y1 = height - y; // Y is inverted

                                f = (y1 * this.hz_per_pixel + this.hz_offset) / this.freq_scale.scale;
                                t = (this.isDrag ? x - this.dragX : x) * this.time_per_pixel / this.time_scale.scale;
                            }

                            const text = `f: ${f.toFixed(3)} ${this.freq_scale.prefix}Hz, t: ${t.toFixed(this.isDrag ? 4 : 1)} ${this.time_scale.prefix}s`; // TODO: this should have a hysteresis

                            const xOffset = x < width / 2 ? 8 : -190;
                            const yOffset = y < height / 2 ? 8 : -22;
                            ctx.fillStyle = this.theme.guidesInfoBgFill;
                            ctx.fillRect(x + xOffset, y + yOffset, 180, 14);
                            ctx.fillStyle = this.theme.guidesInfoTextFill;
                            ctx.fillText(text, x + xOffset + 4, y + yOffset + 12);
                        }

                        processData() {
                            if (!this.buffer) return Promise.resolve();
                            if (!this.sampleView || !this.sampleView.buffer) return Promise.resolve();
                            if (this.inProcess) return this.inProcess;
                            console.time('fft process ' + this.tag);
                            const waterfall = this.turnFlip;
                            const extraWidth = this.opts.freqWidth + this.opts.dbfsWidth + this.histWidth;
                            this.width = (waterfall ? window.innerHeight : this.parent.clientWidth) * this.zoom - extraWidth;
                            const sampleFormat = this.sampleView.format;
                            const sampleWidth = this.sampleView.sampleWidth;
                            const sampleCount = this.sampleView.sampleCount; //const center_freq = this.center_freq;
                            //const sample_rate = this.sample_rate;

                            const n = this.fftN;
                            const {
                                window: windowc,
                                weight
                            } = this.windowF(n); // blackmanHarrisWindow(n);
                            //const block_norm = 1.0 / n;

                            const block_norm = 1.0 / weight;
                            const block_norm_db = 10 * Math.log10(block_norm);
                            console.log(`block_norm=${n}, ${block_norm_db} dB, window weight=${weight}`); // cu8 has a possible range of 0 to -60 dBfs

                            const gain = this.gain;
                            const dB_range = this.range;
                            this.dBfs_min = 0.0;
                            this.dBfs_max = -200.0;
                            const cmap = this.cmap; // OOB colors?

                            cmap[0] = [0, 0, 0];
                            cmap[cmap.length - 1] = [255, 255, 255];
                            const color_norm = cmap.length / -dB_range;
                            console.log(`colors=${cmap.length}, color_norm=${color_norm}`);
                            const cB_hist_size = 1000; // centi Bell (0.1 dB)

                            const cB_hist = new Array(cB_hist_size).fill(0); // -0.0 to -100.0 dB

                            const c_hist = new Array(cmap.length).fill(0); //const stride = 128;
                            //const width = Math.floor((sampleCount - n) / stride);

                            const width = this.width;
                            const points = width;
                            const stride = (sampleCount - n) / (points - 1);
                            console.log(`samples=${sampleCount} / stride=${stride}`);
                            const height = n;
                            console.log(`width=${width} height=${height}`);
                            const fftCanvas = this.parent.getElementsByClassName('fft')[0]; // save zoom approx

                            const fftCtx = fftCanvas.getContext('2d'); // TODO: { alpha: false }

                            const oldImageData = fftCtx.getImageData(0, 0, fftCanvas.width, fftCanvas.height);
                            const imageBitmapPromise = createImageBitmap(oldImageData); // mostly unsupported
                            // save scroll offset

                            const scrollElX = this.parent.getElementsByClassName('scroll')[0];
                            const scrollElY = this.scrollElY;
                            const scrollPctX = scrollElX.scrollLeftMax ? scrollElX.scrollLeft / scrollElX.scrollLeftMax : 0;
                            const oldSize = {
                                width: fftCanvas.width,
                                height: fftCanvas.height
                            };
                            let zoomPoint = this.zoomPoint;
                            this.zoomPoint = null;

                            if (zoomPoint) {
                                // x/y pct appears at scrollX/Y in the el
                                zoomPoint.x = zoomPoint.offsetX / fftCanvas.width;
                                zoomPoint.y = zoomPoint.offsetY / fftCanvas.height;
                                zoomPoint.scrollX = zoomPoint.offsetX - scrollElX.scrollLeft;
                                zoomPoint.scrollY = zoomPoint.offsetY - scrollElY.scrollTop;
                            }

                            fftCanvas.width = waterfall ? height : width;
                            fftCanvas.height = waterfall ? width : height;
                            imageBitmapPromise.then(image => fftCtx.drawImage(image, 0, 0, fftCanvas.width, fftCanvas.height)); // restore zoom approx

                            if (this.height) {
                                fftCanvas.style.height = (waterfall ? width : this.height) + 'px';
                                fftCanvas.style.width = (waterfall ? this.height : width) + 'px';
                            } else {
                                // 0 = auto
                                fftCanvas.style.height = '';
                                fftCanvas.style.width = '';
                            }

                            const minmaxCanvas = this.parent.getElementsByClassName('minmax')[0];
                            minmaxCanvas.width = width;
                            minmaxCanvas.height = this.minmaxHeight;
                            const ampCanvas = this.parent.getElementsByClassName('amp')[0];
                            ampCanvas.width = width;
                            ampCanvas.height = this.ampHeight; // restore scroll offset

                            if (zoomPoint) {
                                // note: scrollElX.scrollWidth isn't updated yet, use fftCanvas.width as approx
                                scrollElX.scrollLeft = zoomPoint.x * fftCanvas.width - zoomPoint.scrollX; // scroll Y relative by the change in our height, can ignore other elements height

                                const deltaHeight = fftCanvas.height - oldSize.height;
                                scrollElY.scrollTop += deltaHeight * zoomPoint.y;
                            } else {
                                scrollElX.scrollLeft = scrollPctX * scrollElX.scrollLeftMax; // scroll Y relative by the change in our height, can ignore other elements height

                                const deltaHeight = fftCanvas.height - oldSize.height;
                                if (scrollElY.scrollTop) scrollElY.scrollTop += deltaHeight * 0.5;
                            }

                            console.time('fft render ' + this.tag);
                            const startSample = 0; // ~~(this.buffer.byteLength / 4);

                            const endSample = ~~(this.buffer.byteLength / sampleWidth); // 16 * 5); // TODO: should be this.sampleView.buffer?

                            const sliceWidth = ~~(width / renderWorkerCount);
                            let renders = [];

                            for (let i = 0; i < renderWorkerCount; ++i) {
                                const bufferSlice = this.sampleView.slice(i, renderWorkerCount, startSample, endSample);
                                const fftCtx = {
                                    block_norm: block_norm,
                                    gain: gain,
                                    range: dB_range,
                                    cmap: cmap,
                                    n: n,
                                    windowc: windowc,
                                    width: sliceWidth,
                                    offset: i * sliceWidth,
                                    buffer: bufferSlice,
                                    format: sampleFormat,
                                    channelMode: this.channelMode,
                                    waterfall: waterfall
                                };
                                const promise = renderPromise(i, fftCtx, [bufferSlice]).then(msg => {
                                    if (msg.data.dBfs_min < this.dBfs_min) this.dBfs_min = msg.data.dBfs_min;
                                    if (msg.data.dBfs_max > this.dBfs_max) this.dBfs_max = msg.data.dBfs_max;

                                    for (let x = 0; x < cB_hist_size; x++) {
                                        cB_hist[x] += msg.data.cB_hist[x];
                                    }

                                    for (let x = 0; x < this.cmap.length; x++) {
                                        c_hist[x] += msg.data.c_hist[x];
                                    } // const image = msg.data.imageData; // would need polyfill in worker


                                    const image = newImageData(msg.data.imageData.data, waterfall ? height : sliceWidth); //const fftCanvas = this.parent.getElementsByClassName('fft')[0];

                                    const fftCtx = fftCanvas.getContext('2d'); // TODO: { alpha: false }

                                    fftCtx.putImageData(image, waterfall ? 0 : msg.data.offset, waterfall ? width - sliceWidth - msg.data.offset : 0); //const ampCanvas = this.parent.getElementsByClassName('amp')[0];

                                    const ampCtx = ampCanvas.getContext('2d');
                                    const ampScale = this.ampHeight / 256; //const minmaxCanvas = this.parent.getElementsByClassName('minmax')[0];

                                    const minmaxCtx = minmaxCanvas.getContext('2d');
                                    const minmaxScale = this.minmaxHeight / 256;

                                    for (let x = 0; x < sliceWidth; x++) {
                                        const g_min = msg.data.gauge_mins[x];
                                        const g_max = msg.data.gauge_maxs[x];
                                        const g_amp = msg.data.gauge_amps[x];

                                        if (this.minmaxHeight) {
                                            minmaxCtx.fillStyle = `rgb(${255 - g_max},${255 - g_max},${255 - g_max})`; //const c = cmap[g_max];
                                            //minmaxCtx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;

                                            minmaxCtx.fillRect(x + msg.data.offset, ~~(g_min * minmaxScale), 1, ~~((g_max - g_min) * minmaxScale));
                                        }

                                        if (this.ampHeight) {
                                            ampCtx.fillStyle = `rgb(${255 - g_max},${255 - g_max},${255 - g_max})`; //const c = cmap[g_max];
                                            //ampCtx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;

                                            ampCtx.fillRect(x + msg.data.offset, 0, 1, ~~(g_amp * ampScale));
                                        }
                                    }
                                });
                                renders.push(promise);
                            }

                            this.drawColorRamp();
                            this.drawAxes();
                            console.timeEnd('fft process ' + this.tag);
                            this.inProcess = Promise.all(renders).then(() => {
                                console.timeEnd('fft render ' + this.tag);
                                this.buildInfo();
                                this.drawHistograms(c_hist, cB_hist);
                                this.inProcess = false;
                            });
                            return this.inProcess;
                        }

                        createDropZone(elementOrSelector) {
                            elementOrSelector = elementOrSelector || this.parent.getElementsByClassName('dropzone')[0];
                            const fileLoader = this.setData.bind(this);
                            this.dropZone = new _dropzone_js__WEBPACK_IMPORTED_MODULE_12__.DropZone(elementOrSelector, fileLoader);
                        } // events


                        handleEvent(e) {
                            //console.log(e.type)
                            const handler = e.type;

                            if (typeof this[handler] === 'function') {
                                return this[handler](e);
                            }
                        }

                        debouncedResize() {
                            this.processData();
                        }

                        wheel(e) {
                            if (!e.deltaMode) {
                                return; // can't handle this
                            }

                            if (e.ctrlKey || e.altKey || e.metaKey) {
                                e.preventDefault();

                                if (this.inProcess) {
                                    //console.log('Zoom denied');
                                    return; // denied.
                                }

                                if (e.deltaY > 0 || e.deltaX > 0 || e.deltaZ > 0) {
                                    //console.log('Zoom out');
                                    if (this.zoom <= 1) return;
                                    this.zoom -= 0.5;
                                } else {
                                    //console.log('Zoom in');
                                    if (this.zoom >= 8) return;
                                    this.zoom += 0.5;
                                }

                                const clientRect = e.target.getBoundingClientRect();
                                const offsetX = e.clientX - clientRect.left;
                                const offsetY = e.clientY - clientRect.top;
                                this.zoomPoint = {
                                    offsetX,
                                    offsetY
                                };
                                this.processData();
                            }
                        }

                        mousedown(e) {
                            this.dragX = e.offsetX;
                            this.dragY = e.offsetY;
                            this.isDrag = true;
                            e.preventDefault();
                        }

                        mouseup(e) {
                            this.isDrag = false;
                            e.preventDefault();
                        }

                        mousemove(e) {
                            window.requestAnimationFrame(this.drawGuides.bind(this, e.offsetX, e.offsetY));
                            e.stopPropagation();
                            e.preventDefault();
                        }

                        touchstart(e) {
                            console.log(e); // single touch or start of a drag
                            // touch events don't have offsetX, offsetY

                            const clientRect = e.target.getBoundingClientRect();
                            const t = e.targetTouches[0];
                            const offsetX = t.clientX - clientRect.left;
                            const offsetY = t.clientY - clientRect.top;
                            window.requestAnimationFrame(this.drawGuides.bind(this, offsetX, offsetY));
                            if (e.targetTouches.length > 1) e.preventDefault(); // don't allow multitouches
                        }

                        touchcancel(e) {
                            if (e.targetTouches.length <= 1) {
                                this.isDrag = false;
                            }
                        }

                        touchend(e) {
                            if (e.targetTouches.length <= 1) {
                                this.isDrag = false;
                            }
                        }

                        touchmove(e) {
                            // touch events don't have offsetX, offsetY
                            const clientRect = e.target.getBoundingClientRect();
                            let t1 = e.targetTouches[0];

                            if (e.targetTouches.length == 2) {
                                // select range
                                this.isDrag = true;
                                const t2 = e.targetTouches[1];

                                if (t1.clientX < t2.clientX) {
                                    this.dragX = t1.clientX - clientRect.left;
                                    this.dragY = t1.clientY - clientRect.top;
                                    t1 = t2;
                                } else {
                                    this.dragX = t2.clientX - clientRect.left;
                                    this.dragY = t2.clientY - clientRect.top;
                                }

                                e.preventDefault();
                            }

                            const offsetX = t1.clientX - clientRect.left;
                            const offsetY = t1.clientY - clientRect.top;
                            window.requestAnimationFrame(this.drawGuides.bind(this, offsetX, offsetY));
                            e.stopPropagation();
                        }

                    }

                    function fetchArraybuffer(url) {
                        return new Promise((resolve, reject) => {
                            const xhr = new XMLHttpRequest();
                            xhr.open('GET', url, true);
                            xhr.responseType = 'arraybuffer';

                            xhr.onload = () => {
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    resolve(xhr);
                                } else {
                                    reject(xhr.statusText);
                                }
                            };

                            xhr.onerror = () => reject(xhr.statusText);

                            xhr.send(null);
                        });
                    }
                    /**
                        This callback is used to load file data.
                        @callback FileLoader
                        @param {Object} fileinfo - File info object
                    */



                    /**
                        Load data from a URL.

                        @param {string} url - URL to load data from
                        @param {FileLoader} [fileLoader] - Callback for File info object
                        @returns {Object} File info object
                    */

                    function loadUrl(url, fileLoader) {
                        url = url || '/bresser_3ch/gfile001.cu8';
                        var basename = url.substring(url.lastIndexOf('/') + 1);

                        if (!url.startsWith('//') && url.startsWith('/')) {
                            basename = url.substring(1);
                            url = 'https://cdn.jsdelivr.net/gh/merbanan/rtl_433_tests@latest/tests' + url;
                        }

                        return fetchArraybuffer(url).then(xhr => {
                            var arrayBuffer = xhr.response; // Note: not xhr.responseText

                            if (!arrayBuffer) {
                                throw new Error('No data!');
                            }

                            console.log(xhr.getResponseHeader('Last-Modified'));
                            const fileinfo = {
                                fileBuffer: arrayBuffer,
                                lastModified: xhr.getResponseHeader('Last-Modified'),
                                name: basename,
                                type: xhr.getResponseHeader('Content-Type'),
                                size: arrayBuffer.byteLength
                            };
                            if (fileLoader) fileLoader(fileinfo);
                            return fileinfo;
                        });
                    }

                    /***/
                }),

            /***/
            "./lib/utils.js":
                /*!**********************!*\
                  !*** ./lib/utils.js ***!
                  \**********************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "lookup": function () {
                            return /* binding */ lookup;
                        },
                        /* harmony export */
                        "selector": function () {
                            return /* binding */ selector;
                        },
                        /* harmony export */
                        "strip": function () {
                            return /* binding */ strip;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Various utils.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /** Returns element or expands selector. */
                    function selector(elementOrSelector) {
                        if (!elementOrSelector) {
                            return elementOrSelector;
                        } else if (typeof elementOrSelector === 'string') {
                            return document.querySelector(elementOrSelector);
                        } else {
                            return elementOrSelector; // instanceof Element
                        }
                    }
                    /** Returns array or expands key. */

                    function lookup(table, arrayOrKey) {
                        if (!arrayOrKey) return arrayOrKey;
                        if (typeof arrayOrKey !== 'string') return arrayOrKey;
                        if (table[arrayOrKey]) return table[arrayOrKey];
                        const match = arrayOrKey.toLowerCase();

                        for (let key in table)
                            if (key.toLowerCase() == match) return table[key];

                        for (let key in table)
                            if (key.toLowerCase().startsWith(match)) return table[key];

                        return null;
                    }
                    /** Strips HTML tags. */

                    function strip(html) {
                        var doc = new DOMParser().parseFromString(html, 'text/html');
                        return doc.body.textContent || '';
                    }

                    /***/
                }),

            /***/
            "./lib/windows.js":
                /*!************************!*\
                  !*** ./lib/windows.js ***!
                  \************************/
                /***/
                (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                    "use strict";
                    __webpack_require__.r(__webpack_exports__);
                    /* harmony export */
                    __webpack_require__.d(__webpack_exports__, {
                        /* harmony export */
                        "bartlettWindow": function () {
                            return /* binding */ bartlettWindow;
                        },
                        /* harmony export */
                        "blackmanHarrisWindow": function () {
                            return /* binding */ blackmanHarrisWindow;
                        },
                        /* harmony export */
                        "blackmanWindow": function () {
                            return /* binding */ blackmanWindow;
                        },
                        /* harmony export */
                        "hammingWindow": function () {
                            return /* binding */ hammingWindow;
                        },
                        /* harmony export */
                        "hannWindow": function () {
                            return /* binding */ hannWindow;
                        },
                        /* harmony export */
                        "rectangularWindow": function () {
                            return /* binding */ rectangularWindow;
                        }
                        /* harmony export */
                    });
                    /**
                        @file Windowing functions.

                        @author Christian W. Zuckschwerdt <zany@triq.net>
                        @copyright Christian W. Zuckschwerdt, 2019
                        @license
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 2 of the License, or
                        (at your option) any later version.
                    */

                    /** Rectangular window generator function. */
                    function rectangularWindow(n) {
                        const window = new Array(n);
                        let weight = 0.0;

                        for (let i = 0; i < n; ++i) {
                            weight += window[i] = 1.0;
                        }

                        return {
                            window: window,
                            weight: weight
                        };
                    }
                    /** Bartlett window generator function. */

                    function bartlettWindow(n) {
                        const window = new Array(n);
                        let weight = 0.0;

                        for (let i = 0; i < n; ++i) {
                            weight += window[i] = 1.0 - Math.abs((i - 0.5 * (n - 1)) / (0.5 * (n - 1)));
                        }

                        return {
                            window: window,
                            weight: weight
                        };
                    }
                    /** Hamming window generator function. */

                    function hammingWindow(n) {
                        const a = 0.54;
                        const b = 0.46;
                        const window = new Array(n);
                        let weight = 0.0;

                        for (let i = 0; i < n; ++i) {
                            weight += window[i] = a - b * Math.cos(2.0 * Math.PI * i / (n - 1));
                        }

                        return {
                            window: window,
                            weight: weight
                        };
                    }
                    /** Hann window generator function. */

                    function hannWindow(n) {
                        const window = new Array(n);
                        let weight = 0.0;

                        for (let i = 0; i < n; ++i) {
                            weight += window[i] = 0.5 * (1.0 - Math.cos(2.0 * Math.PI * i / (n - 1)));
                        }

                        return {
                            window: window,
                            weight: weight
                        };
                    }
                    /** Blackman window generator function. */

                    function blackmanWindow(n) {
                        const a0 = 0.42;
                        const a1 = 0.5;
                        const a2 = 0.08;
                        const window = new Array(n);
                        let weight = 0.0;

                        for (let i = 0; i < n; ++i) {
                            weight += window[i] = a0 - a1 * Math.cos(2.0 * Math.PI * i / (n - 1)) + a2 * Math.cos(4.0 * Math.PI * i / (n - 1));
                        }

                        return {
                            window: window,
                            weight: weight
                        };
                    }
                    /** Blackman-Harris window generator function. */

                    function blackmanHarrisWindow(n) {
                        const a0 = 0.35875;
                        const a1 = 0.48829;
                        const a2 = 0.14128;
                        const a3 = 0.01168;
                        const window = new Array(n);
                        let weight = 0.0;

                        for (let i = 0; i < n; ++i) {
                            weight += window[i] = a0 - a1 * Math.cos(2.0 * Math.PI * i / (n - 1)) + a2 * Math.cos(4.0 * Math.PI * i / (n - 1)) - a3 * Math.cos(6.0 * Math.PI * i / (n - 1));
                        }

                        return {
                            window: window,
                            weight: weight
                        };
                    }

                    /***/
                })

            /******/
        });
        /************************************************************************/
        /******/ // The module cache
        /******/
        var __webpack_module_cache__ = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/
            var cachedModule = __webpack_module_cache__[moduleId];
            /******/
            if (cachedModule !== undefined) {
                /******/
                return cachedModule.exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /************************************************************************/
        /******/
        /* webpack/runtime/compat get default export */
        /******/
        ! function () {
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/
            __webpack_require__.n = function (module) {
                /******/
                var getter = module && module.__esModule ?
                    /******/
                    function () {
                        return module['default'];
                    } :
                    /******/
                    function () {
                        return module;
                    };
                /******/
                __webpack_require__.d(getter, {
                    a: getter
                });
                /******/
                return getter;
                /******/
            };
            /******/
        }();
        /******/
        /******/
        /* webpack/runtime/define property getters */
        /******/
        ! function () {
            /******/ // define getter functions for harmony exports
            /******/
            __webpack_require__.d = function (exports, definition) {
                /******/
                for (var key in definition) {
                    /******/
                    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                        /******/
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: definition[key]
                        });
                        /******/
                    }
                    /******/
                }
                /******/
            };
            /******/
        }();
        /******/
        /******/
        /* webpack/runtime/hasOwnProperty shorthand */
        /******/
        ! function () {
            /******/
            __webpack_require__.o = function (obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            }
            /******/
        }();
        /******/
        /******/
        /* webpack/runtime/make namespace object */
        /******/
        ! function () {
            /******/ // define __esModule on exports
            /******/
            __webpack_require__.r = function (exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/
                    Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                    });
                    /******/
                }
                /******/
                Object.defineProperty(exports, '__esModule', {
                    value: true
                });
                /******/
            };
            /******/
        }();
        /******/
        /************************************************************************/
        var __webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be in strict mode.
        ! function () {
            "use strict";
            /*!******************!*\
              !*** ./index.js ***!
              \******************/
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "DropZone": function () {
                    return /* reexport safe */ _lib_dropzone_js__WEBPACK_IMPORTED_MODULE_1__.DropZone;
                },
                /* harmony export */
                "EasyCloning": function () {
                    return /* reexport safe */ _lib_easy_js__WEBPACK_IMPORTED_MODULE_2__.EasyCloning;
                },
                /* harmony export */
                "Spectroplot": function () {
                    return /* reexport safe */ _lib_spectroplot_js__WEBPACK_IMPORTED_MODULE_0__.Spectroplot;
                },
                /* harmony export */
                "loadUrl": function () {
                    return /* reexport safe */ _lib_spectroplot_js__WEBPACK_IMPORTED_MODULE_0__.loadUrl;
                },
                /* harmony export */
                "startWorkers": function () {
                    return /* reexport safe */ _lib_spectroplot_js__WEBPACK_IMPORTED_MODULE_0__.startWorkers;
                }
                /* harmony export */
            });
            /* harmony import */
            var _lib_spectroplot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./lib/spectroplot.js */ "./lib/spectroplot.js");
            /* harmony import */
            var _lib_dropzone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./lib/dropzone.js */ "./lib/dropzone.js");
            /* harmony import */
            var _lib_easy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./lib/easy.js */ "./lib/easy.js");




        }();
        /******/
        return __webpack_exports__;
        /******/
    })();
});
//# sourceMappingURL=spectroplot.js.map