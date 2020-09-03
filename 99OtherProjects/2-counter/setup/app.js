let count = 0;

let value = document.querySelector("#value")
let btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;

        if (style.contains('decrease'))
            count--;
        if (style.contains('reset'))
            count = 0
        if (style.contains('increase'))
            count++

        if (count > 0)
            value.style.color = "green"
        if (count === 0)
            value.style.color = "black"
        if (count < 0)
            value.style.color = "red"
        value.textContent = count
    })
})
