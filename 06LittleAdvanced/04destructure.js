const user = ["Sumit", 3, "Admin"]

// const role = user[2]
// const name = user[0]

// destructuring
var [name, courseCount, role] = user

console.log(role)

// using object
const MyUser = {
    fullname: "Sumit",
    totalcourseCount: 4,
    mainrole: "Admin"
}

// invalid
// const { myname, mycourseCount, myrole } = myUser
// console.log(myname)

// valid

const { fullname, totalcourseCount, mainrole } = MyUser
console.log(fullname)