import { bookCard } from './bookCard.js'
import {} from './events.js'

async function getBooks () {
  return fetch('./books.json').then((response) => response.json())
}

function render (data) {
  const root = document.getElementById('root')
  root.innerHTML = data.map(bookCard).reduce((acc, curr) => acc + curr)
}

render(await getBooks())
