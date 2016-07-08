![](http://i.imgur.com/BgUMUGU.png)

# Dictionaries

A dictionary (also known as a map) is used to store key, value pairs.  

#Documentation

Here lies further explaination for the elements that were used in the examples. 

##Dictionaries    

**According to wikipedia:**  
"In computer science, a dictionary, (or an associative array) is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears at most once in the collection."    
In Javascript dictionaries are very usefull because they give us a way to use a data stracture even in an statical content.    

The dictionary's syntax looks like that  
*var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};*  and every the "data" is a pair of a key, (some people call it name) and a value. this pair of key and value is called a property, so the dictionary is somehow an array which consists of properties.  

In an dictionary we can do 4 basic actions, (please notice that as we did in our example we will call our dictionary with the variable name "dict", and that in the example we used the Dictionary through class so the syntax is different as how it is written in the documentation):  
- **Add or insert:** In order to add  a pair we will have to use *push*  
*dict.push({
    key:   "keyName",
    value: "the value"
});*  
- **Reassign**: Sometimes we wish to change the value to some key in this case we use this syntax:  
*dict.keyname1 = "valuename1";*   
- Remove or delete: The best way to remove a property from a dictionary is to use the *delete* keyword:  
*delete dict["keyname"];*  
- Lookup:  Thats is just an elaborate way to say that we wish to check, (to get actually), a value that is associated to a specific key. for example here we wish to prin the value of the key "keyname1" from the dictionary "dict":  
*console.log(dict['keyname1']);*
  
Sometimes instead of add or reassign there is a single set operation that adds a new (key,value) pair if one does not already exist, and otherwise reassigns it. 