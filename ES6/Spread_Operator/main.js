"use strict";

function addNumbers(a, b, c){
    console.log(a + b + c);
}

var nums = [1, 2, 3];
addNumbers(...nums);
