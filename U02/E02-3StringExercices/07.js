const stringParameterize = (inputString) => {
  return inputString.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')
}

console.log(stringParameterize('Robin Singh from USA.'))
