var food = ['bacon', 'corn', 'ham', 'sausage'];

// array values are retrieved by index, not name
console.log(food[2]);
console.log(food.length);

// loop over an array
for(var i=0; i<food.length; i++){
    console.log(i, food[i]);
}

console.log('----------');

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

let numbers = [10, 32, 53, 99, 60];
console.log(numbers.toString()); // comma separated list
console.log(numbers.join('~')); // to use a different separator
