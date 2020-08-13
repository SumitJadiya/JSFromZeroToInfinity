var red = document.querySelector(".red")
var cyan = document.querySelector(".cyan")
var violet = document.querySelector(".violet")
var orange = document.querySelector(".orange")
var pink = document.querySelector(".pink")

var center = document.querySelector(".center")

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

var color = document.querySelectorAll(".color")

document.querySelector(".color").addEventListener("click", function () {

    center.innerText = getBGColor(color[1])
}.bind(color))