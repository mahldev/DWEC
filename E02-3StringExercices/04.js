const truncateString = (string, limit) => {
  const chars = string.split("");
  let res = "";

  for (let index = 0; index < chars.length; index++) {
    if (index < limit) {
      res += chars[index];
    }
  }
  return res;
};

console.log(truncateString("hola", 2));
