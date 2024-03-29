# JS Notes

### Javascript Overview :

- High Level [Developer need not to manage resources, everything happens automatically]
- Garbage Collected [automatic garbage collection]
- Interpreted or JIT compiled [Entire code is converted into machine code at once, then executed immediately]
- Multi paradigm [it allows all the available paradigms i.e. oop, procedural, functional]
- Prototype-based object-oriented
- First Class Functions [functions treated as variables]
- Dynamically typed [no data type definitions, types become known at runtime]
- Single Threaded
- Non blocking event loop

---

### Javascript Engine :

- Parsing [code is parsed into AST - Abstract Syntax Tree]
- Compilation [takes parsed code (AST) and compiles it to Machine Code]
- Execution [execution happens in call stack]
- Optimization [never ending process loop. takes current unoptimized code and returns optimized code to compiler]

---

### Javascript Runtime :

- Runtime in the browser has :

  - Engine [Heap, Call Stack]
  - WEB APIs [DOM, Timers, Fetch API, . . . ]
  - Callback Queue [onclick, timer, . . . ]

---

### Execution Context :

- Environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed.

  - Global Execution context (i.e. top level) is created for code that is not inside any function.
  - One execution context is created for each function call.
  - Execution of functions (which are called) and waiting for callbacks (events)

- Inside Execution Context :

  - Variable Environment [let, const and var declaration, Functions, arguments object]
  - <a href="./03Intermediate/05scopeChain.js"> Scope Chain </a> <br/>
  - <a href="./03Intermediate/06thisKeyword.js"> This Keyword </a><br/>

---

### Hoisting :

- Makes some variables accessible/usable in the code even before they actually declared.

  - Function declaration : Yes [value -> actual function]
  - var variables : Yes [value -> undefined]
  - let and const variables : No [technically, yes. But the value is <uninitialized> as they are placed in Temporal Dead Zone]
  - function expressions and arrow functions : [depends if they uses var or let/const]

- Temporal Dead Zone :
  All the let/const variable get their own TDZ until the line where it is defined. The variable is only safe to use after TDZ.
  TDZ makes it easier to avoid and catch errors.

More on <a href="./03Intermediate/04hoisting.js"> Hoisting </a><br/>

---

### This Keyword :

- Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the "this" keyword is used.

  - Method : this = Object that is calling the method
  - Simple fn call : this = undefined
  - Arrow fn : this = this of surrounding function (lexical this)
  - EventListener : this = DOM element that the handler is attached to

- More details :

  - <a href="./03Intermediate/06thisKeyword.js">This keyword basics </a>
  - <a href="./03Intermediate/15thisAgain.js">This keyword example</a>

- Regular Function vs Arrow Function :
  - Regular fn has its own this keyword whereas arrow function inherits this keyword from parent scope.

---

### Primitives vs Objects (Reference)

- Primitives :

  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
  - Bigint

- Reference Types :

  - Object literal
  - Arrays
  - Functions
    .. etc

- Primitive type stored in call stack(EC) and reference type are stored in heap.

  ```
  let lastName = 'Williams'
  let oldLastName = lastName
  lastName = 'Davis'
  console.log(lastName, oldLastName) // Davis Williams

  const jessica = {
      firstName : 'Jessica',
      lastName : 'Williams',
      age : 27
  }

  // Problem
  const marriedJessica = jessica
  marriedJessica.lastName = 'Davis'

  console.log("before marriage", jessica); // Jessica Devis
  console.log("after marriage", marriedJessica); // Jessica Devis

  // Shallow Copy [this will fail if object has array and we're updating the array]
  const marriedJessicaCopy = Object.assign({}, jessica)
  marriedJessicaCopy.lastName = 'Davis'

  console.log("before marriage", jessica); // Jessica Williams
  console.log("after marriage", marriedJessica); // Jessica Devis
  ```

---

### Modern Operators

- Destructuring :
  way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
  More on <a href="https://github.com/SumitJadiya/JSTube/blob/master/09DSUsingJS/script.js#L42">Destructuring</a>

