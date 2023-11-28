/* eslint-disable no-undef */

function promptForValidNumber () {
  let inputNumber = 'not a number'

  while (isNaN(inputNumber)) {
    inputNumber = prompt('Introduzca un numero')
  }

  return inputNumber === '' || inputNumber === ' '
    ? null
    : inputNumber
}

const button = document.getElementById('button')

button.addEventListener('click', () => {
  alert(promptForValidNumber())
})
