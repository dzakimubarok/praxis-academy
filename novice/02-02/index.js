let R = require('ramda');
// let double = x => x * 2;

// let a = R.map(double, [1, 2, 3]); //=> [2, 4, 6]

// let b = R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}

// console.log(a,b)

let a = R.reduce(R.subtract, 0, [1, 2, 3, 4])
console.log(a)

let _U = require('underscore');


let map = require('underscore/cjs/map.js');
