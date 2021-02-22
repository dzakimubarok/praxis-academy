// function canYouSpotTheProblem() {
//   "use strict";
//   for (counter = 0; counter < 10; counter++) {
//     console.log("Happy happy");
//   }
// }

// canYouSpotTheProblem();

// function Person(name) { this.name = name; } // tanpa menggunakan strict mode
// let ferdinand = Person("Ferdinand"); // oops
// console.log(name);

// dibawah ini menggunakan strict mode
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined
