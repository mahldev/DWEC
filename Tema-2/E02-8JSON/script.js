const db = {
  books: [
    {
      Title: "The Great Gatsby",
      Genre: "Classic",
      Author: ["F. Scott Fitzgerald"],
      Pages: 180,
      Published: "1925-04-10",
      Read: true,
      Website: "https://example.com/greatgatsby"
    },
    {
      Title: "To Kill a Mockingbird",
      Genre: "Fiction",
      Author: ["Harper Lee"],
      Pages: 324,
      Published: "1960-07-11",
      Read: true,
      Website: "https://example.com/tokillamockingbird"
    },
    {
      Title: "1984",
      Genre: "Dystopian",
      Author: ["George Orwell"],
      Pages: 328,
      Published: "1949-06-08",
      Read: true,
      Website: "https://example.com/1984"
    },
    {
      Title: "The Alchemist",
      Genre: "Fiction",
      Author: ["Paulo Coelho"],
      Pages: 197,

      Published: "1988-01-20",
      Read: true,
      Website: "https://example.com/alchemist"
    },
    {
      Title: "Harry Potter",
      Genre: "Fantasy",
      Author: ["J.K. Rowling"],
      Pages: 309,
      Published: "1997-06-26",
      Read: false,
      Website: "https://example.com/harrypotter"
    }
  ]
}

const root = document.getElementById('root')
const results = document.getElementById('results')
const books = ({ Title: title,
                 Genre: genre,
                 Author: author,
                 Pages : pages,
                 Published : published,
                 Read : read,
                 Website : website}) => {

  return `<div class="book-container">
            <h2 class="book-title">${title}</h2>
            <p class="book-author">${author.join(', ')}</p>
            <p class="book-genre">${genre}</p>
            <p class="book-pages">Pages: ${pages}</p>
            <p class="book-published">Published: ${published}</p>
            <p class="book-read" style="color: ${read ? '#0073e6' : 'red'}">${read ? 'Read' : 'Not Read'}</p>
            <p class="book-website"><a href="${website}" target="_blank">${website ? 'Website' : ''}</a></p>
          </div>`
}

root.innerHTML = db.books.map(books).reduce((acc, curr) => acc + curr)


const getNamesOfEachGenres = () => {
  const genres = db.books.map((book) => book.Genre);
  return Array.from(new Set(genres));
}

const getTitleOfBooksWithMoreThanNPages = (numberOfPages) => {
  return db.books
    .filter((book) => book.Pages > numberOfPages)
    .map((book) => book.Title)
}

const getTitleOfBooksPublishedMoreThanNYearsAgo = (numberYearsAgo) => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - numberYearsAgo);

  return db.books
    .filter((book) => new Date(book.Published) < currentDate)
    .map((book) => book.Title);
}
 
document.querySelector('#buttons button:nth-child(1)').addEventListener('click', () => {
  const uniqueGenres = getNamesOfEachGenres()
  results.innerHTML = uniqueGenres.map((genre) => `<p>${genre}</p>`).join('')
});

document.querySelector('#buttons button:nth-child(2)')
  .addEventListener('click', () => {
    const titles = getTitleOfBooksWithMoreThanNPages(300)
    results.innerHTML = titles.map((title) => `<p>"${title}"</p>`).join('')
})

document.querySelector('#buttons button:nth-child(3)')
  .addEventListener('click', () => {
    const titles = getTitleOfBooksPublishedMoreThanNYearsAgo(2);
    results.innerHTML = titles.map((title) => `<p>"${title}"</p>`).join('');
})