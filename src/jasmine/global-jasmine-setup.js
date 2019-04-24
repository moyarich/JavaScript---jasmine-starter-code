// Setup jasmine
import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';
window['jasmineRequire'] = jasmineRequire;

import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

export function jasMineBootstrap () {
  if (window['jasmineRef']) {
    location.reload();
    return;
  } else {
    window.onload(undefined);
    window['jasmineRef'] = jasmine.getEnv();
  }
}