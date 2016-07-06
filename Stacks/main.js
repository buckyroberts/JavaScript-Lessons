"use strict";

function Stack() {
    let items = [];

    // remove all items in the stack
    this.clear = function () {
        items = [];
    };

    // true if stack is empty
    this.isEmpty = function () {
        return items.length == 0;
    };

    // view last item added to stack
    this.peek = function () {
        return items[items.length - 1];
    };

    // display all items
    this.print = function () {
        console.log(items.toString());
    };

    // add item to end of stack
    this.push = function (element) {
        items.push(element);
    };

    // remove last item from stack
    this.pop = function () {
        return items.pop();
    }

}

let buckysStack = new Stack();
console.log(buckysStack.isEmpty());

buckysStack.push(87);
buckysStack.push(71);

console.log(buckysStack.peek());
buckysStack.push(29);
buckysStack.print();
