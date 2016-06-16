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
