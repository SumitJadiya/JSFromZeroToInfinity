'use strict';

let modal = document.querySelector(".modal")
let overlay = document.querySelector(".overlay")
let btn_openModal = document.querySelectorAll(".show-modal")
let btn_closeModal = document.querySelector(".close-modal")
console.log(btn_openModal[0])


const openModal = () => {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeModal = () => {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for (let i = 0; i < btn_openModal.length; i++) {
    btn_openModal[i].addEventListener("click", () => {
        openModal()
    })
}

btn_closeModal.addEventListener("click", () => {
    closeModal()
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden"))
        closeModal()
})

