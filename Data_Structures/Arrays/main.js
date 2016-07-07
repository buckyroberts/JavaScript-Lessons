var food = ['bacon', 'corn', 'sausage'];

// array values are retrieved by index, not name
console.log(food[2]);
console.log(food.length);

console.log('----------');

// loop over an array
for(var i=0; i<food.length; i++){
    console.log(i, food[i]);
}

console.log('----------');

food.forEach(function (index, item) {
    console.log(item, index);
});


// add new items to an array
food.push('tuna');
console.log(food);

console.log('----------');

// remove item from the end of an array
var lastItem = food.pop();
console.log(lastItem);
console.log(food);

console.log('----------');

// remove item from the beginning of an array
var firstItem = food.shift();
console.log(firstItem);
console.log(food);

console.log('----------');

// add item to beginning of an array
food.unshift('apples');
console.log(food);

console.log('----------');

// remove item by index position
var pos = 1;
food.splice(pos, 1);
console.log(food);
