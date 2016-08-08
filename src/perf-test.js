var pokemonGoEncrypt = require('./pokemon-go-encrypt.js');

var rounds = 5000;
var inputSize = 1000;

console.log("performing " + rounds + " encryption rounds with an input size of " + inputSize + " bytes..");

var startTime = Date.now();

for (var i = 0; i < rounds; i++) {

    var iv = new Uint8Array(32);
    fillSampleBuffer(iv);

    var input = new Uint8Array(inputSize);
    fillSampleBuffer(input);

    pokemonGoEncrypt(input.buffer, iv.buffer);
}

var endTime = Date.now();

var ellapsedMs = endTime - startTime;

console.log("average " + (ellapsedMs / rounds) + "ms per round, took " + ellapsedMs + "ms total");


function fillSampleBuffer(buffer) {
    for (var i = 0; i < buffer.length; i++) {
        buffer[i] = i;
    }
}
