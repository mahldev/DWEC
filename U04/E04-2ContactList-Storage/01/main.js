import "./style.css";
import { isEmpty as isEmptyHacendado, isDate } from "validator";

document.querySelector("#app").innerHTML = `
  <main>
    <section>
       <form>
         <label>
           First name
           <input type="text" name="name" id="name" required />
         </label>
         <label>
           Last name
           <input type="text" name="lastName" id="lastName" required />
         </label>
         <label>
           Brithday
           <input type="date" name="brithday" id="brithday" required />
         </label>
         <label>
           Gender
           <input type="text" name="gender" id="gender" required />
         </label>
         <label>
           email
           <input type="email" name="email" id="email" required />
         </label>
         <label>
           Phone number
           <input type="text" name="phoneNumber" id="phoneNumber" required />
         </label>
         <button>Insert</button>
       </form>
    </section>
    <section>
      <table class="userTableBody">
        <thead>
          <tr>
            <td>First name</td>
            <td>Last name</td>
            <td>Birthday</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
  </main>
`;

const createUserTr = ({
  name,
  lastName,
  brithday,
  gender,
  email,
  phoneNumber,
}) => `
    <tr>
      <td>${name}</td>
      <td>${lastName}</td>
      <td>${brithday}</td>
      <td>${gender}</td>
      <td>${email}</td>
      <td>${phoneNumber}</td>
    </tr>
`;

const saveState = () => {
  localStorage.setItem("__users__", JSON.stringify(users));
};

const addUser = (user) => {
  users.push(user);
  saveState();
  updateTable(user);
};

const checkIfUnique = ({ email, phoneNumber }) => {
  return users.some(
    (user) => user.email === email && user.phoneNumber === phoneNumber,
  );
};

const updateTable = (user) => {
  const userTr = createUserTr(user);
  tableBody.innerHTML += userTr;
};

const formatKey = (camelCase) => {
  return camelCase
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
};

const isEmpty = (value) => {
  return value === null || value === undefined || value === "";
};

const trimInput = (value) => value.trim();

const isUnique = ({ key, value }) => users.some((user) => user[key] === value);

const validate = (user) => {
  const errors = [];

  Object.entries(user).forEach(([key, value]) => {
    if (isEmpty(value.toString())) {
      errors.push({
        field: key,
        message: `The ${formatKey(key)} field cannot be empty.`,
      });
    }
  });

  // if (isDate(user.brithday)) {
  //   errors.push(...errors, {
  //     field: "brithday",
  //     message: `${
  //       errors.brithday === undefined ? "" : `${errors.brithday}\n`
  //     }Invalid date format. Please enter a valid date.`,
  //   });
  // }

  if (isUnique({ key: "phoneNumber", value: user.phoneNumber })) {
    errors.push(...errors, {
      field: "phoneNumber",
      message: `${
        errors.phoneNumber === undefined ? "" : `${errors.phoneNumber}\n`
      }Phone number must be unique.`,
    });
  }

  console.log(errors);
  return errors;
};

const showErrors = (errors) => {
  errors.forEach(({ field, message }) => {
    const input = document.querySelector(`#${field}`);
    input.setCustomValidity(message);
    input.reportValidity();
    setTimeout(() => {
      input.setCustomValidity("");
    }, 3000);
  });
};

const form = document.querySelector("form");
const tableBody = document.querySelector(".userTableBody tbody");
const users = (() => {
  const usersFromStorage = localStorage.getItem("__users__");
  return usersFromStorage ? JSON.parse(usersFromStorage) : [];
})();

tableBody.innerHTML = users.map(createUserTr).join(" ");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const [name, lastName, brithday, gender, email, phoneNumber] =
    formData.values();

  const user = {
    name: trimInput(name),
    lastName: trimInput(lastName),
    brithday,
    gender: trimInput(gender),
    email: trimInput(email),
    phoneNumber,
  };

  const errors = validate(user);

  if (errors.length === 0 && !checkIfUnique({ email, phoneNumber })) {
    addUser(user);
    event.target.reset();
    return;
  }

  showErrors(errors);
});
