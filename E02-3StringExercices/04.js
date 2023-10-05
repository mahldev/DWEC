const truncateString = (string, limit) => {
  const chars = string.split("");
  let res = "";

  for (let index = 0; index < limit; index++) {
      res += chars[index];
  }
  return res;
};

console.log(truncateString("hola", 2));
