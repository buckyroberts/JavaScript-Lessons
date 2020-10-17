![](http://i.imgur.com/BgUMUGU.png)    
 
# Prototype 

According to [W3schools](http://www.w3schools.com/js/js_object_prototypes.asp): 
Every JavaScript object has a prototype. The prototype is also an object.
All JavaScript objects inherit their properties and methods from their prototype.  



# Course Documentation
 

## Javascript prototypes

According to [W3schools](http://www.w3schools.com/js/js_object_prototypes.asp): 
**Every JavaScript object has a prototype. The prototype is also an object.**

    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };

All JavaScript objects inherit the properties and methods from their prototype.
Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
Objects created with new Date() inherit the Date.prototype.
The Object.prototype is on the top of the prototype chain.
All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    
    var bucky = new Person('Bucky', 'Roberts');
    var emily = new Person('Emily', 'Jones');
    
    console.log(bucky.getName());
    console.log(emily.getName());

## Objects

In our example for objects we used the following code:  
  

    Person.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    
    var bucky = new Person('Bucky', 'Roberts');
    var emily = new Person('Emily', 'Jones');

   
  That is the typical syntax of  javascripts object as well:
    
    var objectname = {
	    property1: "property1valueinstringformat",
	    property2: property2valueinarithmeticformat
	    };

We achieve to insert more values in one variable by turning it to an object and by use the "property" format to each of our value
	

	    { property: valueofproperty };

  Curley brackets are defining the are of the properties, and also they defining that our variable is an object, and we separate our properties with the comma symbol.

 - Read more about [Object Oriented
   Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
 - in Wikipedia Read more about [Javascript
   Objects](http://www.w3schools.com/js/js_objects.asp) in W3schools



## Javascript functions

According to W3schools:  
  
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).  

    function myFunction(p1, p2) {
        return p1 * p2;              // The function returns the product of p1 and p2
    }

### **JavaScript Function Syntax**  
  
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
> Written with [StackEdit](https://stackedit.io/).
