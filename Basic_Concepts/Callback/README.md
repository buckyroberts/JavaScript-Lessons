
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

> Written with [StackEdit](https://stackedit.io/).