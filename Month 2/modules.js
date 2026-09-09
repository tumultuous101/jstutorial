// Modules and require
// Part of the modules and require system in Node.js is the ability to create and use modules. A module is a self-contained unit of code that can be reused across different parts of an application. In Node.js, each file is treated as a separate module, and you can export functions, objects, or variables from one module and import them into another using the require function. 

// Modules can be built-in (like fs, http, or path), third-party (installed via npm), or custom modules created by developers. The require function is used to load and use these modules in your code. When you require a module, Node.js looks for the module in the following order: core modules, local files, and then node_modules directory.

// module.exports is a special object in Node.js that allows you to define what a module exports and makes available to other modules. By assigning values to module.exports, you can expose functions, objects, or variables from a module so that they can be imported and used in other parts of your application. This enables modular programming and code reusability in Node.js applications.

const {people, ages} = require('./people');

console.log (people, ages);

// Built-in modules
const os = require('os');

//.platform() method returns a string identifying the operating system platform on which the Node.js process is running. The .homedir() method returns the path of the current user's home directory. These methods are part of the os module, which provides operating system-related utility methods and properties.
console.log(os.platform(), os.homedir());