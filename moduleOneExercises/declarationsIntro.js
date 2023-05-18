// Basics of Declaration

// Let’s begin with our bricks, variables, and how they differ
// In JavaScript, the process of creating a variable is called
// declaration. We have three different primitives that you can use.

var carName;
let carName;
const carName = “constant”;

// After being declared, the variable has no value, which technically
// we refer to as being undefined.




// Understanding Var

// • In the world before ES6, we would have only used var as our preferred variable.
// If you had ever got lost in the “this” dilemma, you would understand the pain of
// every developer. So to understand things better, let’s understand var better.

// • Scope of var:
// ▪ The term "scope" refers to the area in which these variables can be used.
// Globally scoped or function/locally scoped var declarations exist.
// ▪ When a var variable is declared outside of a function, its scope is global.
// Any variable declared with var outside of a function block is available for
// use across the entire window.
// ▪ When a variable is declared within a function, it is function scoped. This
// indicates it's available and can only be used within that function.


// Understanding Let

// • For variable declaration, let is currently the preferred method. It's not
// surprising because it's a step forwards from var declarations. It also solves the
// var issue that we just discussed.
// • Let is block scoped. A block is a section of code that is bounded by {}. Curly
// braces are the home of a block. Anything enclosed in curly brackets is
// considered a block.
// • As a result, a variable declared with let can only be used within that block.
// Allow me to illustrate this with an example:


let helloText = "say Hi";
let check = 4;
if (check > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
} // hello is not defined


// Understanding Const
// • Constant values are maintained for variables declared with the const
// keyword. Let declarations and const declarations have some similarities.
// • const declarations are block scoped. Const declarations, like let declarations,
// are only accessible within the block in which they were declared.
// • const cannot be updated or re-declared. This signifies that a variable declared
// with const has the same value throughout its scope. It can't be changed or
// declared again. 

// So, if we declare a variable with const, we can neither do this:
const helloText = "say Hi";
helloText = "say Hello instead"; //error: Assignment to constant variable

// • Nor this:
const helloText = "say Hi";
helloText = "say Hello instead"; //error: Assignment to constant variable

const helloText = "say Hi";
const helloText = "say Hello instead";// error: Identifier 'greeting' has already been declared