// for all regular function calls, this points to window object

var firstName = "jadiya"

const user = {
    firstName: "Sumit",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 9", this.firstName) // sumit
        console.log("Line 10 -> ", this.courseCount) // 4

        // regular function has its own this keyword
        const isEven = function () {
            console.log(this.courseCount) // undefined
            console.log(this.courseCount % 2 == 0) // false
        }
        isEven()
        // Arrow function uses the this keyword from parent
        const isOdd = () => {
            console.log(this.courseCount) // 4
            console.log(this.courseCount % 2 != 0) // false
        }
        isOdd()
    },
    // arrow
    sayHello: () => {
        // console.log("Hello", this)
        console.log("Line 28", this.firstName) // jadiya
    }
}

user.getCourseCount()
user.sayHello()
console.log(this.firstName) // jadiya