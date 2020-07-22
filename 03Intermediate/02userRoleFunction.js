/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user
*/

var getUserRole = function (name, role) {

    switch (role) {
        case "admin":
            return `${name} has all the access`;
        case "subadmin":
            return `${name} has access to create/delete courses`;
        case "testprep":
            return `${name} has access to create/delete tests`;
        case "user":
            return `${name} has access to consume all content`;
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("Sumit", "admin"))
console.log(getUserRole("Jaddu", "testprep"))

var getRole = getUserRole("Sammy", "user");
console.log(`${getRole}`)