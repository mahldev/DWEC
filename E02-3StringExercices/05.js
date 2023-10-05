const abbrevName = (string) => {
  const [name, surname, ...rest] = string.split(" ");

  return `${name} ${surname.charAt(0).concat(".")}`;
};

console.log(abbrevName("Robin Singh"));
