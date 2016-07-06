"use strict";

function Set() {
    let items = {};

    // check if value exists in the set, if not add it and return true
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    // verify that item exists in set, if so then remove it from set
    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    // hasOwnProperty() indicates whether the specified object has the property or not
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };

}

let buckysSet = new Set();

buckysSet.add(1);
buckysSet.add(2);
buckysSet.add(3);
buckysSet.add(66);
buckysSet.add(87);
console.log(buckysSet.size());
console.log(buckysSet.values());

buckysSet.delete(3);
console.log(buckysSet.values());
