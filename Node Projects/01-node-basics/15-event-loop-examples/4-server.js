const http = require("http");

console.log("First");

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("Hello world");
});

server.listen(5000, () => {
    console.log("Server listening on port: 5000...");
});

console.log("Last");