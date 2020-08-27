var courses = [{
    name: "Complete ReactJS Course",
    price: "2.3"
}, {
    name: "Complete VueJs Course",
    price: "5.7"
}, {
    name: "Complete Angular Course",
    price: "2.2"
}, {
    name: "Complete MERN Course",
    price: "2.8"
}];

// looping and generating list
function generateList() {
    const unorderedList = document.querySelector('.list-group')
    unorderedList.innerHTML = "";
    courses.forEach(course => {
        // creating Element
        const li = document.createElement("li")  // <></>
        li.classList.add("list-group-item")

        // creating text node
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        // creating Element
        const span = document.createElement("span")
        span.classList.add("float-right")
        // creating text node
        const price = document.createTextNode('$' + course.price)
        span.appendChild(price)

        // appending the element
        li.append(span)
        unorderedList.append(li)
    })



    /*
    print values using map

    courses.map(course => {
        console.log(course.name + " " + course.price)
    })

    */
}


// generateList()
window.addEventListener("load", generateList)

// Sort Increaing Order
const btn = document.querySelector('.sort-btn')
btn.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateList()
})

// Sort decreasing Order
const revBtn = document.querySelector('.rev-sort-btn')
revBtn.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price)
    generateList()
})

// Add course to list
let course_name = document.querySelector(".course_name")
let price = document.querySelector(".price")

var addCourseToList = (course_name, course_price) => {
    var obj = {
        name: course_name,
        price: course_price
    }

    courses.push(obj)
}

const submitBtn = document.querySelector('.submit-btn')
submitBtn.addEventListener("click", () => {

    addCourseToList(course_name.value, price.value)
    generateList()
    course_name.value = ""
    price.value = ""
})