// Create Application with following roles:
// Admin - Full Access
// subadmin - gets access to create/delete course
// testprep - gets access to create/delete users
// user - gets access to consume content

var user = "testprep"

switch (user) {
    case "admin":
        console.log("Full Access")
        break;
    case "subadmin":
        console.log("Access to create/delete course")
        break;
    case "testprep":
        console.log("Access to create/delete users")
        break;
    case "user":
        console.log("Access to consume content")
        break;
    default:
        console.log("No Access")
        break;
}