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

class Programmer extends Person{

    constructor(name, age, weight, language){
        super(name, age, weight);
        this.language = language;
    }

    displayAge(){
        console.log(this.age);
    }

    displayLanguage(){
        console.log(this.language);
    }

}

let sally = new Person('Sally Jones', 21, 89);
sally.displayWeight();

console.log('----------');

let bucky = new Programmer('Bucky Roberts', 87, 250, 'JavaScript');
bucky.displayWeight();
bucky.displayAge();
bucky.displayLanguage();
