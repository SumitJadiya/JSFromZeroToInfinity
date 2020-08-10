const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]

for (const name of names) {
    console.log(name)
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