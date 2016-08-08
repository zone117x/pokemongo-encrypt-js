# pokemongo-encrypt-js


100% Javascript code for the Pokemon Go API request signature encryption (port of "encrypt.c").


This lib is implemented in typescript and compiles to clean ES6 code that will run in Node or any modern browser.


### Usage

The only file needed to run is `pokemon-go-encrypt.js`

Example Node.js usage:

```js
var pokemonGoEncrypt = require('./pokemon-go-encrypt.js');

var iv = new ArrayBuffer(32);
// then fill iv with random bytes..

var input = new ArrayBuffer(1000);
// then fill input..

// encrypt
var output = pokemonGoEncrypt(input, iv);

// format as hex
var hex = new Buffer(output).toString('hex');

console.log(hex);
```


### Performance

Output of running `perf-test.js`
```
performing 5000 encryption rounds with an input size of 1000 bytes..
average 2.116ms per round, took 10580ms total
```