- Spread :
  when we have (...) operator in right side of = sign
  More on <a href="./06LittleAdvanced/05spread.js">SPREAD Operator</a>

- Rest :
  when we have (...) operator in left side of = sign
  More on <a href="https://github.com/SumitJadiya/JSFromZeroToInfinity/blob/master/06LittleAdvanced/05spread.js#L44">REST Operator</a>

- Short Circuiting :
  && and || operator are known as short circuiting

- Coercion (truthy and falsy values) : <br/>
  Falsy Values : 0, undefined, NAN, null, '' <br/>
  other values are known as truthy values(returns true if placed inside if block).

- Nullish Coalescing Operator (??) :
  Works with the idea of nullish values instead of falsy values. Nullish values are null and undefined.

  ```
  let a;
  const result = a ?? 10; // a is nullish value
  console.log(result) // 10 (returns first not null value)
  ```

- Loops :

  - <a href="./03Intermediate/12loops.js"> For/while/do while </a> <br/>
  - <a href="./03Intermediate/13loopsPartTwo.js"> ForEach (not exactly loop but method for array) </a> <br/>
  - <a href="./03Intermediate/14loopsPartThree.js"> For of / in </a> <br/>

- Option Chaining (?.) :
  Instead of checking for null values explicitly, we can use option chaining to check the value and returns undefined immediately.

  ```
    console.log(a?.name)
    // returns undefined as a is not defined. Without "?.", JS will throw "Uncaught TypeError: Cannot read property 'name' of undefined"
  ```

- Sets :
  doesn't maintain order, doesn't allow duplicates

  ```
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique); // returns unique items
  ```

- Maps :
  Read more on <a href="06LittleAdvanced/03maps.js">map</a>

- Strings :
  Read more on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">Strings</a>

---

### functions

- Default Parameters :

  ```
  const sum = (a,b=20,c=10) => {
    return a+b+c; // 60
  }
  sum (30, undefined) // either leave empty or set to undefined to use default parameter
  ```

- Passing by value and passing by reference :
  JS doesn't have pass by reference (exception - passing object as parameter)

- First Class Functions :

  - JS treats functions as first-class citizen
  - It treats functions as simple values
  - functions are just another type of object <br/>

    ```
    // Store functions in variable
    const add = (a,b) => a+b;

    // pass function as arguments to other function
    const greet = () => console.log("Hey!");
    btn.addEventListener('click', greet);
    ```

  First class function is a concept in JS.

- Higher order functions :
  A function that receives another function as arguement, that returns a new function, or both. This is only possible bcz of first-class functions.

  ```
  // function that receive another function
  const greet = () => console.log("Hey!");
  btn.addEventListener('click', greet); // addEventListener is a higher order function

  // function that return another function
  function count(){
    let counter = 0;
    return function() {
      counter++;
    }
  }
  ```

  Higher order functions can be implemented using callbacks.

- Function returning Functions :

  ```
  const greet = function(greeting) {
    return function(name) {
      console.log(`${greeting}${name}`)
    }
  }

  const greetfn = greet('hey') // it will contain the function returned by greet
  greetfn("Sumit")

  or
  greet('Hello')('Sumit') //  this is same as previous calling
  ```

