//////////////////////
// MAPS
//////////////////////

var myMap = new Map()

myMap.set(1, "Uno")
myMap.set(2, "Dos")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")

console.log(myMap)

// print keys
for (let key of myMap.keys()) {
    console.log(`Key is ${key}`)
}

// print values
for (let value of myMap.values()) {
    console.log(`Value is ${value}`)
}

// print keys and values
for (let key of myMap.keys()) {
    console.log(`Key is ${key} and value if ${myMap.get(key)}`)
}

// print keys and values
for (let [key, value] of myMap) {
    console.log(`Key is ${key} and value if ${value}`)
}

// print values
myMap.forEach((value) => console.log(`${value}`))

// without set method
const questions = new Map([
    ['question', 'what is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JS'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try Again!']
])
console.log(questions)

for (const [key, value] of questions) {
    if (typeof key === 'number')
        console.log(`Answer ${key} : ${value}`)
}

const answer = 3
console.log(questions.get(questions.get('correct') === answer))

// convert map to array
console.log([...questions])
console.log(questions.entries())
console.log(...questions.keys())
console.log(...questions.values())