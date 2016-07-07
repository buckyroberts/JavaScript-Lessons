"use strict";

let items = [1, 10, 17, 18, 2, 7, 3, 19, 14, 5];
console.log(items.reverse());

// not what we wanted, because it sorts the numbers as if they are all strings
console.log(items.sort());

console.log('--------------------');

/*
 * When the sort() method compares two values, it sends the values to the compare function, and sorts the values
 * according to the returned (negative, zero, positive) value.
 *
 * EXAMPLE:
 * When comparing 40 and 100, the sort() method calls the compare function(40,100)
 * The function calculates 40-100, and returns -60 (a negative value)
 * The sort function will sort 40 as a value lower than 100
 * */
items.sort(function (a, b) {
    return a - b;
});
console.log(items);

console.log('--------------------');

// reverse sort
items.sort(function (a, b) {
    return b - a;
});
console.log(items);

console.log('--------------------');

// can also do this
function compare(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
let items2 = [1, 10, 17, 18, 2, 7, 3, 19, 14, 5];
console.log(items2.sort(compare));

console.log('--------------------');

// custom sorting
let friends = [
    {name: 'Bucky', age: 50},
    {name: 'Sally', age: 40},
    {name: 'Tommy', age: 70},
    {name: 'Wendy', age: 20},
    {name: 'Chris', age: 60}
];
function compareAges(a, b){
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}
console.log(friends.sort(compareAges));
