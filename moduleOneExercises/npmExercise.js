// Exercise – use npm site
// Packages you download which are specific to your
// application, and not global. Once installed, they need to be
// “required”, meaning they need to be made available to the
// application.
// This is done by “requiring” it at the top. This is done to save
// memory and make the application more efficient, as you
// may actually get a large package, but only use a small part
// of it. Try the following code.


var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result); // Score: -2, Comparative: -0.666


// Go on npm and look for the
// Sentiment package, you should
// get this.
// One key aspect is the weekly
// downloads, normally good
// packages will have more than 10K.
// To use this package, simply copy
// the install string npm i sentiment
// and run it in your terminal in the
// project folder.

// Exercise
// Try to make a function to analyse any sentence!