import "./style.css";
import db from "./data/db.json" assert { type: "json" };
import UserRow from "./components/UserRow";
import type { User, UserDictionary, Error } from "./models";
import { isEmpty, formatKey, trimInput } from "./utils/utils";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>
    <section>
       <form>
         <label >
           First name
           <input class="form-input" type="text" name="name" id="name" required />
         </label>
         <label>
           Last name
           <input class="form-input" type="text" name="lastName" id="lastName" required />
         </label>
         <label>
           Brithday
           <input class="form-input" type="date" name="brithday" id="brithday" required />
         </label>
         <label>
           Gender
           <input class="form-input" type="text" name="gender" id="gender" required />
         </label>
         <label>
           email
           <input class="form-input" type="email" name="email" id="email" required />
         </label>
         <label>
           Phone number
           <input class="form-input" type="text" name="phoneNumber" id="phoneNumber" required />
         </label>
          <label class="label-row">
            Active
            <input class="form-input" type="checkbox" name="isActive" id="isActive" required />
          </label>
         <button>Insert</button>
       </form>
    </section>
    <section>
      <table class="userTable">
        <thead>
          <tr>
            <td>First name</td>
            <td>Last name</td>
            <td>Birthday</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Active</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
  </main>
`;

const tbody = document.querySelector(".userTable tbody") as HTMLTableElement;
const form = document.querySelector("form") as HTMLFormElement;

const users: UserDictionary = {};

Object.entries(db).forEach(([key, value]) => {
  users[key] = { ...value };
});

tbody.innerHTML = Object.entries(users)
  .map(([key, value]) => UserRow({ key, ...value }))
  .join("");

const validate = (user: Omit<User, "isActive">) => {
  const errors: Error[] = [];

  Object.entries(user).forEach(([key, value]) => {
    if (isEmpty(value)) {
      errors.push({
        field: key,
        message: `The ${formatKey(key)} field cannot be empty.`,
      });
    }
  });

  return errors;
};

const showErrors = (errors: Error[]) => {
  errors.forEach(({ field, message }) => {
    const input = document.querySelector(`#${field}`) as HTMLInputElement;
    input.setCustomValidity(message);
    input.reportValidity();
    setTimeout(() => {
      input.setCustomValidity("");
    }, 3000);
  });
};

const isUserUnique = (user: User) => {
  const { email } = user;
  return !Object.keys(users).some((key) => key === email);
};

const addUser = (user: User) => {
  const key = user.email;
  users[key] = user;
  tbody.innerHTML += UserRow({ key, ...user });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!(event.target instanceof HTMLFormElement)) return;

  const formData = new FormData(event.target);

  const [firstName, lastName, brithday, gender, email, phoneNumber, isActive] =
    formData.values();

  const user: User = {
    firstName: trimInput(firstName as string),
    lastName: trimInput(lastName as string),
    brithday: trimInput(brithday as string),
    gender: trimInput(gender as string),
    email: trimInput(email as string),
    phoneNumber: trimInput(phoneNumber as string),
    isActive: (isActive as string) === "on",
  };

  const errors = validate(user);

  if (errors.length === 0 && isUserUnique(user)) {
    addUser(user);
    event.target.reset();
    return;
  }

  showErrors(errors);
});

const modifyUser = ({
  user,
  modifiedFill,
}: {
  user: User;
  modifiedFill: Record<string, string>;
}) => {
  return { ...user, ...modifiedFill };
};

document
  .querySelector("table tbody")
  ?.addEventListener("change", ({ target }) => {
    if (!(target instanceof HTMLInputElement)) return;

    const inputElement = target;
    const tableCell = inputElement.parentElement as HTMLTableCellElement;
    const tableRow = tableCell.parentElement;
    const userId = tableRow?.getAttribute("data-id");

    if (typeof userId !== "string") return;

    const currentUser = users[userId];
    const modifiedFill: Record<string, string> = {
      [inputElement.name]: inputElement.value,
    };

    users[userId] = modifyUser({ user: currentUser, modifiedFill });
  });
