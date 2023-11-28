const toggleHidden = (element) => (element.hidden = !element.hidden)
const getBookPageCount = (book) => parseInt(book.querySelector('.book-pages').textContent.replace('Pages: ', ''))
const getBookReleaseDate = (book) => new Date(book.querySelector('.book-published').textContent.replace('Published: ', ''))

export function resetFilters () {
  document
    .querySelectorAll('.book-container')
    .forEach((book) => (book.hidden = false))
}

export function applyGenreFilterStyle (genre) {
  Array.from(document.querySelectorAll('.book-container'))
    .filter(
      (book) =>
        !book.hidden && book.querySelector('.book-genre').textContent !== genre
    )
    .forEach(toggleHidden)
}

export function applyPageFilterStyle (minPages) {
  Array.from(document.querySelectorAll('.book-container'))
    .filter((book) => !book.hidden && getBookPageCount(book) > minPages)
    .forEach(toggleHidden)
}

export function applyPublicationYearFilterStyle (yearsAgo) {
  const cutoffYear = new Date()
  cutoffYear.setFullYear(cutoffYear.getFullYear() - yearsAgo)

  Array.from(document.querySelectorAll('.book-container'))
    .filter((book) => !book.hidden && getBookReleaseDate(book) < cutoffYear)
    .forEach(toggleHidden)
}