- Function Borrowing (call / apply / bind) :

  - Call :
    The call method allows for a method that was defined for one object to be assigned and called on by another object. This allows for a method to get defined once and then get inherited by other objects without having to re-write it for other objects.
  - Apply :
    Apply serves the exact same purpose as call. The only difference between the two is that call expects all parameters to be passed individually, whereas apply expects the second argument to be an array of all the parameters.

    ```
    var animal = {
      animalInfo: function(sound,food) {
        return this.name + " is " + this.age + " years old" + " . He makes the sound "+ sound + " and eats " + food
      }
    }

    var cat = {
      name : "Tom",
      age : 5
    }

    console.log(animal.animalInfo.call(cat,"meow", "fish")) // call
    console.log(animal.animalInfo.apply(cat,["meow", "fish"])) // apply
    ```

  - Bind (for partial function) :
    The bind function creates a new function whose this value can be set to the value provided during the function call, enabling the calling of a function with a specified this value (the first parameter to bind function)

    ```
    Ex. 1 :

    var obj = {
      name:"Tom"
    };

    var info = function(a,b,c){
      return this.name + " likes to eat " + a + " " + b + " and " +c;
    };

    //creates a bound function that has same body and parameters
    var bound = info.bind(obj,"Pasta");

    //calling the bound function later
    console.log(bound("Donuts","Chips","Cake")); // Tom likes to eat Pasta Donuts and Chips
    ```

    ```
    Ex. 2 :

    //without bind (closures)
    const addTaxRate = rate => {
      return function (value) {
        return value + value * rate;
      }
    }

    const addVat = addTaxRate(0.23)
    console.log(addVat(40))

    // with bind
    const addTax = (rate, value) => value + value * rate;

    // fix tax rate
    const vatTax = addTax.bind(null, 0.23)
    console.log(vatTax(100))
    console.log(vatTax(40))
    ```

- IIFE : Pattern that is used to declare functions which are required for one time use only.

  ```
  // Self Executing Anonymous function --> IIFE
  (function sayHello() {
    const isPrivate = 23; // encapsulated data
    console.log("I will never run again")
  })()
  ```

- Closures :

  - when function returning another function, the holding function will hold its environment ( basically all the variable it needed)
  - variable environment attached to the function, exactly as it was at the time and place the function was created
  - closure gives a fn access to all the variables of its parent function, even after that parent fn has returned. The function keeps reference to its outer space, which preserves the scope chain throughout time.
  - closure makes sure that a function does not lose the connection to a variables that existed at the time of function's birth.

  Closures used in :

  - Module design pattern
  - Currying
  - Function like once
  - memoize
  - maintaining state in async world
  - setTimeouts
  - Iterators etc.

    ```
    function secureBooking() {
        var passengerCount = 0
        return function () {
            passengerCount++;
            console.log(passengerCount) // fetch the value from lexical scope
        }
    }

    const booker = secureBooking()
    booker() // 1
    booker() // 2
    booker() // 3
    ```

---

### Array

- Simple Array Methods :

  - <a href="03Intermediate/09filterArray.js"> Slice, Splice, Filter, Reverse, Concat, Join </a>

- Data Transformation with MAP, FILTER, REDUCE :

  - MAP :
    MAP returns a new array containing the results of applying an operation on all original array elements.

    ```
    let arr = [1,2,3,4]

    arr.map(val => val*2;) // returns a new array
    ```

    ForEach vs Map : map creates new array whereas foreach uses the same array.

  - FILTER :
    FILTER returns a new array containing the array elements that passed a specified test condition

    ```
    let arr = [1,2,3,4]

    arr.filter(num => num%2==0) // returns a new array
    ```

  - REDUCE :
    this reduces all elements down to one single value (eg. adding all values)

    ```
    Syntax :
    arr.reduce (function (accumulator, currentValue, index, array){}, startValue)
    ```

    ```
    let arr = [1,2,3,4]
    const sum = arr.reduce((total, curr) => total+curr , 0)

    ```

  - FIND :
    The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

    ```
    Syntax:
    find((element) => { ... } )
    ```

    If you need the index of the found element in the array, use findIndex()

  - Which Array method to use ?
    <table>
    <tr>
      <td>To Mutate Original Array</td>
      <td>
      Add to original : .push(end), .unshift(start) <br/>
      Remove from original : .pop(end), .shift(start), .splice(any)<br/>
      Others : .reverse, .sort, .fill
      </td>
    </tr>
    <tr>
      <td>To get a new Array</td>
      <td>
      Computed from original :
      .map(loop) <br/>
      Filtered using condition : .filter <br/>
      portion of original : .slice <br/>
      adding original to other : concat <br/>
      flattening of original : .flat, .flatMap
      </td>
    </tr>
    <tr>
      <td>To get an array index</td>
      <td>
      Based on value : .indexOf<br/>
      Based on test condition : .findIndex<br/>
      </td>
    </tr>
    <tr>
      <td>to get an array element</td>
      <td>based on test condition : .find</td>
    </tr>
    <tr>
      <td>to know if array includes a number</td>
      <td>
      based on value : .includes <br/>
      based on test condition : .some, .every
      </td>
    </tr>
    <tr>
      <td>to get a new String</td>
      <td>based on separator string : .join</td>
    </tr>
    <tr>
      <td>to transform value</td>
      <td>based on accumulator : .reduce</td>
    </tr>
    <tr>
      <td>to loop an array</td>
      <td>based on callback : .forEach</td>
    </tr>
    </table>

