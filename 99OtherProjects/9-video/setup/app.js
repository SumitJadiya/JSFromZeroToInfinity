// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

let videoContainer = document.querySelector(".video-container")
let switchBtn = document.querySelector(".switch-btn")
switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("slide")
    videoContainer.paused ? videoContainer.play() : videoContainer.pause()
})

// hide preloader
let preloader = document.querySelector(".preloader")

// as soon as website data is loaded, this will be triggered
window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader")
})

// setTimeout(() => {
//     preloader.classList.add("hide-preloader")
// }, 1000);