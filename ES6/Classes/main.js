"use strict";

class Person{

    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight(){
        console.log(this.weight);
    }

}

let bucky = new Person('Bucky', 87, 6650);
let sally = new Person('Sally', 21, 89);

bucky.displayWeight();
sally.displayWeight();
