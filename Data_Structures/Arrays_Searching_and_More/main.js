"use strict";

let items = [40, 68, 58, 12, 80, 37, 13, 63, 42, 3, 58];
console.log(items.indexOf(12)); // 3
console.log(items.indexOf(99)); // -1 (not found)
console.log(items.indexOf(58)); // 2
console.log(items.lastIndexOf(58)); // 10

console.log('--------------------');

let numbers = [10, 32, 53, 99, 60];
console.log(numbers.toString()); // comma separated list
console.log(numbers.join('~')); // to use a different separator
