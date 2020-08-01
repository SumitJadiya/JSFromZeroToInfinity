var user = {
    firstname: "Sumit",
    lastname: "jadiya",
    admin: "admin",
    loginCount: 32,
    facebookSignedIn: true
}

console.log(user)
console.log(user.firstname)

/*
console.log(user[firstname]) // error
*/

console.log(user["firstname"]) // valid

console.table(user)
