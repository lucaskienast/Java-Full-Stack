const { readFile, writeFile } = require("fs").promises; //Version 3 .promises

// Version 3
const start = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf8');
        const second = await readFile('../content/second.txt', 'utf8');
        await writeFile('../content/result-promisify.txt', 
        `This is awesome: ${first}, ${second}`,
        {flag: "a"}
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();



// Version 2
/*
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        // Version 1b
        //const first = await getText('./content/first.txt');
        //const second = await getText('./content/second.txt');
        // Version 2
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-promisify.txt', `This is awesome: ${first}, ${second}`);
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start();
*/

// Version 1
/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}
getText("./content/first.txt")
.then(result => console.log(result))
.catch(error => console.log(error));
*/