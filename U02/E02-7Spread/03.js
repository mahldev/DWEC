const sumOddNumbers = (...arguments) => {
  const oddNumbers = arguments.filter((number) => number % 2 !== 0);
  return oddNumbers.length > 0 ? oddNumbers.reduce((acc, cur) => acc + cur) : 0;
};

console.log(sumOddNumbers(2, 2, 1, 2, 3, 4));
