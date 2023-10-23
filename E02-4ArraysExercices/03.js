const array1 = [1, 2, 4, 5, 6];
const array2 = [...array1];

let iterator = 0;

console.log(array1.every((value) => value === array2[iterator++]));
