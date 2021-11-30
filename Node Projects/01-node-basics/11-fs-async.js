// file system asynchronous
// read and write from file system

const { readFile, writeFile } = require('fs');

console.log("start");

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf8', (error, result) => {
            if (error) {
                console.log(error);
                return;
            } else {
                const second = result;
                writeFile('./content/result-async.txt', 
                `Here is the result: ${first}, ${second}`,
                (error, result) => {
                    if (error) {
                        console.log(error);
                        return;
                    } else {
                        //console.log(result);
                        console.log("Done with this task");
                    }
                }
                );
            }
        });
    }
});

console.log("Starting next task");
