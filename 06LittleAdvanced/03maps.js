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