((str1, str2) => {
  console.log(" '" + str1 + "' '" + str2 + "' ");
  console.log(str1 + "\n" + str2);
})("hello", "world");

((str1, str2) => {
  console.log(`'${str1}' '${str2}'`);
  console.log(`${str1}\n${str2}`);
})("hello", "world");
