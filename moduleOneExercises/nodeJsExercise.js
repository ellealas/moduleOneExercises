// NodeJS - exercise

// Use the learnings from this lesson to design some very simple functions.

// Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the
// value and output it to the screen.

// Create a function that takes the name of a person as an argument, and prints
// out “Hello Name”to the console. Hint: search online on how to concatenate
// two strings.

//Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the value and output it to the screen.

function Sum(A,B){
    return(A+B)
}
console.log(Sum(5,1))

function Subtract(A,B){
    return(A-B)
}
console.log(Subtract(5,1))

function Divide(A,B){
    return(A/B)
}
console.log(Divide(5,1))

function Multiply(A,B){
    return(A*B)
}
console.log(Multiply(5,1))

//STRING CONCATENATION - APPENDING TWO OR MORE STRINGS USING +
function greeting(name){
    greet = 'Hello ' + name
    console.log(greet)
}
greeting('Rochelle')