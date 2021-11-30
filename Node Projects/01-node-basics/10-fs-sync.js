// file system synchronous
// read and write from file system

const {readFileSync, writeFileSync} = require("fs");
console.log("start");

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//console.log(first, second);

// create new file
// or rewrite existing file
/*
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`
);
*/

// append to existing file
// use flag: a
writeFileSync(
    './content/result-sync.txt', 
    `This is the appended part`,
    {flag: 'a'}
);

console.log("done with this task");
console.log("starting the next task");