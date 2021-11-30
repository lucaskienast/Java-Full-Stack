const path = require('path');

// platform specific separator
console.log(path.sep);

// join sequence of strings to create file path
// works regardless of whether file exists or not
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// access last part of filepath i.e. base name
const base = path.basename(filePath);
console.log(base);

// return absolute path
// absolute path may differ b/w my machine and heroku etc
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);