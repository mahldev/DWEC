const capitalizeWords = (inputString) => {
  const cleanString = inputString.trim().replace(/\s+/g, ' ')
  const wordArray = cleanString.split(' ')

  return wordArray
    .map((word) => {
      const [firstChar, ...rest] = word
      return firstChar.toUpperCase().concat(...rest)
    })
    .join(' ')
}

console.log(capitalizeWords('js   string exercises '))
