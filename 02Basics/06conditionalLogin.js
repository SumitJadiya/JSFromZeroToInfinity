// Allow user to access course if he is:
// logged in from email
// logged in from fb
// logged in from google

var email = true
var fb = false
var google = false

if (email || fb || google)
    console.log("Login Successful")
else
    console.log("Login failed")