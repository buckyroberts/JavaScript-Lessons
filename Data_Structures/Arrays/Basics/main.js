// to declare and initialize an array, you can pass all the items in as a list
var food = ['bacon', 'corn', 'ham', 'sausage'];

// array values are retrieved by index (starting at 0), not name
console.log(food[2]);
console.log(food.length);

// you can iterate over an array to access each individual element
for(var i=0; i<food.length; i++){
    console.log(i, food[i]);
}

food.forEach(function (index, item) {
    console.log(item, index);
});

console.log('----------');

// add new items to end of array
food.push('tuna');
console.log(food);

// remove item from the end of array
var lastItem = food.pop();
console.log(lastItem);
console.log(food);

console.log('----------');

// add item to beginning of an array
food.unshift('apples');
console.log(food);

// remove item from the beginning of an array
var firstItem = food.shift();
console.log(firstItem);
console.log(food);

// remove item by index position
var pos = 1;
food.splice(pos, 1);
console.log(food);

console.log('--------------------');

var numbers = [10, 32, 53, 99, 60];
console.log(numbers.toString()); // comma separated list
console.log(numbers.join('~')); // to use a different separator
