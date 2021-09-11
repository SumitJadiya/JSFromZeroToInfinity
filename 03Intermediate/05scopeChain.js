/* 
    -------------
    SCOPE CHAIN
    -------------

        SCOPE : 
        Space or environment in which a certain variable is declared (variable env in case of functions).

        SCOPE OF VARIABLE : 
        Entire region where a certain variable is accessible.

        LEXICAL SCOPE : 
        It means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

    ----------------
    Types of SCOPES 
    ----------------

        1. Global SCOPE : This is when we define any variable outside any function or block. Global scope are accessible everywhere.
        2. Function SCOPE : Variables are accessible only inside the functions not outside. (Also called local scope)
        3. Block SCOPE : Variables are accessible only within blocks (if/loops). let and const are block scope variables. Functions are also block scope (only in strict mode).

        Note: let and const are block scopes whereas var is function scope.

    --------------------------
    SCOPE Chain vs Call Stack  
    --------------------------

        (In Example 2)

        Global Scope : variable - first, function - firstMethod and thirdMethod
        firstMethod EC :  variable - second, function - secondMethod
        secondMethod EC : variable - third
        thirdMethod EC : variable - fourth

        note - 
        1. EC: Execution Context
        2. reference error if variable is not found in scope.
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