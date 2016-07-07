"use strict";

let numbers = [2, 4, 7, 9];

// simplified iterator
numbers.forEach(x => console.log(x));

console.log('--------------------');

// simplified if statement
numbers.forEach(x => console.log((x % 2 == 0 ) ? 'even': 'odd'));

console.log('--------------------');

// iterator
let iter = numbers[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);

console.log('--------------------');

// entries (return position and value of each item)
let ent = numbers.entries();
console.log(ent.next().value);
console.log(ent.next().value);
console.log(ent.next().value);

console.log('--------------------');

// keys (return keys of array and done which will be true when iteration is complete)
let keyz = numbers.keys();
console.log(keyz.next());
console.log(keyz.next());
console.log(keyz.next());
console.log(keyz.next());
console.log(keyz.next());
