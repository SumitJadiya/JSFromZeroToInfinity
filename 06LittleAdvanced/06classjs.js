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
}

module.exports = User

// more on objects
const rock = new User("rock", "rock@rock.com")
console.log(rock.getInfo())
rock.enrolledCourse("React")
console.log(rock.getCourseList())
console.log(rock.courseList) // undefined
