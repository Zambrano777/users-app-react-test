import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";

/* eslint-disable react/prop-types */
export const UsersList = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <p>Listado de usuarios</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Editar Route</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email }) => (
            <UserRow
              key={id}
              id={id}
              username={username}
              email={email}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
