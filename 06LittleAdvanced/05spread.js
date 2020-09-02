// ...args --> ... is spread and args is rest

var returnedValue = Math.max(2, 5, 7, 4, 8, 9, 3)
console.log(returnedValue)

var myObj = {}
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 })

console.log(myObj)


function sumOne(a, b) {
    return a + b
}

console.log(sumOne(5, 4))

const myA = [5, 4]
console.log(sumOne(myA)) // undefined

console.log(sumOne(...myA)) // Spread Operator -> Takes group and spread in multiple values


function sumtwo(a, b, ...args) {
    let sum = 0;
    let multi = a * b

    for (const arg of args) {
        sum += arg
    }

    return [sum, multi]
}

console.log(sumtwo(2, 3, 1, 5, 7))