var fullName = "Sumit Jadiya"

// how to name variables

// fullName
// full-name
// full_name
// FullName --> Not Recommended

var courseName = "ReactJs Course"

var isLoggedIn = true

var loggedCount = 34 // Without double quote is number, with double quote is String

var paymentMode
console.log(paymentMode) // undefined 

paymentMode = "Credit Card"

// Running a for loop with var:
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); // 10

// Do something one second after the loop runs:
for (var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function () {
        console.log('The number is ' + i); // 10 everytime
    }, 1000);
}
console.log(i); // 10

// let
// Do something one second after the loop runs:
for (let j = 0; j < 10; j++) {
    console.log(j);
    setTimeout(function () {
        console.log('The number is ' + j); // 1-9
    }, 1000);
}
console.log(j); // error

