const testArray = [2, 4, 6, 3, 1, 5, 9, 8, 2, 3, 4, 0, 91, 18, 21, 34, 56]

console.log(testArray.fill("h", 2, 5)) // start range inclusive, end range is exclusive
console.log(testArray.fill(0))

const myNumber = [23, 24, 25, 55, 66, 77, 88, 34, 56, 32, 98]
const result = myNumber.filter(num => (num != 55))
console.log(result)