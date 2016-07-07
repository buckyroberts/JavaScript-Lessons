"use strict";

let a = [-5, -4, -3];
let b = 0;
let c = [12, 13, 14];

// concat() method is used to join two or more arrays.
let result = a.concat(b, c);
console.log(result);

console.log('--------------------');

let numbers = [2, 4, 7, 8, 9];

let isEven = (num) => {
    if(num % 2 == 0){
        console.log(num, 'is even');
        return true;
    } else {
        console.log(num, 'is odd');
        return false;
    }
};

// loop until function returns "false"
numbers.every(isEven);

console.log('--------------------');

// loop until function returns "true"
numbers.some(isEven);

console.log('--------------------');

// loop through all items
numbers.forEach(isEven);

console.log('--------------------');

// map() returns a new array with the results
var buckysMap = numbers.map(isEven);
console.log(buckysMap);

console.log('--------------------');

// filter() returns a new array with elements that the function returned "true"
var buckysFilter = numbers.filter(isEven);
console.log(buckysFilter);
