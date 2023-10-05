const holaNuria = "hola nueria";

holaNuria
  .split("")
  .map((str) => str.toLocaleLowerCase())
  .forEach((c) => console.log(c));
