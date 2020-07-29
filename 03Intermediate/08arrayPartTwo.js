// Basic
/*
function isEven(element) {
    // if (element % 2 === 0)
    //     return true;

    // return false;

    return element % 2 === 0
}
*/

// Arrow Function
isEven = (element) => {
    // if (element % 2 === 0)
    //     return true;

    // return false;

    return element % 2 === 0
}

console.log(isEven(2))

var result = [2, 4, 6, 8].every(isEven) // Callback
console.log(result)

// Callback with Arrow
var newResult = [2, 4, 6, 8].every(e => e % 2 === 0)
console.log(newResult)