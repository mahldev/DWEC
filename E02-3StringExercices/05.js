const abbrevName = (string = "") => {
  const [name, ...rest] = string.split(" ");
  const surnames = rest.map(sur => sur.charAt(0).concat(".")).join("")

  return `${name} ${surnames}`;
};

console.log(abbrevName("Robin Sal Fur Mave"));
console.log(abbrevName());
console.log(abbrevName(""));
