const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I got that")
        }, 3000)
    })
}

const callMe = async () => {
    const val2 = await dos() // wait till execution of dos() is complete
    console.log(val2)
}

callMe()