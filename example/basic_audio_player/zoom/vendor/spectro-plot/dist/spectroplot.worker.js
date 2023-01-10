(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/fft_nayuki.js":
/*!***************************!*\
  !*** ./lib/fft_nayuki.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Free FFT and convolution (JavaScript)
 *
 * @copyright 2017 Project Nayuki. (MIT License)
 * @see https://www.nayuki.io/page/free-small-fft-in-multiple-languages
 * @author Wrapped as ES6 module by Christian W. Zuckschwerdt <zany@triq.net>
 * @license
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */

/*
 * Construct an object for calculating the discrete Fourier transform (DFT) of size n, where n is a power of 2.
 */
class FFTNayuki {
  constructor(n) {
    this.n = n;
    this.levels = -1; // Length variables

    for (let i = 0; i < 32; i++) {
      if (1 << i == n) this.levels = i; // Equal to log2(n)
    }

    if (this.levels == -1) throw 'Length is not a power of 2'; // Trigonometric tables

    this.cosTable = new Array(n / 2);
    this.sinTable = new Array(n / 2);

    for (let i = 0; i < n / 2; i++) {
      this.cosTable[i] = Math.cos(2 * Math.PI * i / n);
      this.sinTable[i] = Math.sin(2 * Math.PI * i / n);
    }
  }
  /*
   * Computes the discrete Fourier transform (DFT) of the given complex vector, storing the result back into the vector.
   * The vector's length must be a power of 2. Uses the Cooley-Tukey decimation-in-time radix-2 algorithm.
   */


  transform(real, imag) {
    const n = this.n; // Bit-reversed addressing permutation

    for (let i = 0; i < n; i++) {
      const j = reverseBits(i, this.levels);

      if (j > i) {
        let temp = real[i];
        real[i] = real[j];
        real[j] = temp;
        temp = imag[i];
        imag[i] = imag[j];
        imag[j] = temp;
      }
    } // Cooley-Tukey decimation-in-time radix-2 FFT


    for (let size = 2; size <= n; size *= 2) {
      const halfsize = size / 2;
      const tablestep = n / size;

      for (let i = 0; i < n; i += size) {
        for (let j = i, k = 0; j < i + halfsize; j++, k += tablestep) {
          const l = j + halfsize;
          const tpre = real[l] * this.cosTable[k] + imag[l] * this.sinTable[k];
          const tpim = -real[l] * this.sinTable[k] + imag[l] * this.cosTable[k];
          real[l] = real[j] - tpre;
          imag[l] = imag[j] - tpim;
          real[j] += tpre;
          imag[j] += tpim;
        }
      }
    } // Returns the integer whose value is the reverse of the lowest 'bits' bits of the integer 'x'.


    function reverseBits(x, bits) {
      let y = 0;

      for (let i = 0; i < bits; i++) {
        y = y << 1 | x & 1;
        x >>>= 1;
      }

      return y;
    }
  } // Post-process complex DFT into two real channels.
  // X[k] =    0.5 Z[k] + Z*[N-k]
  // Y[k] = -j 0.5 Z[k] - Z*[N-k]
  // left channel is index 0 to n/2-1, right channel is index n-1 to n/2.
  // s.a. http://www.ti.com/lit/an/spra291/spra291.pdf


  splitreal(real, imag) {
    const n = this.n; //real[0] = real[0]

    imag[0] = 0;
    real[n / 2] = imag[0];
    imag[n / 2] = 0;

    for (let i = 1; i < n / 2; i += 1) {
      const lr = 0.5 * (real[i] + real[n - i]);
      const li = 0.5 * (imag[i] - imag[n - i]);
      const rr = 0.5 * (imag[i] + imag[n - i]);
      const ri = 0.5 * (-real[i] + real[n - i]);
      real[i] = lr;
      imag[i] = li;
      real[n - i] = rr;
      imag[n - i] = ri;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FFTNayuki);

/***/ }),

/***/ "./lib/polyfill.js":
/*!*************************!*\
  !*** ./lib/polyfill.js ***!
  \*************************/
/***/ (function() {

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

/***/ }),

/***/ "./lib/samples.js":
/*!************************!*\
  !*** ./lib/samples.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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

/* harmony default export */ __webpack_exports__["default"] = (SampleView);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./lib/worker.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./lib/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples */ "./lib/samples.js");
/* harmony import */ var _fft_nayuki__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fft_nayuki */ "./lib/fft_nayuki.js");
/**
    @file Worker to render an FFT to image.

    @author Christian W. Zuckschwerdt <zany@triq.net>
    @copyright Christian W. Zuckschwerdt, 2019
    @license
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.
*/

/*eslint no-console: "off"*/



let fftN;
let fft;
/** Function for rendering an FFT to image. */

