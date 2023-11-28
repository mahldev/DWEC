import {
  applyGenreFilterStyle,
  applyPageFilterStyle,
  applyPublicationYearFilterStyle,
  resetFilters
} from './filters.js'

const buttResetfilter = document.getElementById('reset')
const buttGenrefilter = document.getElementById('genre-filter')
const buttPagesfilter = document.getElementById('pages-filter')
const buttYearsfilter = document.getElementById('publication-year-filter')

buttResetfilter.addEventListener('click', resetFilters)

buttGenrefilter.addEventListener('click', () => {
  const genre = 'Fiction'
  console.log('hola')
  applyGenreFilterStyle(genre)
})

buttPagesfilter.addEventListener('click', () => {
  const minPages = 300
  applyPageFilterStyle(minPages)
})

buttYearsfilter.addEventListener('click', () => {
  const yearsAgo = 2
  applyPublicationYearFilterStyle(yearsAgo)
})
