// Based on an array of numbers, use an arrow function to calculate its average.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const average = numbers.reduce((acc, number) => acc + number) / numbers.length;

console.log(average);
