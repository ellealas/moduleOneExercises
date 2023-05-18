// Functions

// We encountered functions before, but now
// we may need to spend more time on them.
// A function is a piece of reusable code with
// the following, it has a name, it has a
// signature and it has a body. The signature
// and body can be empty, but it requires a
// name.
// A function is stored in memory, therefore it is
// always initiated. Calling this function will
// simply output to the console “Hello”


function ThisIsTheName(Signature){

Body
}
function SayHello(){
    console.log('Hello')

}


// The signature is the arguments
// that the function will use,
// arguments are INPUTS, and are
// passed into the body.
// Within the body, we have the
// core logic.

function Sum(A,B){
    console.log(A+B)
}


// This means that the function is
// expecting two inputs, and it
// will output to the console, the
// sum of these two.
// A function must be called, and
// we would call it like this

Sum(5, 1)

// This will output 6 to the console.