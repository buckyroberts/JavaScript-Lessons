"use strict";

let numbers = [2, 4, 7, 9];

// from() creates a new array from an existing one
let numbers2 = Array.from(numbers);
console.log(numbers2);

// fill() fills an array with specified value
let bacon = [1, 2, 3, 4, 5];
bacon.fill(0);
console.log(bacon);

// we can pass in the starting index as a second parameter
let tuna = [1, 2, 3, 4, 5];
tuna.fill(68, 2);
console.log(tuna);


