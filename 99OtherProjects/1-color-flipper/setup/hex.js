// generate random color code 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = document.querySelector(".color")
let btn = document.querySelector(".btn-hero")

document.body.style.backgroundColor = color.innerHTML

btn.addEventListener("click", () => {

    color.textContent = generateHexColor()
    document.body.style.backgroundColor = generateHexColor()
})

const generateHexColor = () => {
    let val = "#"

    for (let index = 0; index < 6; index++) {
        val += hex[Math.floor(Math.random() * hex.length)]
    }

    return val
}