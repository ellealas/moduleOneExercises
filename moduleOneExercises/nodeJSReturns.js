// Functions - returns

// Understanding the return in a function is not
// always easy. Return means “return
// something to whoever called it”. For
// example, let’s assume the sum function

function Sum(A,B){
    console.log(A+B)
}

// This function does not return anything. It just
// does its job and whoever called it has no
// notion of whether or not the function has
// completed or not or if it was successful.
// Also, we normally run a function to “obtain”
// something back, not just to run something
// somewhere else.

// Let’s slightly modify the body
// of our previous function.

function Sum(A,B){
    console.log(A+B)
}

console.log(Sum(5,1))