/*In an array there are names of people. Create an arrow function that generates a
greeting for each of them. */

const names = ["Migue", "Emiliano", "Charlie", "Adrian", "Pablo"];

const greetings = names.map((name) => `Hola ${name}`);

console.log(greetings)