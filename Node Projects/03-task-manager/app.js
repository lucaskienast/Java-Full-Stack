const express = require('express');
const app = express();
const tasks = require("./routes/tasks.js");
const dotenv = require("dotenv");
const connectDB = require('./db/connect.js');
const notFound = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");

// make dotenv ready to use
dotenv.config();

// middleware
app.use(express.static('./public'));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

// set up server and database
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("Connected to MongoDb...");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();