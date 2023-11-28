export function bookCard ({
  Title: title,
  Genre: genre,
  Author: author,
  Pages: pages,
  Published: published,
  Read: read,
  Website: website
}) {
  return (`<div class="book-container">
              <h2 class="book-title">${title}</h2>
              <p class="book-author">${author.join(', ')}</p>
              <p class="book-genre">${genre}</p>
              <p class="book-pages">Pages: ${pages}</p>
              <p class="book-published">Published: ${published}</p>
              <p class="book-read" style="color: ${read ? '#0073e6' : 'red'}">
                                                  ${read ? 'Read' : 'Not Read'}</p>
              <p class="book-website"><a href="${website}">${website ? 'Website' : ''}</a></p>
          </div>`
  )
}
