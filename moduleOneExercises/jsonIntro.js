// Basics of JSON

// • JSON stands for JavaScript Object Notation and is a data exchange format. JSON is
// derived from the JavaScript programming language, but it may be used by a wide
// range of languages, including Python, Ruby, PHP, and Java. JSON is pronounced
// similarly like the name "Jason.“
// • When used alone, JSON utilises the .json extension. It can occur inside quotes as a
// JSON string or as an object assigned to a variable when defined in another file type
// (such as .html). This format is simple to send from a web server to a client or
// browser.
// • JSON is an excellent alternative to XML since it is more legible and requires less
// formatting.


// Creating your own JSON
// • A JSON object is a data format that uses curly brackets to represent key-value pairs. When
// working with JSON, you'll most commonly see JSON objects in.json files, but they can also
// exist in the context of a program as a JSON object or string.
// • A JSON object looks something like this:

{
    "first_name": "Sammy",
    "last_name": "Shark",
    "age": 25,
    "followers": 987
}

// • Although this is a very small example, and JSON can be many lines long, it demonstrates how

// the format is often set up with two curly braces (or curly brackets) on either end, and key-
// value pairs filling the space in between. The majority of data in JSON is wrapped in a JSON

// object.

// Displaying JSON data
// • In JavaScript, JSON data is generally

const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987
}
console.log(user.first_name);
console.log(user.age)

// Displaying JSON data (continued)
// • To access data from JSON, we may also utilise square bracket syntax. To do so, we'd put the
// key inside square brackets in double quotations.
const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987
}
console.log(user["first_name"]);
console.log(user["age"])