const square = document.getElementById('square')
const inputContianer = document.getElementById('input-container')
const isActive = (radioButton) => radioButton.checked
const createInput = () => document.createElement('input') 

square.addEventListener('change', () => {
  
  Array.from({ length: 2 }, createInput)
    .forEach(input => {
      input.type = 'number'
      input.className = 'squareInput'
      inputContianer.append(input)
    })

  
})