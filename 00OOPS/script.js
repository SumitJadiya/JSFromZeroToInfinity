////////////////////////////////////////////////////////////////////////////////////////////
// Constructor function and the new Operator
////////////////////////////////////////////////////////////////////////////////////////////

// constructor function
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Problem 1: not a good practice to use this. copy will be created for each instance
    // this.age = function () {
    //     return new Date().getFullYear() - this.birthYear;
    // }
}

/*
    Steps (new operator)  v:
    1. new {} is created
    2. function is called, this = {}
    3. {} linked to prototype (__proto__)
    4. function automatically return {}
*/
// create new instance of Person
const john = new Person('John', 1990)
console.log(john)

console.log(john instanceof Person)

// to solve problem 1 - Prototype creates only one copy of age function
Person.prototype.age = function () {
    return new Date().getFullYear() - this.birthYear;
}

console.log(john.age())
console.log(john.__proto__) // prototype of john, Step 3 connect john's prototype to Person.prototype
console.log(john.__proto__ === Person.prototype) // true
// prototype of linked objects
console.log(Person.prototype.isPrototypeOf(john)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false

// has own property
Person.prototype.species = 'Human'
console.log(john.species)
console.log(john.hasOwnProperty('species')) // false

console.log(john.__proto__) // john's prototype
console.log(john.__proto__.__proto__) // object's prototype
console.log(john.__proto__.__proto__.__proto__) // null
console.log(Person.prototype.constructor) // Person

// Arrays
const arr = [3, 6, 4, 5, 6, 7, 6] // [] === new Array()
console.log(arr.__proto__) // Array.prototype
console.log(arr.__proto__ == Array.prototype) // Object.prototype

Array.prototype.unique = function () {
    return [...new Set(this)]
}
console.log(arr.unique())

// basic challange
const car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is accelerating to ${this.speed}`)
}

car.prototype.decelerate = function () {
    this.speed -= 5;
    console.log(`${this.make} is decelerating to ${this.speed}`)
}

const bmw = new car('BMW', 100)
bmw.accelerate()
bmw.decelerate()

////////////////////////////////////////////////////////////////////////////////////////////
// ES6 classes
////////////////////////////////////////////////////////////////////////////////////////////

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    // getter
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    set fullName(name) {
        console.log(name)
        if (name.includes(' ')) {
            this._fullName = name;
        }
    }

    get fullName() {
        return this._fullName;
    }

    // static method
    static hey() {
        console.log('Hello')
        console.log(this)
    }
}

const jessica = new PersonCl('jessica davis', 1996)
console.log(jessica)
console.log(jessica.calcAge())
console.log(jessica.age)
console.log(jessica.__proto__ === PersonCl.prototype) // true

PersonCl.prototype.greet = function () {
    return `Hello ${this.fullName}`
}

console.log(jessica.greet())

const walter = new PersonCl('Walter', 1980)
console.log(walter)

PersonCl.hey()

////////////////////////////////////////////////////////////////////////////////////////////
// Object.create
////////////////////////////////////////////////////////////////////////////////////////////
// only difference is constructor function is not required
const PersonProto = {
    calcAge: function () {
        return new Date().getFullYear() - this.birthYear;
    }
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = 'Steven'
steven.birthYear = 1990

////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance
////////////////////////////////////////////////////////////////////////////////////////////
const PersonInherit = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

PersonInherit.prototype.calcAge = function () {
    return new Date().getFullYear() - this.birthYear;
}

const StudentInherit = function (firstName, birthYear, major) {
    PersonInherit.call(this, firstName, birthYear)
    this.major = major;
}

// Linking prototypes
StudentInherit.prototype = Object.create(PersonInherit.prototype)

StudentInherit.prototype.introduce = function () {
    return `Hello, my name is ${this.firstName} and I am ${this.age} years old.`
}

const mike = new StudentInherit('Mike', 1990, 'Computer Science')
console.log(mike.introduce())
console.log(mike.calcAge())


////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
////////////////////////////////////////////////////////////////////////////////////////////
class PersonClES6 {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
    // Static method
    static hey() {
        console.log('Hey there 👋');
    }
}
class StudentClES6 extends PersonClES6 {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(
            `I'm ${2037 - this.birthYear
            } years old, but as a student I feel more like ${2037 - this.birthYear + 10
            }`
        );
    }
}
const martha = new StudentClES6('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();