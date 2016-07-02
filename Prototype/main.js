// We could create a function inside Person(), but then we would have a copy of that function for every instance
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// Instead we can use prototype to load the function only once in memory (no matter how many Person objects we have)
Person.prototype.getName = function () {
    return this.firstName + " " + this.lastName;
};

var bucky = new Person('Bucky', 'Roberts');
var emily = new Person('Emily', 'Jones');

console.log(bucky.getName());
console.log(emily.getName());
