// Multiple names
var name;
var name2;
var name3;
// Array
var names = [];

var countries = ['India', 'USA', 'Japan', 'Russia']
var states = new Array('Maharashtra', 'Delhi', 'MP', 'CG')
console.log(states) // [ 'Maharashtra', 'Delhi', 'MP', 'CG' ]

console.log(states[0]) // Maharashtra
states[0] = 'Punjab'
console.log(states) // [ 'Punjab', 'Delhi', 'MP', 'CG' ]

var user = ["Sumit", "sumit@jadiya.com", 3, 34, true]
console.log(user) // [ 'Sumit', 'sumit@jadiya.com', 3, 34, true ]

user.pop()
console.log(user) // [ 'Sumit', 'sumit@jadiya.com', 3, 34 ]

user.unshift('new value')
console.log(user) // [ 'new value', 'Sumit', 'sumit@jadiya.com', 3, 34 ]

user.shift()
console.log(user) // [ 'Sumit', 'sumit@jadiya.com', 3, 34 ]

console.log(user.indexOf("newiuy")) // -1

console.log(Array.from("Sumit")) // [ 'S', 'u', 'm', 'i', 't' ]