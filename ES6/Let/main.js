"use strict";

let movie = 'Good Will Hunting';

function theNotebook() {
    let movie = 'The Notebook';
    return movie;
}

console.log(movie); // Good Will Hunting
console.log(theNotebook()); // The Notebook
console.log(movie); // Good Will Hunting

function buckysFunction() {
    let isHorse = true;
    let saying = 'Bacon is good';
    console.log('\nBefore if:', saying);

    if(isHorse){
        let saying = 'I am a horse';
        console.log('Inside if:', saying);
    }

    console.log('After if:', saying);
}

buckysFunction();
