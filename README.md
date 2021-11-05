# JavaScript Web Applications
Overview of Java Full Stack development tools and applications.

- React.js
- Node.js

## React.js
React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. React is declerative and component-based. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Introduction: https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/

Documentation: https://reactjs.org/docs/getting-started.html

Connect React & Node: https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

### React Router Dom
React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.

Documentation: https://reactrouter.com/web/guides/quick-start

Introduction: https://blog.logrocket.com/react-router-dom-tutorial-examples/

### Socket IO
Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.

Documentation: https://socket.io/docs/v4/ || https://www.npmjs.com/package/socket.io

Introduction: https://socket.io/get-started/chat || https://socket.io/docs/v3/emit-cheatsheet/

### Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Documentation: https://reactjs.org/docs/context.html

### Redux
Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it’s mostly used as a state management tool with React, you can use it with any other JavaScript framework or library. With Redux, the state of your application is kept in a store, and each component can access any state that it needs from this store.

Introduction: https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/

Documentation: https://react-redux.js.org/introduction/getting-started

### Timeago.js
Timeago.js is a simple library (less than 1 kb) that is used to format datetime with *** time ago statement. eg: '3 hours ago'.

Documentation: https://timeago.org || https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3

### Google Fonts
Google Fonts is a font embedding service library. This includes free and open source font families, an interactive web directory for browsing the library, and APIs for using the fonts via CSS and Android.

Documentation: https://fonts.google.com/specimen/Roboto

### Material UI
Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch.

Installation: https://www.npmjs.com/package/@mui/icons-material

Icons: https://mui.com/components/material-icons/

### Bootstrap
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

Documentation: https://getbootstrap.com/docs/5.1/getting-started/introduction/

### Box Shadow CSS Generator
Use the sliders and the color picker to set the values and watch the live preview until you reach the desired effect. Select the right-down shift, spread, blur, opacity, color. Pick a custom color for the preview background and your object.

Link: https://html-css-js.com/css/generator/box-shadow/


## Node.js
Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser. A runtime environment (sometimes shortened to RTE) contains Web API’s that a developer can access to build a code, and a JavaScript engine that parses that code. This makes it lightweight, flexible and easy to deploy. Node is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. 

Introduction: https://www.netguru.com/glossary/node-js

Documentation: https://nodejs.org/en/docs/

HTTP Status Code: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

### Express.js
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Many popular frameworks are based on Express.

Introduction: https://expressjs.com/en/starter/basic-routing.html || https://www.guru99.com/node-js-express.html

Documentation: https://expressjs.com/en/5x/api.html

### Express Rate Limit
Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.

Documentation: https://www.npmjs.com/package/express-rate-limit

### HTTP Response Status Codes
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

- Informational responses (100–199)
- Successful responses (200–299)
- Redirection messages (300–399)
- Client error responses (400–499)
- Server error responses (500–599)

Documentation: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Package: https://www.npmjs.com/package/http-status-codes

### JSON Web Tokens (JWT)
JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.

Documentation: https://jwt.io

jsonwebtoken package: https://www.npmjs.com/package/jsonwebtoken

Key generator: https://allkeysgenerator.com/

### MIME Types
A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) indicates the nature and format of a document, file, or assortment of bytes. 

Documentation: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

### Postman
Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface, through which we obtain different types of responses that need to be subsequently validated. 

Introduction: https://www.encora.com/insights/what-is-postman-api-test

Documentation: https://learning.postman.com/docs/getting-started/introduction/

### Swagger
Swagger is a set of rules (in other words, a specification) for a format describing REST APIs. The format is both machine-readable and human-readable. As a result, it can be used to share documentation among product managers, testers and developers, but can also be used by various tools to automate API-related processes. When we say REST, we don’t necessarily adhere to the RESTful rules. We refer to the basic concepts behind REST APIs. 

Introduction: https://swagger.io/blog/api-development/getting-started-with-swagger-i-what-is-swagger/

Documentation: https://swagger.io/docs/

### Swagger UI Express
This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.

Documentation: https://www.npmjs.com/package/swagger-ui-express

### Yaml.js
YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. YAML targets many of the same communications applications as Extensible Markup Language but has a minimal syntax which intentionally differs from SGML. 

