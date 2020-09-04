// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

let date = document.querySelector(".date")
let navToggle = document.querySelector(".nav-toggle")
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// ********** set date ************
date.textContent = (new Date()).getFullYear()

// ********** close links ************
navToggle.addEventListener("click", () => {
    linksContainer.classList.toggle("show-links");

    const linkHeight = links.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height

    console.log(linkHeight)
    console.log(containerHeight)

    containerHeight === 0 ? linksContainer.style.height = `${linkHeight}px` : linksContainer.style.height = `0px`

    console.log(linksContainer.style.height)
})

// ********** fixed navbar ************
window.addEventListener("scroll", () => {
    if (window.pageYOffset > navbar.getBoundingClientRect().height) {
        navbar.classList.add("fixed-nav")
        topLink.style.visibility = "visible"
        topLink.style.zIndex = 100
    }
    else {
        navbar.classList.remove("fixed-nav")
        topLink.style.visibility = "hidden"
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault()
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.querySelector("#" + id)
        let position = element.offsetTop

        const containerHeight = linksContainer.getBoundingClientRect().height
        const navbarHeight = navbar.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("fixed-nav")

        if (!fixedNav)
            position -= navbarHeight

        if (navbarHeight > 82)
            position += containerHeight

        window.scrollTo({
            left: 0,
            top: position - navbarHeight
        })

        linksContainer.style.height = 0;
    })
})
