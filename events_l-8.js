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

btn1.onclick = (e) =>{

    console.log('btn1 was clicked!');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

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


