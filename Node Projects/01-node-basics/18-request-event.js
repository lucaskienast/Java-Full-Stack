const http = require("http");

// Every time somebody visits our server 
// and the request comes in
/*
const server = http.createServer((req, res) => {
    res.end("Welcome");
});
*/

// Alt. setup using event emitter API on logic
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
    res.end("Welcome");
});

server.listen(5000);