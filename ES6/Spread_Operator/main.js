"use strict";

function addNumbers(a, b, c){
    console.log(a + b + c);
}

// expand array into function arguments
var nums = [3, 4, 5];
addNumbers(...nums);

// used to combine arrays
var meats = ['bacon', 'ham'];
var food = ['apples', ...meats, 'kiwi', 'rice'];
console.log(food);
