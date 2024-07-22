const he = require('he');

function decode (html, options) {
  return he.decode(html, options);
} 

module.exports = decode;