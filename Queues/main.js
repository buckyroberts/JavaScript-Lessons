"use strict";

function Queue() {
    let items = [];

    // add element (in queue we can only add items to end)
    this.enqueue = function (element) {
        items.push(element);
    };

    // remove and return first item (index[0])
    this.dequeue = function () {
        return items.shift();
    };

    // return first item in the queue
    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };
    
    this.print = function () {
        console.log(items.toString());  
    }

}

let buckysQueue = new Queue();

buckysQueue.enqueue('bacon');
buckysQueue.enqueue('tuna');
buckysQueue.print();

console.log(buckysQueue.front());
console.log(buckysQueue.size());
