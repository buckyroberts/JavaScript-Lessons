![](http://i.imgur.com/BgUMUGU.png)

# Arrays - Bascis
Arrays are a special type of objects that are getting accessed through numbers from zero up to N-1. Arrays are easy to be recognized from their typical syntax:

    Array_name[0] = the value of the first place

 

# Course Documentation

(this for me to fill up with every element that you use in lessons. syntax explaination and links for more)  

## Arrays

Arrays are a special type of objects that are getting accessed through numbers from zero up to N-1. Arrays are easy to be recognized from their typical syntax:

    Array_name[0] = the value of the first place

 According [Wikipedia](https://en.wikipedia.org/wiki/Array_data_structure):  
 *"In computer science, an array data structure, or simply an array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored so that the position of each element can be computed from its index tuple by a mathematical formula."*

Now in our example:  

    var food = ['bacon', 'corn', 'ham', 'sausage'];

We see the initiation through the typical aray syntax:
  

    var arrayname = ['first_Element_of_the_Array', 'second_Element_of_the_Array', 'third_Element_of_the_Array', etc... ]

The most important thing that we need to know about arrays is that Arrays are start counting from 0 instead of 1, (starting counting from 0 is very typical behavior for computers because of the binary system of counting that computer are based of).  
That means that for a N entries in an Array we ae counting the places from zero until the N-1th place.
For example to access the 5th element of an array we are typing:

    arrayname[4]

In our example we used few statments that we should explain bit further:  

**Push and Pop**  
Push adds new item to the end of an array

    food.push('tuna');
    console.log(food);  

while pop  removes and item from the end of an array.

    var lastItem = food.pop();
    console.log(lastItem);
    console.log(food);  
For both Push and Pop please feel free to check bellow about stacks.  
  
**Simple Iteration**  
The way to iterate elements in javascript arrays is pretty straight forward:  

    console.log(food[2]);  

Array values are retrieved by index (starting at 0 not 1).  
  
Iteration through loop  
The best way to iterate an array is mathematically through a loop, like the example bellow:   

    // you can iterate over an array to access each individual element
    for(var i=0; i<food.length; i++){
        console.log(i, food[i]);
    }  
  
  The simplest type of data structure is a linear array, also called one-dimensional array. For more informations about Arrays please visit the links below:   
[Array data structure (Wikipedia)](https://en.wikipedia.org/wiki/Array_data_structure)
[JavaScript Arrays (w3Schools)](http://www.w3schools.com/js/js_arrays.asp)  
## Stacks

A stack is a data structure that can be logically thought of as a real physical stack or pile, a structure where
insertion and deletion of items takes place at one end only called the "top" of the stack. The basic concept can be
illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the
stack in order to remove things from it.

![](http://i.imgur.com/dax54C9.jpg)

##Javascript functions

According to W3schools:  
  
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).  

    function myFunction(p1, p2) {
        return p1 * p2;              // The function returns the product of p1 and p2
    }

###**JavaScript Function Syntax**  
  
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

#The New Boston   
## Links  

- [Support](https://www.patreon.com/thenewboston)
- [thenewboston.com](https://thenewboston.com/)
- [Facebook](https://www.facebook.com/TheNewBoston-464114846956315/)
- [Twitter](https://twitter.com/bucky_roberts)
- [Google+](https://plus.google.com/+BuckyRoberts)
- [reddit](https://www.reddit.com/r/thenewboston/)


> Written with [StackEdit](https://stackedit.io/).