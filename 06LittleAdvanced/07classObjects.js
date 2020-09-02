// import User from "./06classjs" 

const User = require("./06classjs")
const Sumit = new User("Sumit", "jadiyaskj@gmail.com")

console.log(Sumit.getInfo())
console.log(Sumit.getCourseList())
Sumit.enrolledCourse("React")
Sumit.enrolledCourse("ML")
console.log(Sumit.getCourseList())


let courses = Sumit.getCourseList()

courses.forEach(course => console.log(course))