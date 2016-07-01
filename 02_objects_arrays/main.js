
/********** Objects **********/

// objects are composed of multiple names and values
var person = {
    name: "Bucky",
    age: 87
};
console.log(person.name); // preferred
console.log(person['age']); // also valid


/********** Arrays **********/

// array values are retrieved by index, not name
var food = ['bacon', 'tuna', 'corn'];
console.log(food[2]);


/********** Equality **********/

var a = '26';
var b = 26;

console.log(a==b); // true (only checks value)
console.log(a===b); // false (compares type as well)
