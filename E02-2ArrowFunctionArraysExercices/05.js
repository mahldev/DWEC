// Based on an array of numbers, use an arrow function to calculate the greatest number.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greatestNumber = numbers.reduce((number1, number2) =>
  Math.max(number1, number2)
);

console.log(greatestNumber);
