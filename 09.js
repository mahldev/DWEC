const toggleCase = (char) => {
  return char === char.toLowerCase()
    ? char.toUpperCase()
    : char.toLowerCase()
}

const swapCase = (inputString) => {
  const characters = inputString.split('')

  return characters
    .map(toggleCase)
    .join('')
}

console.log(swapCase('AaBbc'))
