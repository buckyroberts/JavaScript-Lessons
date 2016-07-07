// With closures, we can access variables that would otherwise be out of scope

function Person(pName){
    var name = pName;

    this.getName = function () {
        return name;
    }
}

var bucky = new Person("Bucky Roberts");

console.log(bucky.name); // undefined (out of scope)
console.log(bucky.getName()); // Bucky Roberts
