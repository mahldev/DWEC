/*
Based on an array of numbers, create another array whose elements are the positive
numbers of the first one.
    a) Use a traditional function definition and array manipulation technique.
    b) Refactor the previous code, to use an arrow function and the array mapping function.
*/

const numbers = [0, -1, 2, -3, 4, 5, 6, 7, 8, -9, -10];

function isPositive(number) {
  return number >= 0;
}

function traditionalManipulationArray(list) {
  const newList = [];
  for (const number of numbers) {
    if (isPositive(number)) newList.push(number);
  }
  return newList;
}

const traditionalPositiveNumbers = traditionalManipulationArray(numbers);

console.log(traditionalPositiveNumbers);
const positiveNumbers = numbers.filter((number) => number >= 0);

console.log(positiveNumbers);
