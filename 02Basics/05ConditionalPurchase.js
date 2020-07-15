// user is only allowed to make a purchase when he is:
// logged in
// email verified
// cardinfo - valid
// If any one is missing, stop purchase

var isLoggedIn = false;
var isEmailVerified = true;
var validCardInfo = true;

if (isLoggedIn && isEmailVerified && validCardInfo)
    console.log("you can Purchase")
else
    console.log("you can't Purchase")