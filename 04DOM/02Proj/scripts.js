var red = document.querySelector(".red")
var cyan = document.querySelector(".cyan")
var violet = document.querySelector(".violet")
var orange = document.querySelector(".orange")
var pink = document.querySelector(".pink")

var center = document.querySelector(".center")

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

/*
red.addEventListener("mouseenter", () => {
    center.style.backgroundColor = getBGColor(red)
    center.innerText = getBGColor(red)
})
*/

const magicColorChanger = (element, color) => {

    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color
    })
}

magicColorChanger(red, getBGColor(red))
magicColorChanger(cyan, getBGColor(cyan))
magicColorChanger(violet, getBGColor(violet))
magicColorChanger(orange, getBGColor(orange))
magicColorChanger(pink, getBGColor(pink))