function renderFft(ctx) {
  const sampleView = new _samples__WEBPACK_IMPORTED_MODULE_1__["default"](ctx.format, ctx.buffer);
  const gauge_mins = new Uint8ClampedArray(new ArrayBuffer(ctx.width));
  const gauge_maxs = new Uint8ClampedArray(new ArrayBuffer(ctx.width));
  const gauge_amps = new Uint8ClampedArray(new ArrayBuffer(ctx.width));
  const sampleCount = sampleView.sampleCount;
  const block_norm = ctx.block_norm;
  const block_norm_db = 10 * Math.log10(block_norm);
  const gain = ctx.gain;
  const dB_range = ctx.range;
  let dBfs_min = 0.0;
  let dBfs_max = -200.0;
  const cmap = ctx.cmap;
  const color_max = cmap.length - 1;
  const color_norm = cmap.length / -dB_range;
  const cB_hist_size = 1000; // centi Bell (0.1 dB)

  const cB_hist = new Array(cB_hist_size).fill(0); // -0.0 to -100.0 dB

  const c_hist = new Array(cmap.length).fill(0);
  const n = ctx.n;
  const windowc = ctx.windowc;
  const height = n;
  const width = ctx.width;
  const points = width;
  const stride = (sampleCount - n) / (points - 1);
  const waterfall = ctx.waterfall; // const imageData = new ImageData(width, height); // would need polyfill

  const byteCount = 4 * width * height;
  const imageData = {
    data: new Uint8ClampedArray(byteCount)
  }; ////const imageBuffer = new ArrayBuffer(width * height * 4);
  //const imageBuffer = ctx.image;
  //const imageData = new Uint8ClampedArray(imageBuffer);

  if (fftN != n) {
    fft = new _fft_nayuki__WEBPACK_IMPORTED_MODULE_2__["default"](n);
    fftN = n;
  }

  const real = new Array(n);
  const imag = new Array(n); //console.time('fft worker');
  // faster to cast floats to int with bitwise nops than Math.round

  for (let x = 0; x < width; x++) {
    for (let k = 0; k < n; k++) {
      //const pos = 2 * (Math.round(stride * x) + k);
      const pos = ~~(0.5 + stride * x) + k;
      real[k] = windowc[k] * sampleView.sampleI(pos);
      imag[k] = windowc[k] * sampleView.sampleQ(pos);
    }

    fft.transform(real, imag);

    if (ctx.channelMode) {
      fft.splitreal(real, imag);
    }

    let dBfs_min_i = 0.0;
    let dBfs_max_i = -200.0;

    for (let i = 0; i < n; i++) {
      // for (let y = 0; y < n; y++) {
      // the positive frequencies are stored in the first half and
      // the negative frequencies are stored in backwards order in the second half.
      // (The frequency -k/n is the same as the frequency (n-k)/n.)
      const y = i <= n / 2 ? n / 2 - i : n / 2 + n - i; //const i = y < n / 2 ? n / 2 - 1 - y : n / 2 - 1 + n - y;

      const abs2 = real[i] * real[i] + imag[i] * imag[i];
      let dBfs = 5 * Math.log10(abs2) + block_norm_db + gain; //                const mean = 22;
      //                const sdev = 1;
      //                const xg = (-dBfs - mean) / sdev;
      //                const gauss = 1 / sdev * 1 / Math.sqrt(2 * Math.PI) * Math.exp(-0.5 * xg * xg);
      //                //console.log(gauss);
      //                dBfs *= gauss * 8 - 6;

      if (dBfs - gain < dBfs_min_i) dBfs_min_i = dBfs - gain;
      if (dBfs - gain > dBfs_max_i) dBfs_max_i = dBfs - gain;
      const cBabs = ~~(0.5 + (dBfs - gain) * -10);
      cB_hist[cBabs >= cB_hist_size ? cB_hist_size - 1 : cBabs] += 1; //const gray = color_max - Math.clamp(Math.round(dBfs * color_norm), 0, color_max);
      //const gray = Math.round(Math.clamp(color_max - dBfs * color_norm, 0, color_max));
      //const gray = ~~(0.5 + Math.clamp(color_max - dBfs * color_norm, 0, color_max));

      const grayU = color_max - dBfs * color_norm;
      const gray = ~~(0.5 + (grayU < 0 ? 0 : grayU > color_max ? color_max : grayU));
      c_hist[gray] += 1;
      const color = cmap[gray];
      const j = waterfall ? height * (width - 1 - x) * 4 + (n - 1 - y) * 4 : x * 4 + width * y * 4;
      imageData.data[j + 0] = color[0]; // R

      imageData.data[j + 1] = color[1]; // G

      imageData.data[j + 2] = color[2]; // B

      imageData.data[j + 3] = 255; // A
    }

    if (dBfs_min_i < dBfs_min) dBfs_min = dBfs_min_i;
    if (dBfs_max_i > dBfs_max) dBfs_max = dBfs_max_i; // amplitude gauge

    gauge_mins[x] = 0.5 + (dB_range + dBfs_min_i) * 256 / dB_range;
    gauge_maxs[x] = 0.5 + (dB_range + dBfs_max_i) * 256 / dB_range;
    const mid = ~~(0.5 + stride * x) + n / 2;
    const re = sampleView.sampleI(mid);
    const im = sampleView.sampleQ(mid);
    const abs2 = re * re + im * im;
    let dBfs_amp = 5 * Math.log10(abs2) + gain;
    gauge_amps[x] = 0.5 + (dB_range + dBfs_amp) * 256 / dB_range;
  } //console.timeEnd('fft worker');


  postMessage({
    cB_hist: cB_hist,
    c_hist: c_hist,
    dBfs_min: dBfs_min,
    dBfs_max: dBfs_max,
    offset: ctx.offset,
    gauge_mins: gauge_mins,
    gauge_maxs: gauge_maxs,
    gauge_amps: gauge_amps,
    imageData: imageData
  }, [gauge_mins.buffer, gauge_maxs.buffer, gauge_amps.buffer, imageData.data.buffer]);
}

onmessage = function (e) {
  if (e.data && e.data.buffer) {
    if (self.performance) performance.mark('render-start');
    renderFft(e.data);

    if (self.performance) {
      performance.mark('render-end');
      performance.measure('render', 'render-start', 'render-end'); // Get all of the measures out.
      // In this case there is only one.

      var measures = performance.getEntriesByName('render');
      var measure = measures[0];
      console.log(`worker render: ${measure.duration.toFixed(2)}ms`); // Clean up the stored markers.

      performance.clearMarks();
      performance.clearMeasures();
    }
  }
};
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=spectroplot.worker.js.map