---

### Numbers, Timer

- Converting and Checking Numbers

  ```
  console.log(23 === 23.0); // true
  // Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
  // Binary base 2 - 0 1
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(0.1 + 0.2 === 0.3); // false
  ```

  ```
  // Conversion
  console.log(Number('23')); // 23
  console.log(+'23'); // 23
  ```

  ```
  // Parsing
  console.log(Number.parseInt('30px', 10)); // 30
  console.log(Number.parseInt('e23', 10)); // NaN
  console.log(Number.parseInt(' 2.5rem ')); // 2
  console.log(Number.parseFloat(' 2.5rem ')); // 2.5
  ```

- Timer

  - SetTimeout : This runs a method after specific time interval.

    ```
    const ingredients = ['olives', 'spinach'];
    const pizzaTimer = setTimeout(
      (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
      3000,
      ...ingredients
    );

    console.log('Waiting...'); // this will run before setTimeout

    if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // to clear timeout
    ```

  - SetInterval : This runs any method forever repeatedly after some time interval.

    ```
    const timer = setInterval(function () {
      const now = new Date();
      console.log(now);
    }, 1000);

    clearInterval(timer)
    ```

---

### DOM

- Selecting, Creating, Deleting Element :

  - Selection : document.getElementsBy<XYZ>, document.querySelector()

    ```
    const allSections = document.querySelectorAll('.section')
    ```

  - Insertion : document.createElement()

    ```
    const message = document.createElement('div')
    message.classList.add('cookie-message');
    message.textContent = 'text' // simple text
    message.innerHTML = `html content <button class='btn'>here!</button>`
    header.append(message) // append the message at last
    ```

  - Deletion : remove(), removeChild()

    ```
    document
    .querySelector('.btn--close-cookie)
    .addEventListener('click', function() {
      message.remove() // recent addition to JS
      message.parentElement.removeChild(message) // similar to previous line
    })
    ```

- Events :

  - Bubbling :
    In event bubbling, the handler first executes on the event attached to the target element, then on all its ancestors. It starts from the bottom (deepest layer) and goes to the top.

    ```
    // HTML
    <html>
    <head>
    </head>
    <body>
      <h1> Event Bubbling Example</h1>
      <div id="Box">
        <button id="myButton">Click Me!</button>
      </div>
    </body>
    </html>

    // JS
    var parent = document.getElementById("Box");
    parent.addEventListener("click", function() {
      console.log("Box is clicked");
    });
    var child = document.getElementById("myButton");
    child.addEventListener("click", function() {
      console.log("Button is clicked");
    });

    // OUTPUT
    Button is clicked
    Box is clicked
    ```

  - Capturing :
    In event capturing, when you click the button, the event passes from the parent down to the event target, the button (assigned to child).

    ```
    // HTML
    <html>
    <head>
    </head>
    <body>
      <h1> Event Bubbling Example</h1>
      <div id="Box">
        <button id="myButton">Click Me!</button>
      </div>
    </body>
    </html>

    // JS
    var parent = document.getElementById("Box");
    parent.addEventListener(
      "click",
      function() {
        console.log("Box is clicked");
      },
      true
    );
    var child = document.getElementById("myButton");
    child.addEventListener("click", function() {
      console.log("Button is clicked");
    });

    // OUTPUT
    Box is clicked
    Button is clicked
    ```

  - <a href="./Bankist/script.js#L86">Event Delegation</a> :
    Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object.

  - DOM Traversal :

    - Downwards : element.childNodes, element.children
    - Upwards : element.parentNode, element.parentElement
    - Sideways : element.previousSibling, element.nextSibling

  - <a href="./Bankist/script.js#L181">Observer API Pattern</a>

    ```
    const observerCallback = function (entries, observer) {
      entries.forEach(entry => {
        console.log(entry)
      })
    }

    const observerOptions = {
      root: null,
      threshold: [0, 1, 0.2]
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(section1)
    ```

  - show message to user before closing tab :

    ```
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault()
      e.returnValue = "" // browser will throw popup for confirmation
    })
    ```

  - defer and async script loading :

    <img src='99OtherProjects/images/deferandasync.png' />

    - For async, the script order not guaranteed to execute in order. For defer, the order is guaranteed.

  - Note :

    - e.currentTarget and this variable are same for normal methods but different for arrow fns

      ```
      const handleScrolling = (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href')
        // this won't work as this points to window object
        // const id = this.getAttribute('href')
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
      }
      ```

