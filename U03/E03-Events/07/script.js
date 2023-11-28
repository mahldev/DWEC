const table = document.querySelector('table tbody')
const buttonAddColumnUp = document.querySelector(".control-columns .btn-control:nth-child(1)")
const buttonAddColumnDown = document.querySelector(".control-columns .btn-control:nth-child(2)")
const buttonAddRowLeft = document.querySelector(".control-rows .btn-control:nth-child(1)")
const buttonAddRowRight = document.querySelector(".control-rows .btn-control:nth-child(2)")
const emojis = ["🍕","🍔","🍟","🌭","🍿","🌭","🥚","🥐","🥙","🍗","🥩","🍖","🍠","🍙"]
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]
const createTd = () => (td => (td.innerText = getRandomEmoji(), td))(document.createElement('td'))


const createRow = () => {
  const numberOftd = document.querySelectorAll('.container table:first-child tr:first-child td').length
  const tds = Array.from({ length: numberOftd }, createTd)
  const tr = document.createElement('tr')

  tr.append(...tds)
  return tr
}

buttonAddColumnUp.addEventListener('click', () => table.prepend(createRow()))
buttonAddColumnDown.addEventListener('click', () => table.append(createRow()))
buttonAddRowLeft.addEventListener('click', () => {
  document
    .querySelectorAll('.container table tbody tr')
    .forEach(tr => tr.prepend(createTd()))
})
buttonAddRowRight.addEventListener('click', () => {
  document
  .querySelectorAll('.container table tbody tr')
  .forEach(tr => tr.append(createTd()))
})