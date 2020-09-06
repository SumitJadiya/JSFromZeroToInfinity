let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")
const slides = document.querySelectorAll(".slide");

let counter = 0

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

prevBtn.addEventListener("click", () => {
    counter--
    moveCorousal()
})

nextBtn.addEventListener("click", () => {
    counter++
    moveCorousal()
})

const moveCorousal = () => {

    if (counter > 0)
        prevBtn.style.display = "block"
    else
        prevBtn.style.display = "none"

    if (counter < slides.length - 1)
        nextBtn.style.display = "block"
    else
        nextBtn.style.display = "none"

    slides.forEach(slide => {
        console.log("counter -> ", counter)
        slide.style.transform = `translateX(-${counter * 100}%)`
        console.log(slide.style.transform)
    })
}
prevBtn.style.display = "none";