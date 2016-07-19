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


> Written with [StackEdit](https://stackedit.io/).