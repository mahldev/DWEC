const $body = document.querySelector('body')
const getRandomNumber = () => Math.floor(Math.random() * 255)

function changeBodyColor () {
  $body.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`
}

$body.addEventListener('dblclick', changeBodyColor)