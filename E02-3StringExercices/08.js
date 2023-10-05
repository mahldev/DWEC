const capitalizeWords = (inputString) => {
  const wordArray = inputString.split(' ')

  return wordArray
    .map((word) => {
      const [firstChar, ...rest] = word
      return firstChar.toUpperCase().concat(...rest)
    })
    .join(' ')
}

console.log(capitalizeWords('js string exercises'))
