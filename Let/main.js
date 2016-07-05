"use strict";

let movie = 'Good Will Hunting';

function theNotebook() {
    let movie = 'The Notebook';
    return movie;
}

function randomFunction() {
    let isFan = true;
    let phrase = 'Bacon is good';
    console.log('\nBefore if:', phrase);

    if(isFan){
        let phrase = 'I am a horse';
        console.log('Inside if:', phrase);
    }

    console.log('After if:', phrase);
}

console.log(movie); // Good Will Hunting
console.log(theNotebook()); // The Notebook
console.log(movie); // Good Will Hunting

randomFunction();
