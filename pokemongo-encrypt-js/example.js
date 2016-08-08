// node.js test app

var pokemonGoEncrypt = require('./pokemon-go-encrypt.js');

var iv = new ArrayBuffer(32);
fillRandomBytes(iv);

var input = str2ab("sample data!");

var output = pokemonGoEncrypt(input, iv);
var hex = arrToHex(output);

console.log(hex);


// formatting helper functions..

function arrToHex(buffer) {
    return Array.prototype.map.call(new Uint8Array(output), v => ('0' + v.toString(16)).slice(-2)).join('');
}

function fillRandomBytes(buffer) {
    var typedBuffer = new Uint8Array(buffer);
    for (var i = 0; i < typedBuffer.length; i++) {
        typedBuffer[i] = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    }
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

