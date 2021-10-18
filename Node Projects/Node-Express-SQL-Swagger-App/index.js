const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
//const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route");

//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start swagger initialisation
const swaggerOption = {
    swaggerDefinition: (swaggerJSDoc.Options = {
        info: {
            title: "my-posts",
            descritpion: "API documentation",
            contact: {
                name: "Developer",
            },
            servers: ["http://localhost:3000/"],
        }
    }),
    apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// End swagger initialisation

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(3000, () => {
    console.log("I am ready to listen to you...");
})

/*
app.use("/test", (req, res) => {
    console.log("Received request!");
    res.status(200).send("Received request yooooo!");
})
*/

