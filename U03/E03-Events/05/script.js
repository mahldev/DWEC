const form = document.querySelector('form')
const table = document.querySelector('table')
const colorize = document.getElementById('colorize-button')
const clear = document.getElementById('clear-button')
const tableButtons = document.getElementById('buttons-table')
const h1 = document.querySelector('h1')

const toggleHidden = (element) => element.forEach(e => e.hidden = !e.hidden)
const createTr = () => document.createElement('tr')
const createTd = () => document.createElement('td')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const rows = document.getElementById('rows').value
  const columns = document.getElementById('columns').value
  const width = document.getElementById('width').value
  const height = document.getElementById('height').value

  toggleHidden([form, table, colorize, clear, tableButtons, h1])

  const trs = Array.from({ length: rows }, createTr) 

  trs.forEach(tr => {
    const tds = Array.from({ length: columns }, createTd)
    tds
      .map(td => {
        td.style.width = `${width}px`
        td.style.height = `${height}px`
        return td
      })
      .forEach(td => tr.append(td))
  })
    
  trs.forEach(td => table.append(td))

})

colorize.addEventListener('click', () => {
  const colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(128, 0, 128)'
  ]
  
  document.querySelectorAll('td').forEach(
    (td, index) => td.style.backgroundColor = colors[index % colors.length]
  )
})

clear.addEventListener('click', () => {
  location.reload()
})