// Write your numbers code in this file!
let numberOneButton = document.getElementById('number-one')
numberOneButton.addEventListener('click', getFact)

function getFact() {
  fetch(`http://numbersapi.com/1/trivia`)
  .then(res => res.text())
  .then(text => postFact(text))
}

function postFact(text) {
  document.getElementById('one-facts').innerText = text
}

let inputField = document.getElementById("pick-a-number")
inputField.addEventListener('change', getMathFact)

inputField.addEventListener('keydown', function(e) {
    if (parseInt(e.key).toString() === "NaN" && e.key !== "Enter" && e.key !== "Backspace") {
      e.preventDefault()
    }
  })

function getMathFact(){
  fetch(`http://numbersapi.com/${inputField.value}/math`)
  .then(res => res.text())
  .then(text => postMathFact(text));
  inputField.value = ""
}

function postMathFact(text) {
  document.getElementById('random-math-fact').innerText = text
}

document.addEventListener("DOMContentLoaded", getYearFact)

function getYearFact(){
    let year = 2019
    if (year >= 0) {
      setInterval(function () {
        fetch(`http://numbersapi.com/${year}/year`)
          .then(res => res.text())
          .then(text => postYearFact(text));
        year = year - 1}, 5000)
    }
}

function postYearFact(text){
  document.getElementById('year-history').innerText = text
}

let allNumbersButton = document.getElementById('all-numbers-button')
allNumbersButton.addEventListener('click', getAllNumbers)

function getAllNumbers() {
  for (let i=0; i<100; i++) {
    fetch('http://numbersapi.com/random/trivia')
    .then(res => res.text())
    .then(text => postAllNumbers(text))
  }
}

function postAllNumbers(text) {
  document.getElementById('all-the-numbers').innerHTML += `<p>${text}</p>`
}
