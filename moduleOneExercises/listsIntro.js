// Lists
// When we talk about lists in JavaScript we are majorly referencing arrays. Arrays
// are a form of ordered lists when it comes to JavaScript. Each value is referred to
// as an element, and it is identified by an index.

// Lists (continued)
// A JavaScript array has the following characteristics:
// • First, an array can include values of many sorts. You can have an array that
// stores numeric, string, and boolean data, for example.
// • Second, the length of an array is auto-growing and dynamically sized. To put
// it another way, you don't have to declare the array size in advance.

let scores = new Array();
// or
let scores = [element1, element2, element3, ...];

// Lists (continued)
// Accessing JavaScript array elements
// JavaScript arrays are indexed from ZERO. To put it another way, an array's first
// element starts at index 0, the second member at index 1, and so on.
// We specify an index in square brackets [] to access an element in an array:
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'




// Basic operations on arrays


    // push()
// Adding an element to the end of an array: the push() method is used to ADD an
// element to the END of an array.

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
seas.push('Red Sea');
console.log(seas);

    // unshift()
// Adding an element to the beginning of an array: The unshift() operator is used
// to ADD an element to the BEGINNING of an array.

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
seas.unshift('Red Sea');
console.log(seas);

    // The pop()
// Removing an element from the end of an array: The pop() command is used to
// REMOVE an element from the END of an array.

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();
console.log(lastElement);
console.log(seas);

    // The shift()
// Removing an element from the beginning of an array: The shift() is used to
// remove an element from the beginning of an array.

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();
console.log(firstElement);
console.log(seas);




    //indexOf()
// Lists (continued)
// Basic operations on arrays
// Finding an index of an element in the array: The indexOf() function is used to
// find the index of an element.
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('North Sea');
console.log(index); // 2

    //Array.isArray()
// Lists (continued)
// Basic operations on arrays
// Check if a value is an array: To check if a value is an array, we use Array.isArray()
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(Array.isArray(seas)); // true