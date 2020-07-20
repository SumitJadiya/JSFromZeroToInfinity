// undenfined -> Absence of value
// null -> null value
// 0
// ''
// NaN -> not a number

var user;

if (user)
    console.log("Condition is true");

user = "2";
if (2 == user)
    console.log("Second condition is true");

user = "2";
if (2 === user) // coercion
    console.log("Third condition is true");
