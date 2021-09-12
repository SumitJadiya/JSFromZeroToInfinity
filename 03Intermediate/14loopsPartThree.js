const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]

// without index
for (const name of names) {
    console.log(name)
}

// with index
for (const [index, name] of names.entries()) {
    console.log(index + " : " + name)
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    apl: "Apple"
}

for (const symbol in symbols) {
    console.log(`Key ${symbol} and value ${symbols[symbol]}`)
}

////////////////////
// Optional Chaining
////////////////////

const users = [{
    name: 'Sumit',
    email: 'xyz@gmail.com'
}]

// with nullish coalesc operator
console.log(users[0].name ?? 'users array empty')