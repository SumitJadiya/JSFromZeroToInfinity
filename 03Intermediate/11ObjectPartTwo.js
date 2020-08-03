var user = {
    firstname: "Sumit",
    lastname: "jadiya",
    admin: "yes",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName) // this refers to user
    },

    getCourseCount: function () {
        return `${this.firstname} is enrolled in ${this.courseList.length} courses.`
    },

    getCourseInfo: function () {

        return `${this.firstname} ${this.lastname} is an ${(this.admin) ? "Admin" : "Student"} 
        having logincount ${this.loginCount} and was signed in using ${(this.facebookSignedIn) ? "Facebook" : "email"} 
        and enrolled to courses ${this.courseList}
        `;
    }


}

console.log(user.firstname)
console.log(user.getCourseCount());

user.buyCourse("AWS")
console.log(user.getCourseCount());

user.buyCourse("react")
console.log(user.getCourseCount());

console.log(user.getCourseInfo())