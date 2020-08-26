var User = {
    name: "",
    getUserName: function () {
        console.log(`Username is ${this.name}`)
    }
}

// Legacy way of creation of object
var sumit = Object.create(User)
console.log(sumit)
sumit.name = "Sumit"
sumit.getUserName()

var sam = Object.create(User, {
    name: { value: "Sammy" }
})

sam.getUserName()