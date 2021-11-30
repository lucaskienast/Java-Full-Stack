const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/first.txt", "utf8", (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        console.log("completed first task");
    }
});

console.log("starting next task");