// VARIABLES AND DATA TYPES (LECTURE-1)

// Console is any place where we can use CLI to do things. A terminal is basically system console
// whereas something like console in browser is let's say JS programming console.
console.log("Hello World!")

name = "Ujjwal Karki"
console.log("Ujjwal")
console.log('Work')

// NPM and Node: JS was never meant to be used in backend for coding and logic, however, when it was made, it was made possible to run JS in a user's machine without the need for browser by the help of node. Which is why one needs to install node to run js on their terminal. Meanwhile, you might want to download various files and dependencies for your JS work, well that is made possible using npm (node package manager). Think of it as, node is the engine that runs the JS while npm is an app store which let's you download stuffs to run using node for js.

// Variables: There are three keywords to start the name of any variable with 
// 1. var: Variable can be re-declared and updated. A global scope vairable
// 2. let: Variable cannot be re-declared but can be updated. A block scope variable
// 3. const: Variable cannot be re-declared or updated. A block scope variable

// Primitive data types in JS: number (+,-), string, boolean, undefined, null, bigint, symbol

let a = BigInt("234")

let y = Symbol("Hello")

// Creating object

// We can make changes in this student object cause to actually change the object value, we need to change each and every variable's value
const student = {
    name: "Ujjwal Karki",
    age: 20,
    address: "Kathmandu",
    cgpa: 8.2,
    isPass: true,
};

student["name"];
console.log(student.isPass);

student["age"] += 1;
console.log(student.age)
