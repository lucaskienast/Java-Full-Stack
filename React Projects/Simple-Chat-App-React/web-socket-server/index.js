// import dependencies
const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

// create http server using http module that was imported
// and tell it to lisren to the defined port 8000
const server = http.createServer();
server.listen(webSocketServerPort);
console.log('listening on port 8000');

// spawn up a websocket server, which listens to port 8000
const wsServer = new webSocketServer({
    httpServer: server
});

// create a client object which will store all the connected clients
const clients = {};

// function to create unique userId for every used that connects to server
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

// use on request method to define what should happen 
// once the server receives a request 
wsServer.on('request', function(request) {
    var userId = getUniqueID();
    console.log((new Date()) + 'Received a new connection from origin ' + request.origin + '.');
    // use request.accept method to accept the request and create a new connection
    const connection = request.accept(null, request.origin);
    // store connection in client object with userId as key
    clients[userId] = connection;
    // confirm that we have connected to the server
    console.log('connected: ' + userId + ' in ' + Object.getOwnPropertyNames(clients));
    // define an on message handler, which gets triggered whenever
    // the server receives any message
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ', message.utf8Data);
            // broadcasting message to all connected clients
            for (key in clients) {
                clients[key].sendUTF(message.utf8Data);
                console.log('sent Message to: ' + clients[key]);
            }
        }
    });
});

