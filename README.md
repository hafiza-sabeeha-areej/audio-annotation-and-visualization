## Browser support
wavesurfer.js works only in [modern browsers supporting Web Audio](http://caniuse.com/audio-api).




See the [upgrade](https://github.com/katspaugh/wavesurfer.js/blob/master/UPGRADE.md) document if you're upgrading from a previous version of wavesurfer.js.

## Using with a module bundler

Install Wavesurfer:
```bash
npm install wavesurfer.js --save
# or
yarn add wavesurfer.js
```

Use it with a module system like this:
```javascript
// import
import WaveSurfer from 'wavesurfer.js';

// commonjs/requirejs
var WaveSurfer = require('wavesurfer.js');

// amd
define(['WaveSurfer'], function(WaveSurfer) {
  // ... code
});

```

## Development

[![Build Status](https://github.com/katspaugh/wavesurfer.js/workflows/wavesurfer.js/badge.svg?branch=master)](https://github.com/katspaugh/wavesurfer.js/actions?workflow=wavesurfer.js)
[![Coverage Status](https://coveralls.io/repos/github/katspaugh/wavesurfer.js/badge.svg)](https://coveralls.io/github/katspaugh/wavesurfer.js)
![Size](https://img.shields.io/bundlephobia/minzip/wavesurfer.js.svg?style=flat)

Install development dependencies:

```
npm install
```
Development tasks automatically rebuild certain parts of the library when files are changed (`start` – wavesurfer, `start:plugins` – plugins). Start a dev task and go to `localhost:8080/example/` to test the current build.

Start development server for core library:

```
npm run start
```

Start development server for plugins:

```
npm run start:plugins
```

Build all the files. (generated files are placed in the `dist` directory.)

```
npm run build
```

Running tests only:

```
npm run test
```

Build documentation with esdoc (generated files are placed in the `doc` directory.)
```
npm run doc
```

If you want to use [the VS Code - Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug), there is already a [launch.json](.vscode/launch.json) with a properly configured ``sourceMapPathOverrides`` for you..

## Updating the NPM package
When preparing a new release, update the version in the `package.json` and have it merged to master. The new version of the package will be published to NPM automatically via GitHub Actions.

