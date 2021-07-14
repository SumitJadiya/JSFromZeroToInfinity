/*
Hoisting:
process of accessing the variables/methods even before declaration

Temporal Dead Zone:
zone where let/const variables are not safe for use.

Why Hoisting:
maybe to use function even before declarations
*/

// Global context
/* Example 1 */
var num = 2;

function sayMe() {
    console.log("Say me")
}

sayMe() // Execution context will run this

/* Example 2 */
tipper("5") // We can call function anywhere

function tipper(bill) {
    var totalBill = parseInt(bill);
    var tax = 10;
    console.log(totalBill + tax)
}

tipper("5") // We can call function anywhere

/* Example 3 */
bigTipper("200") // This is not allowed

var bigTipper = function (bill) { // this variable "bigTipper" is undefined. (Global context mark this undefined)
    var totalBill = parseInt(bill);
    var tax = 10;
    console.log(totalBill + tax)
}

bigTipper("200") // This is allowed

/* Example 4 */
console.log(name) // undefined
var name = "Sumit"
console.log(name) // Sumit

/* Example 5 */
function sayMyName() {
    var name = "Mr. S"
    console.log(name) // Mr. S
}

console.log(name) // Sumit


/* Temporal Dead Zone */
const myName = "sumit"
if (myName === "sumit") {
    // Temporal Dead Zone
    console.log(`this is my ${job}`) // Reference error 
    const job = "Engineer"
}
