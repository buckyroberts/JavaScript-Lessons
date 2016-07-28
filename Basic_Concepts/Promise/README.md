![](http://i.imgur.com/BgUMUGU.png)    
 
# Promise

A Promise represents an operation that hasn't completed yet, but is expected in the future.  
  
# Course Documentation 

## HTML

All the HTML tags are having the following syntax:

    <TAG></TAG>

Which the tag with the / is that tag that defines where the tag's area is ending. Here is a short explanation for the HTML tags that we used.

 - **HTML** tag defines the area that the html code applies. 
 - **HEAD** tag includes the html properties of the side. The design  elements that are not visible on the page, (like the content do) but the contribute to the appearance and the functionality of the page. 
 - **BODY** tag defines the body of the page. The content of the page, (text pictures and other things that the designer want to include to his page). Are the visible and update able content of the page. 
 - **SCRIPT** defines the area that we insert a script, (for example JavaScript). This tag is used in both HEAD and BODY tags

## JQuery

It is clear that we use the help of JQuery for our purpose, and it could be extremely usefull in this point to explain the basic syntax of an JQuery statement.  
The basic syntax of Jquery is:  

    $(selector).action()

which  

 - The sign $ defines that we will work will work with jQuery.   
 - The selector that defines what will activate our action   
 - And the action of course that we wish to use. the best way to describe an action is to describe it as an special function that comes from jQuery and interacts with an element of our code.

for this example:  

    <script>
        $.getJSON('http://jsonip.com')
            .done(function (data) {
                $('body').append(data.ip);
            })
            .fail(function () {
                $('body').append('<p>Oh no, something went wrong!</p>');
            })
            .always(function () {
                $('body').append('<p>I promise this will always be added!</p>');
            });
    </script>  

We used the *.done*, the *.fail*, the *.always* and the *.append* action:   
The *.done* is a handler that is activated when a function or another action that is selected is done.  
The *.fail* is a handler that is activated when a function or another action that is selected fails on what it was supposed to do.
The *.always* is a handler that is activated when a function or another action that is selected is not activated yet.
The *.append* action appends, with other words prints something to the selected area. 
  
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