const form = document.querySelector('form')
const emailInput = document.getElementById('email').value

const validateEmail = (email) => email.includes('@')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  validateEmail(emailInput) ? emailInput = '' : alert('Invalid email')
})