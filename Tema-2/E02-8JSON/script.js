/* eslint-disable no-return-assign */
const db = {
  books: [
    {
      Title: 'The Great Gatsby',
      Genre: 'Classic',
      Author: ['F. Scott Fitzgerald'],
      Pages: 180,
      Published: '1925-04-10',
      Read: true,
      Website: 'https://example.com/greatgatsby'
    },
    {
      Title: 'To Kill a Mockingbird',
      Genre: 'Fiction',
      Author: ['Harper Lee'],
      Pages: 324,
      Published: '1960-07-11',
      Read: true,
      Website: 'https://example.com/tokillamockingbird'
    },
    {
      Title: '1984',
      Genre: 'Dystopian',
      Author: ['George Orwell'],
      Pages: 328,
      Published: '1949-06-08',
      Read: true,
      Website: 'https://example.com/1984'
    },
    {
      Title: 'The Alchemist',
      Genre: 'Fiction',
      Author: ['Paulo Coelho'],
      Pages: 197,

      Published: '1988-01-20',
      Read: true,
      Website: 'https://example.com/alchemist'
    },
    {
      Title: 'Harry Potter',
      Genre: 'Fantasy',
      Author: ['J.K. Rowling'],
      Pages: 309,
      Published: '2022-06-26',
      Read: false,
      Website: 'https://example.com/harrypotter'
    }
  ]
}

const root = document.getElementById('root')
const bookCard = ({
  Title: title,
  Genre: genre,
  Author: author,
  Pages: pages,
  Published: published,
  Read: read,
  Website: website
}) => {
  return `<div class="book-container">
            <h2 class="book-title">${title}</h2>
            <p class="book-author">${author.join(', ')}</p>
            <p class="book-genre">${genre}</p>
            <p class="book-pages">Pages: ${pages}</p>
            <p class="book-published">Published: ${published}</p>
            <p class="book-read" style="color: ${read ? '#0073e6' : 'red'}">${
    read ? 'Read' : 'Not Read'
  }</p>
            <p class="book-website"><a href="${website}" target="_blank">${
    website ? 'Website' : ''
  }</a></p>
          </div>`
}

root.innerHTML = db.books.map(bookCard).reduce((acc, curr) => acc + curr)

const toggleHidden = (element) => element.hidden = !element.hidden
const resetFilters = () => document.querySelectorAll('.book-container').forEach((book) => book.hidden = false)

const getBookPageCount = (book) => parseInt(book.querySelector('.book-pages').textContent.replace('Pages: ', ''))
const getBookReleaseDate = (book) => new Date(book.querySelector('.book-published').textContent.replace('Published: ', ''))

function applyGenreFilterStyle (genre) {
  Array.from(document.querySelectorAll('.book-container'))
    .filter(book => !book.hidden && book.querySelector('.book-genre').textContent !== genre)
    .forEach(toggleHidden)
}

function applyPageFilterStyle (minPages) {
  Array.from(document.querySelectorAll('.book-container'))
    .filter(book => !book.hidden && getBookPageCount(book) > minPages)
    .forEach(toggleHidden)
}

function applyPublicationYearFilterStyle (yearsAgo) {
  const cutoffYear = new Date()
  cutoffYear.setFullYear(cutoffYear.getFullYear() - yearsAgo)

  Array.from(document.querySelectorAll('.book-container'))
    .filter(book => !book.hidden && getBookReleaseDate(book) < cutoffYear)
    .forEach(toggleHidden)
}

document
  .querySelector('#buttons button.reset')
  .addEventListener('click', resetFilters)

document
  .querySelector('#buttons button.genre-filter')
  .addEventListener('click', () => {
    const genre = 'Fiction'
    applyGenreFilterStyle(genre)
  })

document
  .querySelector('#buttons button.pages-filter')
  .addEventListener('click', () => {
    const minPages = 300
    applyPageFilterStyle(minPages)
  })

document
  .querySelector('#buttons button.publication-year-filter')
  .addEventListener('click', () => {
    const yearsAgo = 2
    applyPublicationYearFilterStyle(yearsAgo)
  })
