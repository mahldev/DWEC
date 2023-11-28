const students = {
  students: [
    {
      registrationNum: "S01",
      name: "Jon Doe",
      age: 21,
      emancipated: true,
      photo: "jon.jpg",
      previousGrades: [7, 8, 10],
    },
    {
      registrationNum: "S02",
      name: "Joe Foo",
      age: 18,
      emancipated: false,
      photo: "",
      previousGrades: [7, 6, 6],
    },
    {
      registrationNum: "S03",
      name: "Jane Bar",
      age: 20,
      emancipated: false,
      previousGrades: [],
    },
  ],
};

const root = document.getElementById('root')

const stundentCard = ({ registrationNum, name, age, emancipated, photo, previousGrades }) => {
  return `<div data-id="${registrationNum}" class="student-card">
            <h2>${name}</h2>
            <img src="./img/${photo ? photo: 'default.png'}" />
            <p>Age: ${age}</p>
            <p>Emancipated: ${emancipated ? "✅" : "❌" }</p>
            <p>Previous Grades: ${previousGrades.length === 0 ? '?' : previousGrades}</p>
          </div>`
}

root.innerHTML = students.students
  .map(stundentCard)
  .reduce((acc, curr) => acc + curr)