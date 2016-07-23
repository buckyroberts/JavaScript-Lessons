
![](http://i.imgur.com/BgUMUGU.png)    
 
# Callback
  
A callback is a function that is called after another function is done executing.
Good for when you are making API calls, and want function to run only after data is retrieved from server.    


# Course Documentation 

## JQuery

It is clear that we use the help of JQuery for our purpose, and it could be extremely usefull in this point to explain the basic syntax of an JQuery statement.  
The basic syntax of Jquery is:  

    $(selector).action()

which  

 - The sign $ defines that we will work will work with jQuery.   
 - The selector that defines what will activate our action   
 - And the action of course that we wish to use. the best way to describe an action is to describe it as an special function that comes from jQuery and interacts with an element of our code.

for this example:  

    $("button").click(function () {
                $("p").hide("slow", function () {
                    alert("The paragraph is now hidden");
                });
            });  

We used the *.click* and the *.hide* action.   
The *.click* activates a function or another action when we click the selector.  
The *.hide* action hides the area that is defined by the selector.  
  
For more information check the [W2schools' documentation on jQuery](http://www.w3schools.com/jquery/jquery_syntax.asp)

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