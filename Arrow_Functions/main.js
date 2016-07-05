"use strict";

var circleArea1 = function (r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};

let circleArea2 = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
    return area;
};

let circleArea3 = (r) => 3.14 * r * r;

console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));
