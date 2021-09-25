# Spring Boot
Overview of the Spring Boot framework and its applications.

## What is Java Spring Boot?

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

### Property Injection
In the property injection (aka the Setter Injection), the injector supplies the dependency through a public property of the client class.

### Method Injection
In this type of injection, the client class implements an interface which declares the method(s) to supply the dependency and the injector uses this interface to supply the dependency to the client class.

## References

CodeAcademy (2021) MVC: Model, View, Controller. Available at: https://www.codecademy.com/articles/mvc (Accessed: 25 September 2021)

Edureka (2019) Spring Boot Full Course - Learn Spring Boot In 4 Hours | Spring Boot Tutorial For Beginner | Edureka. Available at: https://www.youtube.com/watch?v=UfOxcrxhC0s (Accessed: 25 September 2021)

IBM (2020) Java Spring Boot. Available at: https://www.ibm.com/cloud/learn/java-spring-boot (Accessed: 25 September 2021)

TutorialsTeacher (2020) Inversion of Control Tutorials. Available at: https://www.tutorialsteacher.com/ioc (Accessed: 25 September 2021)
