"use strict";

/*
 * generators just don't execute all the code at once like normal functions
 * pauses once it gets to "yield" keyword, doesn't run again until next() is called
 * next() basically means "run this function until you get to a yield statement"
 * */

function* sampleGenerator() {
    yield 'apples';
    yield 'bacon';
    console.log('ok, this is the line after corn...');
    yield 'corn';
}

let sample = sampleGenerator();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);


console.log('--------------------');


function* getNextId() {
    let id = 0;
    while (id < 3)
        yield id++;
}

let createUser = getNextId(5);
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('ok, let me go do something else now...');
console.log(createUser.next().value);
console.log(createUser.next().value); // undefined since while loop has max of 3
