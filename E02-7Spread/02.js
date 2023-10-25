const sumOnlyNumbers = (...arguments) => {
  const onlyNumbersList = arguments.filter(element => typeof element === 'number') 
  console.log(`You passed ${arguments.length} arguments to the function`);
  return onlyNumbersList.reduce((acc, cur) => acc + cur)
}

console.log(`sum: ${sumOnlyNumbers(1,"asd", "asda", 1)}`);
