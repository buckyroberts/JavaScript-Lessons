"use strict";

/*
 * Note: the last node from the list always has "null" as the next element
 * */

function LinkedList() {

    // item we are adding to the list
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    // reference for the first node
    let head = null;
    let length = 0;

    // add item to end of list
    this.append = function (element) {
        let node = new Node(element), current;

        // first node on list
        if (head === null) {
            head = node;
        } else {
            current = head;

            // loop through list until we find the last item
            while (current.next) {
                current = current.next;
            }

            // get last item and assign next to node to make the link
            current.next = node;
        }
        length++;
    };

    // insert new item at specified position
    this.insert = function (position, element) {

        // check if position is out of bounds, if so then return false (to indicate that no item was added to the list)
        if (position >= 0 && position <= length) {
            let node = new Node(element), current = head, previous, index = 0;

            // add on the first position
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    // remove item from specified position
    this.removeAt = function (position) {

        // check for out of bounds values (verify position is valid)
        if (position > -1 && position < length) {
            let current = head, previous, index = 0;

            // to remove first item, just point the head to the second element in the list
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                // link previous with currents next: skip it to remove
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }

    };

    // remove item from the list
    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    // return index of element in the list (if not in list return -1)
    this.indexOf = function (element) {
        let current = head, index = -1;
        while(current){
            if(element===current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    // true is list is empty
    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    // overwrite toString since we are using Node class as items
    this.toString = function () {
        let current = head, string = '';
        while (current) {
            string += current.element + (current.next ? ' --next--> ' : '');
            current = current.next;
        }
        return string;
    };

    this.getHead = function () {
        return head;
    };

}

let list = new LinkedList();
list.append(5);
list.append(10);
list.append(17);
list.insert(2, 99);
list.append(20);
list.append(29);

console.log(list.indexOf(5));
console.log(list.getHead());
console.log('----------');
console.log(list.toString());
