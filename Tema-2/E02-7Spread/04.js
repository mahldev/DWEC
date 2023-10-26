const combineToArrays = (arrayA, arrayB) => {
  return [...arrayA, ...arrayB]
}

const first = [{name: 'Pedro'}]
const second = [{name: 'Juan'}]

const combineArray = combineToArrays(first, second)

combineArray[0].surname = 'Guerra'

console.log(first[0].surname);

