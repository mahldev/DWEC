// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

const sum = (...arguments) => arguments.reduce((acc, cur) => acc + cur);

console.log(sum(2, 2));