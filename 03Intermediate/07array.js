// Multiple names
var name;
var name2;
var name3;
// Array
var names = [];

var countries = ['India', 'USA', 'Japan', 'Russia']
var states = new Array('Maharashtra', 'Delhi', 'MP', 'CG')
console.log(states)

console.log(states[0])
states[0] = 'Punjab'
console.log(states)

var user = ["Sumit", "sumit@jadiya.com", 3, 34, true]
console.log(user)

user.pop()
console.log(user)

user.unshift('new value')
console.log(user) // [ 'new value', 'Sumit', 'sumit@jadiya.com', 3, 34 ]

user.shift()
console.log(user) // [ 'Sumit', 'sumit@jadiya.com', 3, 34 ]

console.log(user.indexOf("newiuy")) // -1

console.log(Array.from("Sumit"))