var pokemonGoEncrypt = require('./pokemon-go-encrypt.js');
var testData = require('./test-data.js');
var b64 = require('./b64.js');

var failedTests = [];
testData.forEach(function (test, index) {
    var inputBuffer = b64.b64decode(test.input);
    var ivBuffer = b64.b64decode(test.iv);
    var testOutput = pokemonGoEncrypt(inputBuffer, ivBuffer);
    var testb64 = b64.b64encode(testOutput);
    if (test.output != testb64) {
        failedTests.push(index);
    }
});

if (failedTests.length == 0) {
    console.log("all tests passed");
}
else {
    failedTests.forEach(function (t) {
        console.log("test " + t + " failed");
    });
}