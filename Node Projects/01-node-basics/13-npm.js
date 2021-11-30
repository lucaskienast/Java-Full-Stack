// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i or install <packageName>

// global dependency - use it in any project
// npm i or install -g <packageName>
// sudo i or install -g <packageName> (mac)

// dev dependencies
// npm i <package e.g. nodemon> --save-dev or -D

// uninstall package
// npm uninstall <packageName>

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);