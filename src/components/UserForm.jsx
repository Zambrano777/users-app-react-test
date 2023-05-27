/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({
  userSelected,
  handlerAddUser,
  initialUserForm,
  closeHandlerForm,
}) => {
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, password, email } = userForm;

  const onCloseForm = () => {
    closeHandlerForm();
    setUserForm(initialUserForm);
  };

  useEffect(() => {
    setUserForm({
      ...userSelected,
      // password: ""
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id === 0) || !email) {
      Swal.fire(
        "Error de validación",
        "Debe llenar las cajas de texto",
        "error"
      );
      return;
    }
    if (!email.includes("@")) {
      Swal.fire(
        "Error de validacion email",
        "El email debe ser valido, incluir un @!",
        "error"
      );
      return;
    }
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  return (
    <>
      <p>Formulario de Usuario</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        {id > 0 ? (
          ""
        ) : (
          <input
            type="password"
            className="form-control my-3 w-75"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        )}

        <input
          type="text"
          className="form-control my-3 w-75"
          placeholder="email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="btn btn-primary">
          {id > 0 ? "Editar" : "Registrar"}
        </button>

        {!closeHandlerForm || (
          <button
            className="btn btn-primary mx-2"
            type="button"
            onClick={() => onCloseForm()}
          >
            Cerrar
          </button>
        )}
      </form>
    </>
  );
};
