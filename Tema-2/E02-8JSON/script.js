import { bookCard } from './bookCard.js'
import {} from './events.js'

const root = document.getElementById('root')

async function getBooks () {
  const response = await fetch('./books.json')
  return await response.json()
}

(async () => {
  const books = await getBooks()
  root.innerHTML = books.map(bookCard).reduce((acc, curr) => acc + curr)
})()
