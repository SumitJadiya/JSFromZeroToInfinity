// scenario 1: var vs let
/*
let xp = function () {
    if (true) {
        console.log(v) // undefined (hoisting)
        console.log(l) // script.js:5 Uncaught ReferenceError: Cannot access 'l' before initialization

        var v = 2
        let l = 1
    }
    // if previous console logs are removed
    console.log(v) // 2
    console.log(l) // Uncaught ReferenceError: l is not defined
}

xp()
*/

// scenario 2: let vs const
/*
const c; // Uncaught SyntaxError: Missing initializer in const declaration
c = 10;
console.log(c)
const x = [1, 20, 2]
x.push(3)
console.log(x)
const y = [1, 20, 2]
y = [1, 2, 4] // Uncaught TypeError: Assignment to constant variable.
console.log(y)
*/

//prototypical inheritance
/*
let car = function (model) {
    this.model = model
}

car.prototype.getModel = function () {

    return this.model
}

let toyota = new car('toyota')
console.log(toyota.getModel())
*/

// fn declaration vs fn expression
/*
console.log(funcD()) // function declaration /n undefined
console.log(funcE()) // Uncaught ReferenceError: Cannot access 'funcE' before initialization

function funcD() {
    console.log("function declaration")
}
let funcE = () => {
    console.log("function expression")
}
*/

// scenario -> setTimeout()
// b c 0 1 2 3 4 5 a
/*
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 0)
}

setTimeout(function () {
    console.log('a')
}, 0)
console.log('b')
console.log('c')
*/

// closure
/*
let obj = function () {
    let i = 0;
    return {
        setI(k) {
            i = k
        },
        getI() {
            return i
        }
    }
}

let x = obj()
x.setI(2)
x.setI(4)
console.log(x)
*/


/*
Scenario

console.log([] + []) // blank
console.log([] + {}) // [object Object]
console.log({} + []) // [object Object]
console.log({} + {}) // [object Object][object Object] */


/*
scenario

function a() {
    return 'hello'
}

const sentence = a`h1`
console.log(sentence) // hello
*/

/*
scenario:

function y() {
    console.log(this.length) // 2 (size of argument)
}

var x = {
    length: 5,
    method: function (y) {
        arguments[0]();
    }
}
x.method(y, 1) */


/*
Scenario:

const x = 'constructor'
console.log(x[x](01)) // 1, x[x] is equlivalent to String()

const y = 'constructorss'
console.log(y[y](01)) // Uncaught TypeError: y[y] is not a function */

/*
Scenario:

console.log(("h1").__proto__) // String
console.log(("h1").__proto__.__proto__) // Object
console.log(("h1").__proto__.__proto__.__proto__) // null
*/

/*
Print the length of arguments in any method:

let x = function () {
    return [].slice.call(arguments).length
}
console.log(x(1, 2, 3, 4, 5)) */


/*
Settimeout scenario:

function x() {

    for (var i = 1; i <= 5; i++) {

        function closure(i) {
            setTimeout(function () {
                console.log(i)
            }, 0)
        }
        closure(i)
    }
    console.log("message")
}

x() */


//closure: function along with lexical scope forms closure 
/* function x() {
    var a = 7
    function y() {
        console.log(a) // fetch the value from lexical scope
    }

    y()
}

x()
*/

/* function x() {
    var a = 7
    function y() {
        console.log(a) // fetch the value from lexical scope
    }
    a = 100
    return y
}

var z = x()
console.log(z) // closure : function y() { console.log(a) }
z() // 7 */

/* function m() {
    var b = 900;
    function x() {
        var a = 7
        function y() {
            console.log(a, b) // fetch the value from lexical scope
        }
        y()
    }
    x()
}
m() */


/* // hoisting : process of accessing the variables/methods even before declaration
getName() // message
console.log(x) // undefined

var x = 7
function getName() {
    console.log("message")
} */

/*
// function statement aka function declaration
function a() {
    console.log("a called")
}
a()

// function expression
var b = function () {
    console.log("b called")
}
b()

// anonymous function -> function without name

// named function
var c = function xyz() { // calling xyz() outside will throw reference error
    console.log("c")
}
 */

/*
// Temporal Dead Zone
console.log(a)
console.log(b)

var a = 100
let b = 100
 */

/* function a() {
    var index = 0

    function x() {
        index++
        console.log(index)
    }

    return x
}
var m = a()

m() // 1
m() // 2
m() // 3
m() // 4
 */

/*
function func() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Func1")
        }, 1000)
    })
}
var promise = func()

promise.catch(result => console.log(result)).then(result => console.log(result))
// Func1
// undefined
*/

/*
const arr = [1, 2, 4]
console.log(arr)

arr.push(10) // legal

console.log(arr)
arr = [12, 3, 5, 6] // illegal
*/
/*
// constructor function / factory function
function xyz(a) {
    this.a = a

    return this.a
}

console.log(xyz(10)) // factory function (returns normal value)

let x = new xyz(10) // constructor function (return object)
console.log(x)
 */
/*
function x() {
    let a = 110;
    var b = 110;

    function abc() {
        console.log(a) // 120
        console.log(b) // 120
    }

    a = 120;
    b = 120;
    return abc
}
a = 130;
b = 130;

let zyz = x()()

 */
/*
let car = function (model) {
    this.model = model
}

car.prototype.getModel = function () {
    return this.model
}

let toyota = new car('toyota')
console.log(toyota.getModel()) // inherited from parent


let a = function (main) {
    this.main = main;
}

a.prototype.getMain = function () {
    return this.main
}

let x = new a(100)
console.log(x.getMain()) // 100
 */
/*
function main() {
    setTimeout(function () {
        console.log("object")
    }, 0)
    console.log("hello")
}

// hello

call stack: GEC -> main()

other env: setTimeout() ->

// hello

callback function vs normal function

 */
/*
document.addEventListener( "click", ()=> (
    console.log("object")
))

normal callback :
-> other  -> callback queue -> event loop -> call stack

promises callback :
-> other  -> microtask queue -> event loop -> call stack

microtask > callback
*/

/*
// Throttling
const mysleep = () => {

    return new Promise(resolve => (
        setTimeout(() => {
            resolve("object")
        }, 5000))
    )
}

async function asyncCall() {

    const result = await mysleep();
    console.log(result);
    console.log("hello")
}

asyncCall()
*/
// object 
// hello

/*
const state = {
    a:10
}

setState({a:20})


const [state, kjasdhjk] = useState(0)

const ab = () =>{
    kjasdhjk(10)
    console.log(state) // 10
}
*/

/*
- define
- life cycle methods

*/

/*
Currying transforms a function into a sequence of nesting functions. Basically, it converts a function

from this:f(a,b,c)
to this: f(a)(b)(c)

It involves taking a function with multiple arguments and returning a sequence of nested functions, each taking a single argument, eventually resolving to a value.

normal function:
*/

/* function multiply(a, b, c) {
    return a * b * c
}

console.log(multiply(2, 3, 4)) // an
 */

/*
// Currying:
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}

let product = multiply(2)(3)
console.log(multiply(2)(3)(4)) // 24
console.log(multiply(2, 3, 4)) // an

console.log(product(4))

 */
