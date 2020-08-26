// closure
/*
    Standard Example

    function init() {
        var firstName = "Sumit"
        console.log("I'm init")
        function sayFirstName() {
            console.log(firstName)
        }
        return sayFirstName; // not running, returning the reference
    }

    var value = init()
    console.log(value) // --> Stores the reference name sayFirstName
    value() // closure --> calls the function sayFirstName


    ---> Memory reference is alive if even a single function is allowed
*/

function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

var addFive = doAddition(5);
console.log(addFive(5)) // 10


console.log(doAddition(4)(7)) // 11
