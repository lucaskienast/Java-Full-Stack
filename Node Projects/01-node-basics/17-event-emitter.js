const EventEmitter = require("events");

// emit an event and listen for it
// 1. listen
// 2. emit
const customEmitter = new EventEmitter();

// emit - emit an event
// this emit will not output anything
// customEmitter.emit("response");

// on - listen for an event
customEmitter.on("response", (name, id) => {
    console.log(`Data received: ${name}, ${id}`);
});
// order matters here
customEmitter.on("response", () => {
    console.log(`Some other logic here `);
});

// emit - emit an event
// this emit will output something
customEmitter.emit("response", "john", 34);