---

### OOPs

- Fundamental Priciples :

  - Abstraction : Hide details that don't matter
  - Encapsulation : keeping properties and method private inside class so they are not accessible outside the class
  - Inheritance : Make all properties and method of certain class available to child class
  - Polymorphism : child class can overwrite a method it inherited from a parent class

- <a href='00OOPS/script.js'> Prototypal Inheritance </a>:

  - The prototype contains methods (behaviour) that are accessible to all the objects linked to that prototype.
  - Behaviour is delegated to the linked prototype object

- Ways to implement Prototypal Inheritance

  - Constructor Function

    - Technique to create objects from a function
    - This is built-in objects like Arrays, Maps or sets are actually implemented

      ```
      // constructor function
      function Person () {
        this.name = 'John',
        this.age = 23
      }

      // create an object
      const person = new Person();
      ```

  - ES6 classes

    - Modern alternative to constructor function syntax (behind the scene works exactly like constructor function)
    - ES6 classes do not behave like classes in "classical OOP"

      ```
      class Animal {

      constructor(name, fierce){
        this._name = name;
        this._fierce = fierce;
      }

      get name() {
        return this._name;
      }

      get fierce() {
        return ` This animal is ${ this._fierce ? 'fierce' : 'tame' }`;
      }

      toString() {
        return `This is a ${ this._fierce ? 'fierce' : 'tame' } ${this._name}`;
      }

      }
      ```

  - Object.create()

    - The easiest and most straightforward way of linking an object to prototype object

      ```
      const PersonProto = {
        calcAge: function () {
          return new Date().getFullYear() - this.birthYear;
        }
      }

      const steven = Object.create(PersonProto)
      ```

- Prototype Chain

  - Object remains at the top in the chain

- Encapsulation in JS :

  - public fields

  - public method

  - private fields : indicated with # in front of variable name

    ```
    class Counter {
      #count = 0

      click () {
        this.#count += 1;
      }
      getCount () {
        return this.#count.toLocaleString()
      }
    }
    const myCounter = new Counter();
    myCounter.click();
    console.log(myCounter.getCount());
    ```

  - private method

---

### Asynchronous JS

- AJAX : Asynchronous Javascript and XML

- Callback Hell : When we have a lot of nested callbacks in order to execute asynchronous tasks in sequence

  ```
  setTimeout(()=> {
    console.log("1 sec passed")
    setTimeout(()=> {
      console.log("2 sec passed")
      setTimeout(()=> {
        console.log("3 sec passed")
        .
        .
        .
      }, 3000)
    }, 2000)
  }, 1000)
  ```

- Promises : It solves the problem of callback hell (known as promisifying)

  ```
  An object that is used as a placeholder for the future result of an asynchronous operation
  or
  A container for a future value

  ```

  - Promise Example

    ```
    const lotteryPromise = new Promise(function (resolve, reject) {
      if (Math.random() >= 0.5) {
          resolve('You Win')
      } else {
          reject('You Lose')
      }
    })

    lotteryPromise
      .then(res => console.log(res))
      .catch(err => console.error(err))
    ```

  - Advantage of promises :

    - We no need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
    - Instead of nesting callbacks, we can chain promises for a sequence of a asynchronous operation : 'escaping callback hell'

  - Lifecycle of a promise :
    - Pending : Before the future value is available
    - Settled : Async task has finished
      - Fulfilled : Success
      - Rejected : An error happened

