/*
Scope:
Scope is an space or environment where the variable is declared.

Lexical Scope:
A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
------------------------------------------------------------------------------------------------------------------------------------------------------

There are three types of scope:
1. Global Scope -> This is when we define any variable outside any function or block. Global scope are accessible everywhere.

2. Function Scope -> Variables are accessible only inside the functions not outside. (Also called local scope)

3. Block Scope -> Variables are accessible only within blocks (if/loops). let and const are block scope variables. Functions are also block scope in strict mode.

Note: let and const are block scopes whereas var is function scope.

------------------------------------------------------------------------------------------------------------------------------------------------------
Scope Chain vs Call Stack:

in example 2, 
Global Scope : variable: first, function: firstMethod and thirdMethod
firstMethod Execution Context :  variable: second, function: secondMethod
secondMethod Execution Context : variable: third
thirdMethod Execution Context : variable: fourth
*/

/* Basic Example */
const myName = "Sumit" // global scope

console.log("Line 3", myName) // sumit

function sayName() {
    const myName = "Mr. STJ"
    console.log("Line 7", myName) // Mr. STJ

    if (myName !== "Sumit") {
        const lastName = "Jadiya"
    }
    sayName2()

    function sayName2() {
        const myName = "Mr. ST J"

        console.log("Line 12", myName) // Mr. ST J
    }
    console.log(lastName) // ReferenceError: lastName is not defined
}

sayName()

/* Example 2 */
const first = "Sumit";
firstMethod()

function firstMethod() {
    const second = "Hello"
    secondMethod()

    function secondMethod() {
        const third = "Hi"
        thirdMethod()
    }
}

function thirdMethod() {
    const fourth = "Howdy!"
    console.log(fourth + third + second + first) // ReferenceError: third is not defined
}