const myStates = [
    "Maharashtra",
    "MP",
    "CG",
    1947,
    "Assam",
    "Gujrat",
    "Rajasthan"]


// loop
for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== 'string') continue;
    console.log(myStates[i])
}