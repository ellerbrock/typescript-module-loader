TypeScript Module Loader [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=100)](https://github.com/ellerbrock/typescript-badges/) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)
====================================================================================================================================================================================================================================================================================================================================================================================================

Small script to append dynamically Javascript and CSS to the document.  
I used this with Angular 1.x to load modules on runtime and append their Stylesheet definitions while developing.

A better way to do this is to make use of Module Loaders & Bundler like [Webpack](https://github.com/webpack/webpack) for production.

```javascript
/**
 * @author        Maik Ellerbrock
 * @link          https://github.com/ellerbrock
 * @version       1.0.1
 * @license       MIT
 * @description   adds CSS files to Header and Javascript files to Footer
 */

'use strict';

/**
 *  extract suffix from given filename
 *
 *  @param {string} fileName - to extract suffix
 *  @returns {string} - suffix
 */
function getFileSuffix(fileName: string): string {
  return fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
}

/**
 *  creates an link element and append href to it
 *
 *  @param {string} fileName - CSS filename
 *  @returns {HTMLLinkElement} - link element
 */
function createLinkElement(fileName: string): HTMLLinkElement {
  let eCSS = document.createElement('link');
  eCSS.rel = "stylesheet";
  eCSS.href = fileName;
  return eCSS;
}

/**
 *  creates an script element and append src to it
 *
 *  @param {string} fileName - Javascript filename
 *  @returns {HTMLScriptElement} - script element
 */
function createScriptElement(fileName: string): HTMLScriptElement {
  let eJS = document.createElement('script');
  eJS.src = fileName;
  return eJS;
}


/**
 *  append JS / CSS files to the document (CSS => Head , JS => Footer)
 *
 * @param fileName - to attach
 * @param debug - write HTML comment for debugging / information
 * @returns {boolean}
 */
function appendFiles(fileName: string, debug = false): boolean {
  let fileType, eFile, eTarget, location;
  fileType = getFileSuffix(fileName);

  if (fileType === 'css') {
    eFile = createLinkElement(fileName);
    location = 'head';
  }
  else if (fileType === 'js') {
    eFile = createScriptElement(fileName);
    location = 'body';
  }
  else {
    console.error('ERROR - filetype not valid! Supported formats: CSS / JS');
    return false;
  }

  eTarget = document.getElementsByTagName(location)[0];

  if (debug) {
    let eComment = document.createComment(' dynamically added ' + fileType + ' file: ' + fileName + ' ');
    eTarget.appendChild(eComment);
  }

  eTarget.appendChild(eFile);
  return true;
}
```
Contact / Social Media
======================

*Get the latest News about Web Development, Open Source, Tooling, Server & Security*

[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/) [![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/) [![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774) [![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/) [![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)

Development by
==============

Developer / Author: [Maik Ellerbrock](https://github.com/ellerbrock/)<br> Company: [Frapsoft](https://github.com/frapsoft/)

### License 

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)  

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)  

