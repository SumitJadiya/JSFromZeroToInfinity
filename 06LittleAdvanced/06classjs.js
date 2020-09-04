class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    #courseList = [] // making courselist private

    getInfo() {
        return { name: this.name, email: this.email }
    }

    enrolledCourse(name) {
        this.#courseList.push(name)
    }

    getCourseList() {
        return this.#courseList
    }

    static login() { // static -> private method
        return "You're logged in"
    }
}

// subclass using inheritance
class SubClass extends User {
    constructor(user, email) {
        super(user, email)
    }
    getAdminInfo() {
        return "I am subadmin"
    }
    login() { // static -> private method
        return "You're logged in from subclass"
    }
}

module.exports = User

// more on objects
const rock = new User("rock", "rock@rock.com")
console.log(rock.getInfo())
rock.enrolledCourse("React")
console.log(rock.getCourseList())
console.log(rock.courseList) // undefined

// subclass object
const tom = new SubClass("tom", "tom@jerry.com")
console.log(tom.getAdminInfo())
// console.log(tom.login()) --> This will throw error
console.log(tom.login())
console.log(tom.getInfo())