const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/login-component/runtime.js',
    './dist/login-component/polyfills.js',
    './dist/login-component/scripts.js',
    './dist/login-component/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/login-element.js');
})();