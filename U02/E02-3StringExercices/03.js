const mapNextChar = (string) => {
  const chars = string.split("");

  return chars.map((c) => String.fromCharCode(c.charCodeAt(0) + 1)).join("");
};

const nextCharInAlphabet = (string) => {
  const characters = string.split(" ");

  return characters.map(mapNextChar).join(" ");
};

console.log(nextCharInAlphabet("Esto es una prueba z"));
