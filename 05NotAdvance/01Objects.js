// Prototype
var User = function (firstName, courseCount) {

    this.firstName = firstName
    this.courseCount = courseCount

    this.getCourseCount = function () {
        console.log(`Course Count = ${courseCount}`)
    }
}

//var sumit = User("Sumit", 2) // Undefined
var sumit = new User("Sumit", 2)
console.log(sumit)

var sam = new User("Sam", 4)
console.log(sam)