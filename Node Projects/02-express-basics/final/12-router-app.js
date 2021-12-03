const express = require('express');
const app = express();

const peopleRouter = require('./routes/people.js');
const authRouter = require('./routes/auth.js');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());
// set up routers
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
    console.log("Server is listening to port 5000...");
});