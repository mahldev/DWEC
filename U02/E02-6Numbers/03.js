function randomNumbersBetween (min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min) + min)
}

function predictsFortune () {
  const arrayNumberOfChildren = ['no children', 'one child', 'two children', 'three children', 'four children']
  const arrayNameOfCouple = ['Alice', 'Bob', 'Charlie', 'David', 'Emma']
  const arrayGeographicLocation = ['New York', 'Paris', 'Tokyo', 'Sydney', 'London']
  const arrayJobPosition = ['doctor', 'engineer', 'teacher', 'artist', 'chef']

  const NumberOfChildren = arrayNumberOfChildren[randomNumbersBetween(0, arrayNumberOfChildren.length)]
  const NameOfCouple = arrayNameOfCouple[randomNumbersBetween(0, arrayNameOfCouple.length)]
  const GeographicLocation = arrayGeographicLocation[randomNumbersBetween(0, arrayGeographicLocation.length)]
  const JobPosition = arrayJobPosition[randomNumbersBetween(0, arrayJobPosition.length)]

  return `You will be a ${JobPosition} in ${GeographicLocation}, and married to ${NameOfCouple} with ${NumberOfChildren}.`
}

console.log(predictsFortune())
