/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export const UserRow = ({
  handlerUserSelectedForm,
  handlerRemoveUser,
  id,
  username,
  email,
}) => {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        {/* <td>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() =>
              handlerUserSelectedForm({
                id,
                username,
                email,
              })
            }
          >
            Update
          </button>
        </td> */}
        <td>
          <NavLink className="btn btn-secondary btn-sm" to={'/users/edit/' + id}>
            Update ROUTE
          </NavLink>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handlerRemoveUser(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};
