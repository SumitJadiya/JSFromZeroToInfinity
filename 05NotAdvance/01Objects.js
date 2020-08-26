// Prototype
var User = function (firstName, courseCount) {

    this.firstName = firstName
    this.courseCount = courseCount

    this.getCourseCount = function () {
        console.log(`Course Count = ${courseCount}`)
    }
}

// Proto - No need to access the object
User.prototype.getFirstName = function () {
    console.log(`Your FirstName is : ${this.firstName}`);
}


//var sumit = User("Sumit", 2) // Undefined
var sumit = new User("Sumit", 2)
sumit.getCourseCount()
if (sumit.hasOwnProperty('firstName')) // This will check if the property exists or not
    sumit.getFirstName()
// console.log(sumit)

var sam = new User("Sam", 4)
sam.getCourseCount()
if (sumit.hasOwnProperty('firstName'))
    sam.getFirstName()
// console.log(sam)