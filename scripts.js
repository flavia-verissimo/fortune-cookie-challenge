
const button = document.querySelector("#cookie-button")
const retryButton = document.querySelector("#retry-button")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

button.addEventListener('click', clickCk)

function clickCk() {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}

retryButton.addEventListener('click', handleRetryClick)

function handleRetryClick() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}
