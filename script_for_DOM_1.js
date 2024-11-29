// LECTURE 6: DOM (Document Object Model)

// Window Object
/*
 The window object represents an open window in a browser. It is a browser's object (not JS's) & is automatically created by browser.
 It is a global object with lots of properties and methods.
*/

// DOM
/*
    When a page is loaded, the browser creates a Document Object Model of the page.
    Automatically the elements of HTML are converted into object in JS which we call document.

    We can use document using window as document is also a part of window: window.document
    * console.dir(window.document) to print the document itself.

    When a page is loaded, the browser automatically creates the DOM object in the form of tree something like this: windows -> document -> html

    If we write our script tag before the body tag then the document object's body will show null as it didn't get a chance to load the body part as it was called before the body tag. That is the reason why it is always a good practice to write the script tag at the very end of the body tag.
 */

/* Accessing html element */

// Using id
let heading = document.getElementById('heading'); // Returns the value of h1
console.dir(heading) // If no id, the it will return null

// Using class
let className = document.getElementsByClassName('container')
console.dir(className) // If no such class then it will return an empty array however, we don't call it array, instaed we call it html collection.

// Using tag name
let parahs = document.getElementsByTagName('p')
console.dir(parahs) // If no such tag then it will return an empty array

// Using query selector: Returns node list of the DOM tree
let firstEle = document.querySelector('p') // Selects first element
console.dir(firstEle)

// let allEle = document.querySelectorAll('p') // Selects all elements
// console.dir(allEle)

let allEle = document.querySelectorAll('.container') // Selects class
console.dir(allEle)

let allId = document.querySelector('#heading') // Selects id
console.dir(allId)

/* Checking and changing the values using DOM properties  

    - tagName: returns tag for element nodes
    - innserText: returns the text content of the element and all its children
    - innerHTML: returns the plain text or HTML contents in the element
    - textContent: returns textual content even for hidden elements
*/

// Use this in console
firstEle.tagName

/* Three nodes in DOM tree: text node, comment, and then elements node */


let div = document.querySelector('.ClassOne')
console.log(div) // Returns the text content of the div

console.log(div.innerHTML) // Returns the html tags as well as the text content of div and its childrens

console.log(div.innerText)

// To set the text value of something in html
div.innerHTML = '<div> I am newly added </div>'
console.log(div)

// Text-content: we can use text content to assign as well as for some tricky things like
let hiddenTextContent = document.querySelector('#hiddenTextContent')

console.log(hiddenTextContent.textContent); // Although the text is hidden in html, it can be seen uisng text content

console.log(document.querySelector('h2'));

let appendApna = document.querySelector('h2')
appendApna.textContent += " from Apna college"
console.log(appendApna);

let addDiv = document.querySelectorAll('.box')

let indx = 1;
for(div of addDiv)
{
    div.innerText = `Changed num ${indx}`;
    indx++;
}


