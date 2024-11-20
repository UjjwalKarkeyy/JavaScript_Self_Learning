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

// Lecture-2
/* Nothing new or worth noting down in this lecture. Moving to lecture 3 */

// Lecture - 3 (Loops and strings)

// Strings in JS are immutable

for(let i = 0; i < 5; i++)
{
    console.log("Ujjwal Karki\n");
    
}

// For-of and for-in loop

/* for-of: Used for iterating over a string or array */
let my_name = "Ujjwal";

for(let value of my_name)
    {
        console.log(value);
    }

/* for-in: Used for object keys or even in arrays */

const new_student=
{
    stu_name: "Ujjwal",
    age: 25,
    address: "Kathmandu",
    isPass: true
}

for(let key in new_student)
{
    console.log("Key: " + key + " value: " + new_student[key]);   
}

// Taking user input using prompt. prompt takes the input as a string by default.

// let user_input = prompt("Enter the number: ");
// console.log(user_input);

// In JS string can be delcared in single or double quote
/* Methods for strings
    1. str.length
    2. str.toUpperCase
    3. str.toLowerCase
    4. str.trim
    5. str.split
    6. str.slice(start,end?) //returns part of string
    7. str.concat(str2) //joins str2 with str
    8. str.replace(searchVal,newVal)
    9. str.charAt(indx)
*/

let str = "   Ujjwa l";
// string in js is array so we can do the following which we couldn't do directly in Java
console.log(str[0]);

console.log(str.length); // length of the string
console.log(str.toUpperCase()); // convert to uppercase
console.log(str.toLowerCase()); // convert to lowercase
console.log("Trimmed value is:" + str.trim()); // removes space from the string
console.log(str.split("")); // split the string into array

// Template literals in JS (Meaning of literals: Literals are constant values assigned to constant variables. Template is basically a blueprint that enables dynamic use of something which here is in the form of '&{}'. Since it can become the literal part of a string i.e., string is a literal as if I write 'My name is: ' then this is not going to change. So, as template provided a template XD, to be used in a string literal it is called template literal.)
/* A way to have embedded expressions in strings 
    why do we need them: see the example below:
*/

let obj = {
    name: "Ujjwal",
    age: 25,
    address: "Kathmandu",
}

console.log("Normal: My name is " + obj.name + " and I live in " + obj.address);
console.log(`Using template literal: My name is ${obj.name} and I live in ${obj.address}!`);

console.log(`We can also do ${1+2+3}`);

// String interpolation (Interpolation: the addition of something different in the middle of a text)

/* In the above example, we are able to include variables in the middle of a string and this phenomenon is called string interpolation! */

// More string methods:

console.log(`${obj.name.slice(2,5)}`);
console.log(`${obj.name.slice(2)}`);

let str2 = "karki";

// console.log(`${obj.name.concat(str2)}`);
console.log(`${obj.name + str2}`);

console.log(`${obj.name.replace("Ujjwal", "Sharuk")}`);
console.log(`${obj.name + str2}`);

console.log(`${obj.name.charAt(0)}`);

/*----------------------------------Lecture 3 Done--------------------------------- */

