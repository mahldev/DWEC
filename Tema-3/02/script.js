const button = document.querySelector('main div button')
const headers = document.getElementById('headers')
const hCount = () => document.querySelectorAll('h1, h2, h3, h4, h5, h6').length
const createHElement = () => document.createElement(`h${Math.min(hCount() + 1, 6)}`)

button.addEventListener('click', () => {
  const content = 'This is a example test'
  const newH = createHElement()

  newH.append(content)
  headers.append(newH)
})