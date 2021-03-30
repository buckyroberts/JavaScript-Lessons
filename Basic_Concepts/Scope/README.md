![JavaScript Lessons](http://i.imgur.com/BgUMUGU.png)

# Scope
  
According [Wikipedia](https://en.wikipedia.org/wiki/Variable_%28computer_science%29#Scope_and_extent):  

>"Scope is an important part of the name resolution of a variable. Most languages define a specific scope for each variable (as well as any other named entity), which may differ within a given program. The scope of a variable is the portion of the program code for which the variable's name has meaning and for which the variable is said to be "visible"."

# Course Documentation

## Scope and Variables

Variables are the names of the places that some value is stored and the most typical syntax to create them is:  

    var variablesname = valueofvariable;

and after the creation we are typically changing the value with this syntax:  

    variablesname = newvalueforthevariable;

And if it is not clear the easiest thing in the world is to access the variable just by writing the variable there where we will use its value:  

    console.log(variablesname)

Scope on the other hand is about variable's inheritance, (with other words how accessible can a variable be). Typically it has two levels:

- **Global** External variable when every function can access it.
- **Local** Internal variable when only the function that

In our example we used things like this. to manipulate our variables in a special way. This is called a JavaScript closure. It makes it possible for a function to have "private" variables or use private variables in a special way. (see Objected Oriented Programming or Classes.)  
  
For more information please check the [W3schools Javascript closures' documentation page](http://www.w3schools.com/js/js_function_closures.asp).  
  
## Javascript functions

According to W3schools:  
  
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).  

    function myFunction(p1, p2) {
        return p1 * p2;              // The function returns the product of p1 and p2
    }

### JavaScript Function Syntax
  
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}  

    function name(parameter1, parameter2, parameter3) {
        code to be executed
    }

Function **parameters** are the **names** listed in the function definition.

Function **arguments** are the real **values** received by the function when it is invoked.

Inside the function, the arguments behave as local variables.

# The New Boston

## Links

- [Support](https://www.patreon.com/thenewboston)
- [thenewboston.com](https://thenewboston.com/)
- [Facebook](https://www.facebook.com/TheNewBoston-464114846956315/)
- [Twitter](https://twitter.com/bucky_roberts)
- [Google+](https://plus.google.com/+BuckyRoberts)
- [reddit](https://www.reddit.com/r/thenewboston/)

> Written with [StackEdit](https://stackedit.io/)
