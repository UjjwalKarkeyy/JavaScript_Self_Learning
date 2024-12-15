/*
------------------------------LECTURE 8: EVENTS IN JAVASCRIPT------------------------------
    -> The change in the state of an object is known as an event.
    -> Events are fired to notify code of 'Interesting changes' that may affect code execution
    -> Examples:
        1. Mouse Event (click, double click, etc.)
        2. Keyboard events (keypress, keyup, keydown) 
        3. Form events(submit, etc.) 
        4. Print event and many more
*/

// We can either handle events within html using in-line event handler
// Or we can use JS's event handling 

/* Using JS events handler */

let btn1 = document.querySelector('#btn1');

// btn1.onclick = (e) =>{

//     console.log('btn1 was clicked!');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// };

let div = document.querySelector("div");

// div.onmouseover = () =>{
//     console.log('Mouse is over the div');
// }

// If we have both in-line and JS events handler, priority is given to JS's

/* EVENT OBJECT */

/*
    It is a special object that has details about the event.
    All event handlers have access to the event object's properties and methods.

    node.event = (e) =>{   // Here, 'e' is referring to the event object
        ---handling event---
        }

    e.target, e.type, e.clientX, e.clientY, etc.
 */

/* EVENT LISTENER */

/*
    Such functions which keep listening for event. For one event we can create multiple functions
    Syntax:

        node.addEventListener(event, callback); // Here, callback can also be called event handler

        node.removeEventListener(event, callback);
 */

// Creating btn1 event again but now using event listener

btn1.addEventListener('click',(e)=>{
    console.log('btn1 was clicked!');
    console.log(e.type);
    
})

btn1.addEventListener('click',(e)=>{
    console.log('btn1 was clicked by handler 2!');
})

const handler3 = () => {
    console.log('btn1 was clicked by handler 3!');
}

btn1.addEventListener('click', handler3)

// Removing an event listener

btn1.removeEventListener('click',handler3)

/* Question: Create a dark/light mode toggle button */




