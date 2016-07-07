"use strict";

function circleArea(r) {
    var PI = 3.14;
    return PI * r * r;
}

// we can now leave out the "function" keyword
let circleArea1 = (r) => {
    const PI = 3.14;
    return PI * r * r;
};

// parenthesis are optional is there is one parameter
// we can also leave out the curly braces to return a value directly (without needing multiple statements)
let circleArea2 = r => 3.14 * r * r;

console.log(circleArea(7));
console.log(circleArea1(7));
console.log(circleArea2(7));
