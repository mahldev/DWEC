const square = document.getElementById('square')
const isActive = (radioButton) => radioButton.checked


square.addEventListener('change', () => {
  console.log(isActive(square));
})