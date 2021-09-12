// Spread Operator (...)
// ...args --> ... is spread and args is rest

var returnedValue = Math.max(2, 5, 7, 4, 8, 9, 3)
console.log(returnedValue) // 9

var myObj = {}
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 })
console.log(myObj) // { a: 1, b: 2, c: 3, z: 9, y: 8, x: 7 }

// SUM
function sumOne(a, b) {
    return a + b
}
console.log(sumOne(5, 4)) // 9

const myA = [5, 4]
console.log(sumOne(myA)) // undefined
console.log("sumOne(...myA)", sumOne(...myA)) // Spread Operator -> Takes group and spread in multiple values

function sumtwo(a, b, ...args) { // ...args is rest parameter
    let sum = 0;
    let multi = a * b

    for (const arg of args) {
        sum += arg
    }

    return [sum, multi]
}
const numbers = [2, 3, 1, 5, 7]
// spread parameter
console.log(sumtwo(...numbers)) // sumOne(...myA) 9

// Spread vs BAD way
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 13, 6 ]

const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9]
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1, 2, 7, 8, 9
console.log(1, 2, 7, 8, 9); // 1, 2, 7, 8, 9

/////////////////////////////////////////////////
// REST OPERATOR
/////////////////////////////////////////////////

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7]
console.log("a", a, "b", b, "others", others) // a 1 b 2 others [ 3, 4, 5, 6, 7 ]

