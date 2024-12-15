// LECTURE 7: DOM (Document Object Model) Part 2

/* ATTRIBUTE */
/*
    1. Getting attribute: getAttribute(attr) 
    2. To set attribute: setAttribute(attr, value)
 */

// Getting attribute
let div = document.querySelector('div')
let id = div.getAttribute('id')
console.log(id);

// Setting attribute
div.setAttribute('id','changedFirstDiv')
id = div.getAttribute('id')
console.log(id);

/* STYLE */

/*
    1. node.style 
*/

div.style.backgroundColor = 'purple'

let secdiv = document.getElementById('seconddiv')
secdiv.style.backgroundColor = 'green'

/* INSERTING ELEMENTS */

// First step is to create the element: let el = document.createElement('(tagname) like div')

/*
Second step is to add that element to the HTML document using methods like:

    1. Add element to the end of node (inside): node.append(el)
    2. Add at the start of the node(inside): node.prepend(el)
    3. Add before the node (outside): node.before(el)
    4. Add after the node (outside): node.after(el)
 */


let newele = document.createElement('button')

newele.innerText = 'Click Me!'

newele.style.color = 'red'
// secdiv.append(newele)
// secdiv.prepend(newele)
// secdiv.before(newele)
secdiv.after(newele)

/* DELETE ELEMENT */

// 1. Remove the node: node.remove()

let para = document.querySelector('p')

// Comment and uncomment this to see the effect
para.remove()

// There are other methods as well like: appendChild() and removeChild()

/*
Question: Create a <p> tag in html, give it a class and some styling.
Now, create a new class in CSS and try to append this class to the <p> element.

Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList 
*/

let newp = document.createElement('p')

// Creating a class for JS created element
newp.className = 'paraClass'

newp.innerText = 'This is a paragraph created using JS'
newp.style.backgroundColor = 'pink'

// If we use .setAttribute to add class from CSS then our initially created class properties get overwritten by this new class

/* 
    ClassList provides us the list of the classes associated with an element.
    We can do the following to check classes associated to newp element. 
*/

console.log(newp.classList);

//Adding a new class of CSS to newp using ClassList.add() method

newp.classList.add('newParaClass')
console.log(newp.classList);

let body = document.querySelector('body')

body.append(newp)

