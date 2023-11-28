export const uncamelize = (inputString, separator = ' ') => {
  const cleanString = inputString.trim().replace(/\s+/g, '')
  const matches = cleanString.match(/[A-Z]|\d+\b/g)
  const res = []

  if (matches === null) return ''

  for (let index = 0; index < matches.length; index++) {
    if (index === 0) {
      res.push(cleanString.slice(0, cleanString.indexOf(matches[index])))
    }
    if (index < matches.length - 1) {
      res.push(
        cleanString.slice(
          cleanString.indexOf(matches[index]),
          cleanString.indexOf(matches[index + 1])
        )
      )
    }
    if (index === matches.length - 1) {
      res.push(cleanString.slice(cleanString.indexOf(matches[index])))
    }
  }
  return res.join(separator)
}

// console.log(uncamelize('   helloWorld AsdanoestaPagado', '-'))

