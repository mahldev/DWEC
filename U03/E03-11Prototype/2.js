function myNumber(number) {
  this.number = number;
  this.toString = () => `Number: ${this.number}`;
}

const theNumber = new myNumber(42);

console.log(theNumber.toString());
