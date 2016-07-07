"use strict";

class Person{

    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight(){
        console.log(this.weight)
    }

}

let bucky = new Person('Bucky Roberts', 87, 250);
bucky.displayWeight();