Documentation: https://www.npmjs.com/package/yamljs

### MongoDB
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.

Getting Started: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Introduction: https://docs.mongodb.com/manual/introduction/

### Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

Getting Started: https://mongoosejs.com/docs/

Introduction: https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

### Dotenv
The dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on the Twelve-Factor App methodology. Environment variables allow us to manage the configuration of our applications separately from our codebase. Separating configurations makes it easier for our application to be deployed in different environments. Environment variables are variables external to our application which reside in the OS or the container where the production application is running. Because development is mostly done on local machines, environment variables are put either to local environment variables with commands such as set or export, or stored in the local .env file. Common examples of configuration data that are stored in environment variables include:

- HTTP port
- database connection string
- location of static files
- endpoints of external services

The .env file should never be committed to the source code repository. We must place the file into the .gitignore file. (When using git.). Modern editors have support for .env files; for instance, the code has the DotENV extension.

Introduction: https://zetcode.com/javascript/dotenv/

Documentation: https://www.npmjs.com/package/dotenv

### Helmet.js
Helmet.js is a useful Node.js module that helps you secure HTTP headers returned by your Express apps. HTTP headers are an important part of the HTTP protocol, but are generally transparent from the end-user perspective. The headers provide important metadata about the HTTP request or response so the client (browser) and server can send additional information in a transaction.

Introduction: https://www.veracode.com/blog/secure-development/fasten-your-helmetjs-part-1-securing-your-express-http-headers

Documentation: https://helmetjs.github.io || https://www.npmjs.com/package/helmet

### Morgan 
Morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process. In Node.js and Express, middleware is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server.

Introduction: https://www.digitalocean.com/community/tutorials/nodejs-getting-started-morgan

Documentation: https://www.npmjs.com/package/morgan

### Nodemon
Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Documentation: https://www.npmjs.com/package/nodemon

### Bcrypt
BCrypt is based on the Blowfish block cipher cryptomatic algorithm and takes the form of an adaptive hash function. Using a Key Factor, BCrypt is able to adjust the cost of hashing. With Key Factor changes, the hash output can be influenced. In this way, BCrypt remains extremely resistant to hacks, especially a type of password cracking called rainbow table.

Introduction: https://danboterhoven.medium.com/why-you-should-use-bcrypt-to-hash-passwords-af330100b861

Documentation: https://www.npmjs.com/package/bcrypt

### Multer
File upload is a very common feature that almost every website needs. File upload in Node.js seems to be tedious work but we have multer to the rescue. Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency. Multer adds a body object and a file or files object to the request object. The bodyobject contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

Documentation: https://www.npmjs.com/package/multer

Introduction: https://medium.com/@svibhuti22/file-upload-with-multer-in-node-js-and-express-5bc76073419f

### Hacker News API
This API is built on top of Algolia Search's API. It enables developers to access HN data programmatically using a REST API. This documentation describes how to request data from the API and how to interpret the response.

Documentation: https://hn.algolia.com/api

### XSS-Clean
Cross-site scripting (also known as XSS) is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application. It allows an attacker to circumvent the same origin policy, which is designed to segregate different websites from each other. Cross-site scripting vulnerabilities normally allow an attacker to masquerade as a victim user, to carry out any actions that the user is able to perform, and to access any of the user's data. If the victim user has privileged access within the application, then the attacker might be able to gain full control over all of the application's functionality and data.

Background info: https://portswigger.net/web-security/cross-site-scripting

Documentation: https://www.npmjs.com/package/xss-clean

## Tutorials

Asynchronous JS (Async/Await, Promises, Callbacks): https://www.youtube.com/watch?v=ZYb_ZU8LNxs

Node.js and Express.js: https://www.youtube.com/watch?v=Oe421EPjeBE

Node.js REST API with MongoDB: https://www.youtube.com/watch?v=ldGl6L4Vktk&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=1

React.js front-end design: https://www.youtube.com/watch?v=zM93yZ_8SvE&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=2

MERN Stack with Hooks and Context API: https://www.youtube.com/watch?v=pFHyZvVxce0&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=3

Chat App with Socket IO: https://www.youtube.com/watch?v=HggSXt1Hzfk&list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&index=5
