/*
This keyword/variable:
Spacial variable that is created for every execution context. Takes the value of the owner of the function in which this keyword is used. 
This keyword
    - is used to access the properties of an object.
    - is used to access the methods of an object.
    - is used to access the values of an object.
    - is used to access the prototype of an object.
    - is used to access the superclass of an object.

Value of this keyword is not static.

for Method -> this [points to object calling the method]
for function -> this [points to undefined (strict mode) or global/window (non-strict mode)]
for arrow -> this [points to surrounding function]
*/

console.log("game", this); // access to global context

var game = "basketball"

function sayName() {
    var name = "Sumit"
    console.log(this);
}
sayName()