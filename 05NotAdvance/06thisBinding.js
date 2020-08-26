/*
    Bind gives reference back and you've to manually call that method.
    Call directly calls it.

*/

const sumit = {
    firstName: "Sumit",
    lastName: "Jadiya",
    role: "admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        FirstName is ${this.firstName}
        LastName is ${this.lastName}
        his role is ${this.role}
        and he is studying ${this.courseCount} courses
        `)
    }
}

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4
}

sumit.getInfo()
// dj.getInfo() // this is not available in dj

var djInfo = sumit.getInfo.bind(dj) // this keyword inside the function will point to dj
djInfo()