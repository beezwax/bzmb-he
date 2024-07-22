const he = require('he');

function encode (text, options) {
  return he.encode(text, options);
} 

module.exports = encode;