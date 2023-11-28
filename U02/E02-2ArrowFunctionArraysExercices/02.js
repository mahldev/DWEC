/*
Based on an array of numbers, create another array whose elements are the square of
each of the elements of the first array.
    a) Use a traditional function definition and array manipulation technique.
    b) Refactor the previous code, to use an arrow function and the array mapping function. 
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a)
function Square(number) {
  return number ** 2;
}

function traditionalFunction(list) {
  const newList = [];
  for (const number of numbers) {
    newList.push(Square(number));
  }
  return newList;
}

const traditionalManipulationArray = traditionalFunction(numbers);
console.log(traditionalManipulationArray);

// b)
const squareNumbers = numbers.map((number) => number ** 2);

console.log(squareNumbers);
