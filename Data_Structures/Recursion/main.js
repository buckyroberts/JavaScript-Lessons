"use strict";

// if number is 1 or greater, this same function gets called again
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else
        return (num * factorial(num - 1));
}

let result = factorial(5);
console.log(result);
