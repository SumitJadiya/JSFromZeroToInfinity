'use strict';

let number
let score;
let highScore = 0;

const btn_check = document.querySelector(".check")
const btn_again = document.querySelector(".again")
const txt_message = document.querySelector(".message")
const lbl_score = document.querySelector(".score")
const lbl_highscore = document.querySelector(".highscore")
const txt_guess = document.querySelector(".guess")

const decrementScore = () => score--;
const matchNumbers = num => num === number;

const refreshScore = () => {
    lbl_score.textContent = score;
}

const init = () => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1
    document.body.style.backgroundColor = "#222"
    setMessage("Start guessing...")
    refreshScore()
}

const setHighScore = () => {
    if (score > highScore)
        highScore = score

    lbl_highscore.textContent = highScore
}

const setMessage = (msg) => {
    txt_message.textContent = msg
}

const numberLowError = () => {
    decrementScore()
    setMessage("number too low")
    refreshScore()
}

const numberHighError = () => {
    decrementScore()
    setMessage("number too high")
    refreshScore()
}

const showAlert = num => {

    if (num < number)
        numberLowError()
    else
        numberHighError()
}

const displayResult = () => {
    setMessage("Correct Answer!")
    document.body.style.backgroundColor = "#60b347"
    setHighScore()
}

btn_check.addEventListener("click", () => {
    let txt_guess_val = Number(txt_guess.value)

    if (matchNumbers(txt_guess_val))
        displayResult()
    else
        showAlert(txt_guess_val)
})

btn_again.addEventListener("click", () => {
    init()
})

init()