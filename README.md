# Pixel Perfect - The *Todo List*
A project for the Pixel Perfect Front End stream consisting of a web app of a todo list.
This project is built in three parts:
* a basic part, containing only basic html, css and javascript
* a second, more advanced part, using Webpack and modules
* and a third part using Sass and TypeScript

## About the *Todo List* 
### Functionality
The todo list app has the following functionality:
* Write a todo item in an input field and add it to a list
* Mark a todo item in the list as done
* Remove a todo item from the list
* Save what is written in the input field as long as the session is up
* Save todo list indefinately

## Parts of the project
### Part 1: Basics
*Branch: `basics`*

Here you will find three files: a HTML file, a JavaScript file and CSS file.
The whole app is build using only one class in JavaScript which is instantiated at the bottom of the same file.
As the app object is instantiated, it binds elements from the DOM to class variables which the object later can use to add functionality to.
The todo list itself is split into three main parts;
a todo form with which you can add new todo items which is displayed in the header element,
a todo list which displays and manages the current todos which is displayed in the main element,
as well as the todo item itself which is displayed in the todo list.

### Part 2: Webpack and modules
*Branch: `webpack_and_modules`*

In order to run this branch, you need to have Node.js and NPM/Yarn installed on your computer.
Run the Dev Server with either `npm run start:dev` or `yarn start:dev`.
Build a compiled version with either `npm run build:dev` or `yarn build:dev`.

In this part, Webpack has been added and used to split the code into modules. The app's JavaScript and HTML now only wraps and marks the application,
but each part, now called components, are split into respective JS files and CSS files. The styling is refactored to reflect the new architecture better.
Constants and a super class called Component can now be separated from the main code itself.
The Component class extends the new component modules we created out of the previous app code and basically just enables a component keep track of its DOM element once instantiated and bound to the DOM.
The TodoItem component is now *smarter* and keeps track of its own logic and DOM element which lets the TodoList only keep track of its own DOM element and a list of TodoItem objects.
At the instantiation of the app object, the object only binds the DOM to the components and the components to each other.

A bonus is that the components themselves can import their own respective CSS files, and the base styling can be imported at app level,
so that the app HTML file can stay clear of any styling imports which makes the app more modular. Webpack is then used on build to compile everything into a HTML file and a bundled JS file.
The JS file is then automatically injected into the HTML file together with some basic information that can be configured.


### Part 3: Sass and TypeScript
*Branch: `sass_and_typescript`*

In order to run this branch, you need to have Node.js and NPM/Yarn installed on your computer.
Run the Dev Server with either `npm run start:dev` or `yarn start:dev`.
Build a compiled version with either `npm run build:dev` or `yarn build:dev`.

*Under development*
