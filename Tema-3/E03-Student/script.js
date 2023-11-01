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

const table = document.querySelector('tbody')

function createStudent(fills) {
  const tr = document.createElement('tr');
  fills.forEach(fill => tr.append(fill));
  return tr;
}

const createFill = (data) =>
  (td => td.innerText = data)(document.createElement('td'))

const studentData = students.students.map(student =>
  Object.values(student).map(fill => createFill(fill))
)

studentData.forEach(data => {
  const student = createStudent(data)
  table.append(student)
})