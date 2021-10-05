# Java Full Stack 
Overview of Java Full Stack development tools and applications.

- Git
- Java
- JavaScript
- React
- Node
- Spring Boot

## Git
Git is officially defined as a distributed version control system (VCS). In other words, it's a system that tracks changes to our project files over time. It enables us to record project changes and go back to a specific version of the tracked files, at any given point in time.  This system can be used by many people to efficiently work together and collaborate on team projects, where each developer can have their own version of the project, distributed on their computer. Later on, these individual versions of the project can be merged and adapted into the main version of the project.

Introduction: https://www.notion.so/zarkom/Introduction-to-Git-ac396a0697704709a12b6a0e545db049

Documentation: https://git-scm.com/doc

## React
React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. React is declerative and component-based. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.


Introduction: https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/

Documentation: https://reactjs.org/docs/getting-started.html

## Node
Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client’s browser. A runtime environment (sometimes shortened to RTE) contains Web API’s that a developer can access to build a code, and a JavaScript engine that parses that code. This makes it lightweight, flexible and easy to deploy. Node is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine. 

Introduction: https://www.netguru.com/glossary/node-js

Documentation: https://nodejs.org/en/docs/

## Web Services
A web service is a software system designed to support interoperable machine-to-machine interaction over a network. In simple points:

- machine-to-machine or app-to-app
- interoperable or platform independent
- should allow communication over a network

### How does data exchange b/w apps take place?
The application sends an input (request) to the web service, and the web service sends an output (response) back to the application. The web service should be platform independent so the request can be sent from a Java, .NET, or PHP application. Hence, the request and response should also be platform independent. The two most popular formats for platform independent requests and responses are XML and JSON (or HTML for web browsing).

### How does the app know the format of request and response?
Every web service includes a service definition, which specifies:

- request/response format
- request structure
- response structure
- endpoint (where is the service available i.e. which url has to be called)

### REST - REpresentational State Transfer
It is an architecture style for designing loosely coupled applications over HTTP, that is often used in the development of web services. REST does not enforce any rule regarding how it should be implemented at lower level, it just put high level design guidelines and leave you to think of your own implementation. 

REST defines 6 architectural constraints which make any web service – a true RESTful API.

- Uniform interface
- client-server
- stateless
- cacheable
- layered system
- code on demand (optional)

### RESTful Web Services
RESTful web services are built to work best on the Web. Representational State Transfer (REST) is an architectural style that specifies constraints, such as the uniform interface, that if applied to a web service induce desirable properties, such as performance, scalability, and modifiability, that enable services to work best on the Web. In the REST architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs), typically links on the Web. The resources are acted upon by using a set of simple, well-defined operations. The REST architectural style constrains an architecture to a client/server architecture and is designed to use a stateless communication protocol, typically HTTP. In the REST architecture style, clients and servers exchange representations of resources by using a standardized interface and protocol.

### JWT - JSON Web Tokens
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

## Java Spring Boot

Java Spring Framework (Spring Framework) is a popular, open source, enterprise-level framework for creating standalone, production-grade applications that run on the Java Virtual Machine (JVM). Java Spring Boot (Spring Boot) is a tool that makes developing web application and microservices with Spring Framework faster and easier through three core capabilities:

- Autoconfiguration
- An opinionated approach to configuration
- The ability to create standalone applications

These features work together to provide you with a tool that allows you to set up a Spring-based application with minimal configuration and setup.

### Autoconfiguration
Autoconfiguration means that applications are initialized with pre-set dependencies that you don't have to configure manually. As Java Spring Boot comes with built-in autoconfiguration capabilities, it automatically configures both the underlying Spring Framework and third-party packages based on your settings (and based on best practices, which helps avoid errors). 

### Opinionated approach
Spring Boot uses an opinionated approach to adding and configuring starter dependencies, based on the needs of your project. Following its own judgment, Spring Boot chooses which packages to install and which default values to use, rather than requiring you to make all those decisions yourself and set up everything manually.

### Standalone applications
Spring Boot helps developers create applications that just run. Specifically, it lets you create standalone applications that run on their own, without relying on an external web server, by embedding a web server such as Tomcat or Netty into your app during the initialization process. As a result, you can launch your application on any platform by simply hitting the Run command.

## MVC - Model, View, and Controller
MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions. MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.

### Model (represents the data)
Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app.

### View (is the User Interface)
View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it.

### Controller (is the request handler)
Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.

## IoC - Inversion of Control 
IoC is a design principle (although, some people refer to it as a pattern). As the name suggests, it is used to invert different kinds of controls in object-oriented design to achieve loose coupling. Here, controls refer to any additional responsibilities a class has, other than its main responsibility. This include control over the flow of an application, and control over the flow of an object creation or dependent object creation and binding.

## DI - Dependency Injection
DI is a design pattern used to implement IoC. It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways. Using DI, we move the creation and binding of the dependent objects outside of the class that depends on them. The Dependency Injection pattern involves 3 types of classes:

- The client class (dependent class) is a class which depends on the service class.
- The service class (dependency) is a class that provides service to the client class.
- The injector class injects the service class object into the client class.

The injector class injects dependencies broadly in three ways: through a constructor, through a property, or through a method.

### Constructor Injection
In the constructor injection, the injector supplies the service (dependency) through the client class constructor.

### Property/Setter Injection
In the property injection (aka the Setter Injection), the injector supplies the dependency through a public property of the client class.

### Method/Interface Injection
In this type of injection, the client class implements an interface which declares the method(s) to supply the dependency and the injector uses this interface to supply the dependency to the client class.

## References

CodeAcademy (2021) MVC: Model, View, Controller. Available at: https://www.codecademy.com/articles/mvc (Accessed: 25 September 2021)

Edureka (2019) Spring Boot Full Course - Learn Spring Boot In 4 Hours | Spring Boot Tutorial For Beginner | Edureka. Available at: https://www.youtube.com/watch?v=UfOxcrxhC0s (Accessed: 25 September 2021)

IBM (2020) Java Spring Boot. Available at: https://www.ibm.com/cloud/learn/java-spring-boot (Accessed: 25 September 2021)

JWT (2021) Introduction to JSON Web Tokens. Available at: https://jwt.io/introduction (Accessed: 27 September 2021)

Karia, B. (2018) A quick intro to Dependency Injection: what it is, and when to use it. Available at: https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/ (Accessed: 25 September 2021)

Oracle (2013) What Are RESTful Web Services? Available at: https://docs.oracle.com/javaee/6/tutorial/doc/gijqy.html (Accessed: 26 September 2021)

TutorialsTeacher (2020) Inversion of Control Tutorials. Available at: https://www.tutorialsteacher.com/ioc (Accessed: 25 September 2021)

RestfulAPI (2021) REST Architectural Constraints. Available at: https://restfulapi.net/rest-architectural-constraints/ (Accessed: 26 September 2021)

Sridhar, A. (2018) A quick guide to help you understand and create ReactJS apps. Available at: https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/ (Accessed: 30 September 2021)

Wikipedia (2021) React (JavaScript library). Available at: https://en.wikipedia.org/wiki/React_(JavaScript_library) (26 September 2021)
