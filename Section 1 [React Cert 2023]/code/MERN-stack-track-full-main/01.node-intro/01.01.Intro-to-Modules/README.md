# Lesson 01.01: Modules
***

## What this lesson covers:
- What is Node.js
- What Node.js will be used for
- What is a Module
- Custom modules and `module.exports`
- `require()`
- Importance of modularity
***

### What is Node.js?

- Node.js is a running environment that allows you to run Javascript locally on your computer, as opposed to running it in the browser
- In 2008, Google created a free and open-source JavaScript engine called V8 for the internet browser Chrome. 
- In 2009, the same V8 engine was used by Ryan Dahl to create Node.js. 
- In the browser, JavaScript has access to `document`, `window`, and other objects that the browser provides because it's designed for interacting with the DOM
- Node has access to things such as `OS` because your computer can provide information about your operating system

<!-- 0. Download Node via executable file. This may take an HOUR OR TWO -->
<!-- 0.a consider using terminal IN VSCode to avoid complications with Windows users. ctrl + ` (backtick) -->

***
### What will Node.js be used for?

Node.js can be used to execute (run) javascript files. Within the context of this course, Node.js will be used to run a server, and to connect to a database (servers and databases are referred to as the back-end). The back end can send data to the front-end which is responsible for serving web pages to a client.

Before getting started, make sure you are working in **PROG.js**. The **START.js** file will always be a copy of what the file should look like at the beginning of this `README.md`, and the **FINAL.JS** file is a reference for what it looks like at the end of this `README.md`.

As a start, we will put in a simple console log:

1. Place a console log to test
<!-- 1. Place a console log to test  -->
```js
console.log("Hello World!");
```

For all instructions on running terminal commands, we will assume that the file **PROG.js** is being worked on. In VSCode, you can open terminal using **ctrl + \`** (backtick is the key to the left of the 1 on your keyboard). In your terminal, make sure you've navigated to the folder where this `README.md` lives and run the following command:

```bash
node PROG.js
```

You should see "Hello World!" in the console!

This use of the `node` command is how JavaScript files are executed locally. In order to activate a server, this command will be used on the server's main file

***
### What is a Module

A Module in Node.js is a collection of functions, organized in a single or multiple JavaScript files which can be reused throughout the Node.js application. Each module has its own context, so it cannot interfere with other modules or pollute global scope.

There are 3 kinds of Node modules:
- Can be built in, such as `OS`, `FS`, `path`, and `HTTP` which are all covered in this Unit
- Can be installed using `npm` commands, such as `express` which will be covered in Unit 02
- Can be custom-made and will exist locally in your application. In this case, they must be assigned to the property `module.exports`

***
### Custom modules and `module.exports`

Open the file **modules/sayName.js** to see the following:

```js
function sayName(name) {
  console.log(`My name is ${name}`);
}

module.exports = sayName;
```

Here is a function that makes a greeting out of any given name. Under the defined function, Node's built-in object called `module` is called on in order to export the function. This allows us to use that function from any other file, as long as it's imported using `require()`

***
### `require()`

The `require()` function allows a JavaScript file to import from another file.

Let's give it a try:

2. Use the `require()` function to grab sayName from the modules
<!-- 2. Use the require() function to grab sayName from the modules -->
```js
const sayName = require("./modules/sayName");
```

In this way of importing a module, the module and all of it's functionality is ready to use in **PROG.js**.

Let's use this immediately and test the `sayName()` function:

3. Test the module function sayName
<!-- 3. Test the module function sayName -->
```js
sayName("Brian");
```

If we use the command `node PROG.js` in terminal, we should see it show up below!

Next, we are going to explore how to import one function at a time from a module. Open the file **modules/greetings.js** to see the following:

```js
function sayHello(name) {
  console.log(`Hello ${name}`);
}

function sayGoodBye(name) {
  console.log(`Good bye ${name}`);
}

module.exports = { sayHello, sayGoodBye };
```

In this way of importing a module, each function will be exported individually. They can also be imported in a similar manner:

4. Use the `require()` function to grab { sayHello, sayGoodBye } from the modules
<!-- 4. Use the require() function to grab { sayHello, sayGoodBye } from the modules -->
```js
const { sayHello, sayGoodBye } = require("./modules/greetings");
```

Next we are going to test the `sayHello` and `sayGoodBye()` functions:

5. Test the module functions `sayHello` and `sayGoodBye`
<!-- 5. Test the module functions `sayHello` and sayGoodBye -->
```js
sayHello("New Brian");
sayGoodBye("Old Brian");
```

***
### Importance of modularity

Modularity is one of the most popular programming practices that you’ll never fail to find in almost all of the top software projects across all programming languages and software stacks.

Modularizing your code means decomposing a monolithic piece of logic or functionality into separate, individual, independent components that work together in unison but are much easier to organize, update, maintain, troubleshoot, and debug. This fragmentation has several benefits: 

- It makes your project easier to manage and maintain as points of failure are easy to isolate and fix. 
- The flexibility allows you to interchange code components and try new features without breaking core functionality.
- It reduces redundancy and increases efficiency by reusing and extending already implemented pieces of code.
- It is easier to unit test and debug.
- It saves you time and resources – in the short run as well as the long run.