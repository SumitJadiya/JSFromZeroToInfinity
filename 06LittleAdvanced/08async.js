/*
Case 1: When settimeout will allow others to load first

const uno = () => {
    return "I am One"
}
const dos = () => {
    setTimeout(() => {
        console.log("Wohoo")
    }, 3000)
    console.log("I am Two")
}
const tres = () => {
    console.log("I am Three")
}

uno()
dos()
tres()
*/

/*
Case 2: When settimeout will lock the execution of others
*/
const uno = () => {
    return "I am One"
}

/* 
const dos = () => {
    setTimeout(() => {
        return "I am Two"
    }, 3000)
}
*/

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I got that")
        }, 3000)
    })
}

const tres = () => {
    return "I am Three"
}

const callMe = async () => {
    const val1 = uno()
    console.log(val1)
    const val2 = await dos() // wait till execution of dos() is complete
    console.log(val2)
    const val3 = tres()
    console.log(val3)
}

callMe()