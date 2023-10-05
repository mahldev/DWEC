const makeFirstLetterUpperCase = (inputWordsArray) => {
  const words = inputWordsArray.split(' ')

  if (words[0] === '') return ''

  return words
    .map((word) => {
      const [firstChar, ...rest] = word
      return firstChar.toUpperCase().concat(...rest)
    })
    .join('')
}

const makeFirstLetterLowerCase = (inputWord) => {
  if (inputWord === '') return ''

  const [firstChar, ...rest] = inputWord
  const res = firstChar.toLowerCase().concat(...rest)

  return res
}

const camelize = (inputString) => {
  const cleanString = inputString.trim().replace(/\s+/g, ' ')
  const [firstWord, ...rest] = cleanString.split(' ')

  return `${makeFirstLetterLowerCase(firstWord)}${makeFirstLetterUpperCase(rest.join(' '))}`
}

console.log(camelize('JavaScript Exercises'))
console.log(camelize('JavaScript exercises'))
console.log(camelize('JavaScriptExercises'))
console.log(camelize('Folder JavaScript Exercises '))
