const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// own multiple middleware 
//app.use([logger, authorize]);

// express middleware
// app.use(express.static('./public'));

// third party middleware
app.use(morgan('tiny'));

app.get("/",(req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/api/products",(req, res) => {
    res.send("Products");
});

app.get("/api/items", (req, res) => {
    console.log(req.user);
    res.send("Items");
});

// use  multiple middleware in specific route
/*
app.get("/api/items", [logger, authorize], (req, res) => {
    console.log(req.user);
    res.send("Items");
});
*/

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});