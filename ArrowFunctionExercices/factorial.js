// Creates a function declaration to calculate the factorial of a number.
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Convert it into an arrow function with a single expression.
const factorialArrow = (num) => (num === 1 ? 1 : num * factorial(num - 1));

// Convert it into an arrow function with a block body
const factorialArrowWithBlockBody = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));
console.log(factorialArrow(5));
console.log(factorialArrowWithBlockBody(5));
