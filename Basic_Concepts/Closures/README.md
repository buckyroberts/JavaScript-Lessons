
![](http://i.imgur.com/BgUMUGU.png)    
 
## Closures

Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an
enclosing scope). In other words, these functions 'remember' the environment in which they were created.  
  
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
 -  **Local** Internal variable when only the function that

  
In our example we used things like this. to manipulate our variables in a special way. This is called a JavaScript closure. It makes it possible for a function to have "private" variables or use private variables in a special way. (see Objected Oriented Programming or Classes.)  
  
For more information please check the [W3schools Javascript closures' documentation page](http://www.w3schools.com/js/js_function_closures.asp).

> Written with [StackEdit](https://stackedit.io/).