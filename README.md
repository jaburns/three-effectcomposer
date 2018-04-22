# three.js EffectComposer
![three.js version](https://img.shields.io/badge/three.js-v0.92.0-green.svg?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/j0hh/three-effectcomposer.svg?style=flat-square)](https://github.com/j0hh/three-effectcomposer/issues)


## Installation
```
yarn add @johh/three-effectcomposer
```
```
npm i --save @johh/three-effectcomposer
```


## Description
three.js's r92 [EffectComposer](https://github.com/mrdoob/three.js/blob/dev/examples/js/postprocessing/EffectComposer.js) ported to ES6 for easy importing.


## Usage
```javascript
import { WebGLRenderer } from 'three';
import EffectComposer, {
	Pass,
	RenderPass,
	ShaderPass,
	TexturePass,
	ClearPass,
	MaskPass,
	ClearMaskPass,
	CopyShader,
} from '@johh/three-effectcomposer';

const renderer = new WebGLRenderer();
const composer = new EffectComposer( renderer );
```


## Differences to the original
- This package does not rely on namespace pollution, so `THREE.EffectComposer`, `THREE.Pass`, etc. remain undefined.

- An additional Pass, called `RenderingPass`, is exported. It includes a standard rendering setup, i.e. a scene (as `this.scene`), including a ortographic camera (`this.camera`) and quad (`this.quad`). This is useful, if your custom pass requires a said setup, but a customized rendering function.


## Testing
Testing is done with mocha in a Chromium environment using puppeteer.

Right now, only rudimentary tests are implemented. The structure of each class is compared to its original counterpart. **The behavior is not tested.**


## Credits
This package is heavily based on code that was originally written by [alteredq](https://github.com/alteredq) and is licensed **MIT** © 2010-2018 three.js authors.
