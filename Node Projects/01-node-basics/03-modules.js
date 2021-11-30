// Modules - Encapsulated code (only share minimum)
// CommonJS - every file is a module (ny default)

const names = require('./04-names.js');
const sayHi = require('./05-utils.js');
const data = require('./06-alt-syntax.js');

// runs function in module
// when you import a module, you invoke it
require('./07-mind-grenade.js');

console.log(data); // returns object
console.log(names); // returns object
console.log(sayHi); // returns function

sayHi("susan");
sayHi(names.john); // returns string
sayHi(names.peter);  // returns string