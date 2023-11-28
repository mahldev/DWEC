const studentArray = [
  "Ana García Fernández",
  "Juan Pérez Ramirez",
  "María López",
  "Carlos Rodríguez Torres",
  "Sofía Martínez",
  "Pedro Sánchez Martínez",
  "Luisa Torres",
  "Miguel Fernández",
  "Laura González Pérez",
  "Diego Ramirez",
];

const sortArrayBysurnames = (inputArray) => {
  return inputArray.sort((ln1, ln2) => {
    const [,...surname1] = ln1.split(" ");
    const [,...surname2] = ln2.split(" ");

    return surname1[0].localeCompare(surname2[0]);
  });
};

console.log(sortArrayBysurnames(studentArray));
