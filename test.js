const decode = require("./decode.js");
const encode = require("./encode.js");

console.log(decode("A &#x3E; B &#x3E; C &#x3E; D &#x3E; E &#x3E; F"));

console.log(encode("A > B > C > D > E > F"));