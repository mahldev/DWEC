import type { User } from "../models";

type UserKey = { key: string };
type UserRowProps = UserKey & User;

const UserRow = ({
  key,
  firstName,
  lastName,
  brithday,
  gender,
  email,
  phoneNumber,
  isActive,
}: UserRowProps) => `
    <tr data-id=${key}>
      <td><input class="table-input" name="firstName" value="${firstName}" /></td>
      <td><input class="table-input" name="lastName" value="${lastName}" /></td>
      <td><input class="table-input" name="brithday" value="${brithday}" /></td>
      <td><input class="table-input" name="gender" value="${gender}" /></td>
      <td><input class="table-input" name="email" value="${email}" readonly /></td>
      <td><input class="table-input" name="phoneNumber" value="${phoneNumber}" /></td>
      <td><input class="table-input" name="isActive" value="${isActive}" /></td>
    </tr>
`;

export default UserRow;
