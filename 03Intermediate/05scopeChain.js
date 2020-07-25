var name = "Sumit"

console.log("Line 3", name)

function sayName() {
    var name = "Mr. STJ"
    console.log("Line 7", name)
    sayName2()

    function sayName2() {
        var name = "Mr. ST J "
        console.log("Line 12", name)
    }
}

sayName()