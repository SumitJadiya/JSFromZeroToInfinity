/*
// Legacy
function sayHello() {
    console.log("I say Hello")
    console.log("I again say Hello")
}

// better approach
var sayHello = function () {
    console.log("I say Hello")
    console.log("I again say Hello")
}
*/

// Self Executing Anonymous function --> IIFE
(function sayHello() {
    console.log("I say Hello")
    console.log("I again say Hello")
})()

