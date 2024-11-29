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

// Template literals in JS (Meaning of literals: Literals are constant values assigned to constant variables. Template is basically a blueprint that enables dynamic use of something which here is in the form of '${}'. Since it can become the literal part of a string i.e., string is a literal as if I write 'My name is: ' then this is not going to change. So, as template provided a template XD, to be used in a string literal it is called template literal.)
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

// Lecture 4: Arrays in JavaScript

// We can add various data types in the array of JS

let random_array = [1,2,'ujjwal',4.5,true]

console.log(random_array);
console.log(random_array.length);

// Array is of type object. Instead of key value pair like that of object, we have index that acts as the key
console.log(typeof random_array);

// Arrays are mutable
random_array.push(10);
console.log(random_array);

/* Looping over an array */

// Try doing this using in, it will instead print the index of the random_array. This goes to show the difference between 'in' and 'of' in for loop.
for(let i of random_array)
{
    console.log(i);
}

/* ARRAY METHODS
    push(): add to end
    pop(): delete from end and return
    toString(): converts array to string. No change in ori array. Returns a new string.
    concat(): joins multiple arrays and returns result
    unshift(): add to start
    shift(): delete from start and return
    slice(): returns a piece of the array. No change in ori array
    Splice(): change original array (add, remove, replace) -> (stardingIndx, number of ele to delete, newEletoAdd)
*/

new_rand_array = ['thor','spiderman','ironman']

let heroes = new_rand_array.concat(random_array)
console.log(heroes);

heroes.unshift('antman')
console.log(heroes);

let deleted_hero = heroes.shift()
console.log(deleted_hero);

console.log(heroes.slice(1,3));

heroes.splice(2,1,'MotuPatlu') // No delete elements passed then it will delete every ele from starting index

console.log(heroes);

let test
console.log(typeof test);

/*----------------------------------Lecture 4 Done--------------------------------- */

// LECTURE 5: Functions and Methods

function firstfunction(msg)
{
    console.log(msg);
}

// let msgs = prompt("Enter your msg: ")
// firstfunction(msgs)

// Arrow functions: Compact way of writing a function
/*
Syntax of writing an arrow function:

const functionName = (param1, param2, ...) => {
        [do some work]
    };
*/

let arrow_message = (msg) =>
{
    console.log(msg);
};

// console.log(arrow_message);  //This will give the definition of the function. To make the function do the work, we will have to call the function name and also pass the arguments.

arrow_message("Hello")

// We can also store any value into the variable of an arrow function as it is simply a variale. For example let's take the above array function's variable:

arrow_message = 'Changed'
console.log(arrow_message);

// forEach loop in arrays

/*
Syntax for 'forEach':

    arr.forEach(callBackFunction)

    -> A callBackFunction is a function that is passed as an argument to another function.
 */

// We can either make the call back func an arrow function which is considered to be the trend or a simple function as well
heroes.forEach((val)=>{  
  console.log(val);
})

/*By default, call back function takes three parameters
    1. Value
    2. Index
    3. Array
*/

heroes.forEach((val,indx)=>{
    console.log("Val and indx: "+val,indx);
})

heroes.forEach((val,indx, arr)=>{
    console.log("Val, indx, and arr: "+val,indx, arr);
})

// Higher order functions: They are such functions which takes an argument as a function or returns a function as an answer.

/* SOME MORE ARRAY METHODS:
    1. Map
    -> Creates a new array with the results of some operation. The value its callback returns are used to form new array.

    Syntax:

        arr.map(callbackFunc(val,indx,arr))

    This is similar to forEach however this returns a new array.

    2. Filter
    -> Creates a new array with all elements that pass the test implemented by the provided function.

    3. Reduce
    -> Performs some operations & reduces the array to a single value. It returns that single value.

    *accumulator: result

*/

let newMapArr = heroes.map((val)=>{
    return val;
})

console.log("Mapped array is: "+newMapArr);

let filterArr = heroes.filter((val)=>{
    return val.length>5;
})

console.log(`Filter array is: ${filterArr}`);

let numArr = [1,2,3,4]

const res = numArr.reduce((res,current)=>{
    return res>current ? res: current;
})

console.log(res);

// Q1: We are given array of marks of students. Filter out the marks of students that score 90+.

let stuMarks = [80,10,95,87,91,65,92,100]

let highScore = stuMarks.filter((val)=>{
    return val>90;
})

console.log("Marks that are above 90 are: "+highScore);

let questionInput = prompt("Enter a number: ")
let questionArr = []
for(let i = 0; i < questionInput; i++)
{
    questionArr[i] = i*2;
}

console.log(questionArr);

let questionSum = questionArr.reduce((res,current)=>{
    return res+current;
})

console.log("Sum is: " + questionSum);

let questionMul = questionArr.reduce((res,current)=>{
    return res*current;
})

console.log("Product is: "+questionMul);

/*----------------------------------Lecture 5 Done--------------------------------- */
// LECTURE 6: DOM (Document Object Model)
// Available in script_for_DOM.js

