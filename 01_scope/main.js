
/********** Scope **********/

// each function can only access its own scoped variables
function one() {
    var a = 5;
    console.log(a);
}

function two() {
    var a = 20;
    console.log(a);
}

one(); // 5
two(); // 20


/********** Nested scope **********/

function outer() {
    var a = 10;

    // inner() has access to a since it is nested inside (part of) outer()
    function inner() {
        var b = 27;
        console.log(a + b);
    }

    inner();

    // can only access a
    console.log(a);

}

outer();
