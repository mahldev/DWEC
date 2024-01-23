function MyDate() {
  this.date = new Date();
}

MyDate.prototype.toString = function () {
  const day = this.date.getDate();
  const month = this.date.getMonth() + 1;
  const year = this.date.getFullYear();

  return `${day}/${month}/${year}`;
};

const date = new MyDate();

console.log(date.toString());
console.log(Object.getPrototypeOf(date));
