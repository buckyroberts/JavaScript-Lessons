"use strict";

function Stack() {
    let items = [];

    // remove all items
    this.clear = function () {
        items = [];
    };

    // true if stack is empty
    this.isEmpty = function () {
        return items.length == 0;
    };

    // return last item added
    this.peek = function () {
        return items[items.length - 1];
    };

    // remove last item from end
    this.pop = function () {
        return items.pop();
    };

    // display all items
    this.print = function () {
        console.log(items.toString());
    };

    // add item to end
    this.push = function (element) {
        items.push(element);
    };

    // get size of stack
    this.size = function () {
        return items.length;
    };

}

let buckysStack = new Stack();
console.log(buckysStack.isEmpty());

buckysStack.push(87);
buckysStack.push(29);
buckysStack.push(71);
buckysStack.print();

console.log('--------------------');

console.log(buckysStack.peek());
console.log(buckysStack.size());

console.log('--------------------');

console.log(buckysStack.isEmpty());
buckysStack.clear();
console.log(buckysStack.isEmpty());
