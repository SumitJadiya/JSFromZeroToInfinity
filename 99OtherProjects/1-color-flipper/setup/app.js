const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let color = document.querySelector(".color")
let btnAction = document.querySelector(".btn-hero")

document.body.style.backgroundColor = color.innerHTML

btnAction.addEventListener("click", () => {
    let random = getRandomNumber()
    color.textContent = colors[random]
    document.body.style.backgroundColor = colors[random]
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * 4)
}