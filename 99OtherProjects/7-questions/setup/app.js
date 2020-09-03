//using selectors inside the element

/*
let questions = document.querySelectorAll(".question")

questions.forEach(question => {

    const btn = question.querySelector(".question-btn")

    btn.addEventListener("click", () => {

        questions.forEach(item => {
            if (item !== question)
                item.classList.remove("show-text")
        })

        question.classList.toggle("show-text")
    })
})
*/

// traversing the dom

let questionBtns = document.querySelectorAll(".question-btn")

questionBtns.forEach(questionBtn => {

    questionBtn.addEventListener("click", e => {
        const parentElement = e.currentTarget.parentElement.parentElement
        parentElement.classList.toggle("show-text")
    })
})
