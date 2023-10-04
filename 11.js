const uncamelize = (inputString, separator = ' ') => {
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

console.log(
  "Prueba 1: uncamelize('') => ",
  uncamelize(''),
  " -- Salida esperada: ''"
)

console.log(
  "Prueba 2: uncamelize('helloWorld') => ",
  uncamelize('helloWorld'),
  " -- Salida esperada: 'hello World'"
)

console.log(
  "Prueba 3: uncamelize('thisIsAString') => ",
  uncamelize('thisIsAString'),
  " -- Salida esperada: 'this Is A String'"
)

console.log(
  "Prueba 4: uncamelize('anotherExampleString') => ",
  uncamelize('anotherExampleString'),
  " -- Salida esperada: 'another Example String'"
)

console.log(
  "Prueba 5: uncamelize('helloWorld','-') => ",
  uncamelize('helloWorld', '-'),
  " -- Salida esperada: 'hello-World'"
)

console.log(
  "Prueba 6: uncamelize('thisIsAString', '_') => ",
  uncamelize('thisIsAString', '_'),
  " -- Salida esperada: 'this_Is_A_String'"
)

console.log(
  "Prueba 7: uncamelize('anotherExampleString', '+') => ",
  uncamelize('anotherExampleString', '+'),
  " -- Salida esperada: 'another+Example+String'"
)

console.log(
  "Prueba 8: uncamelize('myVariable123IsGreat') => ",
  uncamelize('myVariable123IsGreat'),
  " -- Salida esperada: 'my Variable 123 Is Great'"
)

console.log(
  "Prueba 9: uncamelize('someTextWith#SpecialChars') => ",
  uncamelize('someTextWith#SpecialChars'),
  " -- Salida esperada: 'some Text With # Special Chars'"
)

console.log(
  "Prueba 10: uncamelize('   leadingSpacesRemoved') => ",
  uncamelize('   leadingSpacesRemoved'),
  " -- Salida esperada: 'leading Spaces Removed'"
)

console.log(
  "Prueba 11: uncamelize('trailingSpacesRemoved   ') => ",
  uncamelize('trailingSpacesRemoved   '),
  " -- Salida esperada: 'trailing Spaces Removed'"
)
