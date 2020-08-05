const myStates = [
    "Maharashtra",
    "MP",
    "CG",
    1947,
    "Assam",
    "Gujrat",
    "Rajasthan"]


// for loop
for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== 'string') continue;
    console.log(myStates[i])
}
console.log("------------------------")

// while
let i = 0;
while (i < myStates.length) {
    console.log(myStates[i])
    i++;
}
console.log("------------------------")

// do while
i = 0;
do {
    console.log(myStates[i])
    i++;
} while (i < myStates.length)