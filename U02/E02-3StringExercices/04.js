const validateString = (inputString) => {
  return typeof inputString !== "string" || Number.isNaN(inputString)
    ? ""
    : inputString;
};

const truncateString = (inputString = "", limit = 0) => {
  const cleanString = validateString(inputString);
  const characters = cleanString.split("");

  return characters.filter((_, index) => index < limit).join("");
};

console.log(truncateString("hola ", 6));
console.log(truncateString("hola hola", 6));
console.log(truncateString(6));
console.log(truncateString(6, 6));
console.log(truncateString("", " aasd"));
console.log(truncateString("", " aasd"));
console.log(truncateString("2134234", 1));