- Event Loop :

  ```
  console.log('Test start');
  setTimeout(() => console.log('0 sec timer'), 0);
  Promise.resolve('Resolved promise 1').then(res => console.log(res));
  Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
  });
  console.log('Test end');

  Output :
  Test start
  Test end
  Resolved promise 1 // due to microtask
  Resolved promise 2 // due to microtask
  0 sec timer
  ```

- Promise Combinators :

  - all - The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises.

    ```
    const get3Countries = async function (c1, c2, c3) {
        try {
            const data = await Promise.all([
                getJson(`https://restcountries.com/v2/name/${c1}`),
                getJson(`https://restcountries.com/v2/name/${c2}`),
                getJson(`https://restcountries.com/v2/name/${c3}`)
            ])

            console.log(data.map(d => d[0].capital))
        }
        catch (err) {
            console.error(err.message)
        }
    }

    get3Countries('portugal', 'canada', 'tanzania')
    ```

  - race - The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

    ```
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 'one');
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then((value) => {
      console.log(value);
      // Both resolve, but promise2 is faster
    });

    Output:
    "two"
    ```

  - allSettled - The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
    <br/>
    It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

  - any - Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

  ```
  const promise1 = Promise.reject(0);
  const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
  const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
  const promises = [promise1, promise2, promise3];

  Promise.any(promises).then((value) => console.log(value));

  output:
  "quick"
  ```

---

### Modern JS (ES6)

- Modules :

  - Reusable piece of code that encapsulates implementation details
  - Usually a standalone file, but it doesn't have to be (generally modules are stored in files, one module per file)

    ```
    module example :

    import {rand} as './math.js' // dependency
    .
    .
    export {score} // public api
    ```

- Script vs Module

  - Top level variables are scoped to module (in script, they're scoped as global)
  - Default mode is strict mode (in script, default mode is sloppy)
  - top level this points to undefined (in script, points to window object)
  - import and exports possible in modules (not possible in scripts)
  - HTML linking <script type="module"> (<script> for scripts)

- Polyfill : A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

- Pure Function : A pure function is a function which:

  - Given the same input, will always return the same output.
  - Produces no side effects (which means that it can’t alter any external state.).

    ```
    So, `console.log( double(5) );` is the same as `console.log(10);`
    ```

---

### QnA

##### Q. difference between "var" and "let"

```
  let -> block scope
  var -> function scope

  // var vs let
  let x = function () {
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

  x()
```

##### Q. "==" vs "==="

```
"==" compares only VALUE (does type coercion in background)
"===" compares value and type (Strict)
```

##### Q. let vs const

```
after assignment we can't reassign const variable

const c; // Uncaught SyntaxError: Missing initializer in const declaration
c = 10;
console.log(c)

const x = [1, 20, 2]
x.push(3)
console.log(x)

const y = [1, 20, 2]
y = [1, 2, 4] // Uncaught TypeError: Assignment to constant variable.
console.log(y)
```

##### Q. null vs undefined

```
if nothing assigned to variable then undefined, if null assigned then "null"
```

##### Q. prototypical inheritance

```
functions created using object prototype makes the function available to all the references

let car = function(model) {
    this.model = model
}

car.prototype.getModel = function() {
    return this.model
}

let toyota = new car('toyota')
console.log(toyota.getModel()) // inherited from parent
```

##### Q. fn declaration(or fn statement) vs fn expression

```
fn declaration is available even before definition. (fn expression is not available before definition)
also, generally function expression is passed as parameter in methods (as it stores like variable, behaves like variable)

console.log(funcD()) // function declaration /n undefined
console.log(funcE()) // Uncaught ReferenceError: Cannot access 'funcE' before initialization

function funcD() {
    console.log("function declaration")
}

let funcE = () => {
    console.log("function expression")
}
```

##### Q. Usecase of setTimeout()

```
// b c 0 1 2 3 4 a

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
```

##### Q. Closures in JS

```
when function returning another function, the holding function will hold its environment ( basically all the variable it needed)
or
closure: function along with lexical scope forms closure

Closures used in :
- Module design pattern
- Currying
- Function like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators

//closure: function along with lexical scope forms closure
function x() {
    var a = 7
    function y() {
        console.log(a) // fetch the value from lexical scope
    }

    y()
}

x()

// another example
function x() {
    var a = 7
    function y() {
        console.log(a) // fetch the value from lexical scope
    }

    return y
}

var z = x()
console.log(z) // closure : f y() { console.log(a) }
z() // 7
```

##### Q. Output of console.log([]+[])

```
empty space

console.log([] + []) // blank
console.log([] + {}) // [object Object]
console.log({} + []) // [object Object]
console.log({} + {}) // [object Object][object Object]
```

##### Q. Scenario : <br/>

```
function a() {
  return 'hello'
}

const sentence = a`h1`
console.log(sentence) // hello


Output : hello
```

##### Q. What's document.body.contentEditable = true

```
we can edit any website live
```

##### Q. Predict Output : <br/>

```
function y() {
  console.log(this.length) // 2 (size of argument)
}

var x = {
  length: 5,
  method: function (y) {arguments[0]();}
}
x.method(y, 1)


Output : 2
```

##### Q. Predict Output : <br/>

```
const x = 'constructor'
console.log(x[x](01)) // 1

const y = 'constructorss'
console.log(y[y](01)) // Uncaught TypeError: y[y] is not a function

Output :
1

uncaught typeerror

when x = 'constructor', x[x] is treated as a string function i.e. String()
```

##### Q. console.log(0.1+0.2)

```
"0.30000000000000004"
```

##### Q. Predict Output <br/>

```
console.log(("h1").**proto**) // String
console.log(("h1").**proto**.**proto**) // Object
console.log(("h1").**proto**.**proto**.**proto**) // null

Output:
String
Object
Null
```

##### Q. print argument length of any method

```
let x = function () {
  return [].slice.call(arguments).length
}
console.log(x(1, 2, 3, 4, 5)) // 5
```

##### Q. Predict Output

```
function x() {

    for (var i = 1; i <= 5; i++) {

        setTimeout(function () {
            console.log(i)
        }, 0)
    }
    console.log("message")
}

x()

Output :
message

6
6
6
6
6
(note: replace var with let to fix this)

Fix using closure:

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

x()
```

##### Q. What's Hoisting

```
process of accessing the variables/methods even before declaration

getName() // message
console.log(x) // undefined

var x = 7
function getName() {
  console.log("message")
}
```

##### Q. not defined vs undefined

```
if memory is not reserved for any variiable, that state is known as not defined.

If memory is reserved for any variable, then the default value is undefined
```

##### Q. call vs apply vs bind (Function Borrowing)

```
The call method allows for a method that was defined for one object to be assigned and called on by another object.

The only difference between the two is that call expects all parameters to be passed individually, whereas apply expects the second argument to be an array of all the parameters.

The bind function creates a new function whose this value can be set to the value provided during the function call, enabling the calling of a function with a specified this value (the first parameter to bind function)
or
bind returns a partial function which can be used later for function call


// Call and apply
var animal = {
  animalInfo: function(sound,food) {
    return this.name + " is " + this.age + " years old" + " . He makes the sound "+ sound + " and eats " + food
  }
}

var cat = {
  name : "Tom",
  age : 5
}
console.log(animal.animalInfo.call(cat,"meow", "fish"))
console.log(animal.animalInfo.apply(cat,["meow", "fish"]))

// Bind
var obj = {
    name:"Tom"
};

var info = function(a,b,c){
    return this.name + " likes to eat " + a + " " + b + " and " +c;
};

//creates a bound function that has same body and parameters
var bound = info.bind(obj,"Pasta");
console.log(bound("Donuts","Chips","Cake")); //calling the bound function later
```

##### Q. Rest and Spread operator

```
Spread Operator:

function sumOne(a, b) {
    return a + b
}
const myA = [5, 4]
console.log(sumOne(...myA))
// Spread Operator -> Takes group and spread in multiple values

Rest:

function sumtwo(...args) { // REST Operator
    let sum = 0;

    for (const arg of args) {
        sum += arg
    }
    return sum
}

console.log(sumtwo(2, 3, 1, 5, 7))
```

##### Q. Callback function

```
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

or

Callback function is stored in event table and will return to call stack when the right event occurs
```

##### Q. First Class Functions

```
the ability to use functions as values, passed as argument, returned from another method
```

##### Q. Reduce Method

```
It takes a callback function as a parameter and executes it for each element of the array, returning a single value at the end.

ans.reduce((sum, records) => sum +records.value,0)
```

##### Q. Currying Functions

```
Currying transforms a function into a sequence of nesting functions. Basically, it converts a function

from this:f(a,b,c)
to this: f(a)(b)(c)

It involves taking a function with multiple arguments and returning a sequence of nested functions, each taking a single argument, eventually resolving to a value.

normal function:
function multiply(a,b,c){
  return a*b*c
}
console.log(multiply(2,3,4))

Currying:
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log(multiply(2)(3)(4))
```

##### Q. Type Conversion vs Type Coercion

```
const inputYear = '1991'
console.log((Number)inputYear + 10) // 2001 (type conversion)
console.log(inputYear-10) // 1981 (type coercion)
```

##### Q. What are Falsy values

```
0, ''(empty String), NaN, undefined, null [5 falsy values in JS]
```

##### Q. Primitive types in JS

```
1. Number
2. String
3. Boolean
4. Undefined
5. null
6. Symbol
7. BigInt (ES2020)
```

##### Q. Transpiling / polyfilling

```
Transpiling is Converting modern JS code to ES5 once the app is complete inorder to support in old browsers. Babel is most useful tool for this.

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
```

##### Q. What is "use strict"

```
“Strict mode” is a more restricted version of JavaScript, where semantics are altered to make the code more resilient and secure.
In “strict mode,” some silent errors are changed to throw errors and disable some of the more confusing or undefined features in JavaScript.
```

##### Q. dot vs bracket in objects

```
const obj = {
firstName: 'Sumit'
}
console.log(obj.firstName) // dot operator
let name = 'Name'
console.log(obj['firstName']) // bracket
console.log(obj['first' + name]) // bracket
```

##### Q. Callback queue(Task Queue) vs Microtask queue

```
Callback queue: normal callbacks

Microtask: callback functions coming through promises, mutation observer
```

##### Q. Explain Throttling

```
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
```

##### Q. Explain Debouncing

```
The main difference between throttling and debouncing is that throttling executes the function at a regular interval,
while debouncing executes the function only after some cooling period.
Debouncing and throttling are not something provided by JavaScript itself.
```

##### Q. Async and Await in JS

```
async is used before functions to make them asynchronous. Any function that has async before it always returns a promise.

The await keyword can only be used inside async functions; otherwise, you get a syntax error. await makes the asynchronous function halt until the promise resolves.
```

##### Q. Pure functions

```
Pure functions are functions that take inputs and return the output value without affecting any variable outside of their scope.
```

##### Q. Higher-Order functions

```
Higher-Order functions accept functions as parameters or return a function as an output.
```

##### Q. Can (a== 1 && a ==2 && a==3) ever evaluate to true?

Yes, https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true

---

### Javascript projects

1.  Color Flipper <br/>
2.  Counter <br/>
3.  Review System <br />
4.  Navbar <br/>
5.  Sidebar <br/>
6.  Modal <br/>
7.  QnA section <br/>
8.  Menu Project <br/>
9.  Control Video <br/>
10. Scroll Project <br/>
11. Tabs <br/>
12. Countdown Timer <br/>
13. Lorem Ipsum Generator <br/>
14. Todo List <br/>
15. Slider <br/>
16. Slider-2 <br/>
17. Stripe submenus <br/>
