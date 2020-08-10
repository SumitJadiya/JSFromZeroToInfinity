// for all regular function calls, this points to window object

console.log(this)

var user = {
    firstName: "Sumit",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 9", this)
        console.log("Line 10 -> ", this.courseCount)

        function sayHello() {
            console.log("Hello")
            console.log("Line 14", this)
        }
        sayHello()
    }
}

user.getCourseCount()