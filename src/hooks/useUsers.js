import { useReducer, useState } from "react";
import { userReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  {
    id: 1,
    username: "pepe",
    password: "12345",
    email: "correo@co.com",
  },
];

const initialForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
export const useUsers = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const handlerAddUser = (user) => {
    // console.log(user);
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user,
    });
    Swal.fire(
      user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      user.id === 0
        ? "El usuario ha sido creado con éxito"
        : "El usuario ha sido actualizado con éxito",
      "success"
    );
    closeHandlerForm();
    navigate("/users");
  };

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "¿Seguro de eliminar al usuario?",
      text: "No será posible revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id,
        });
        Swal.fire("¡Eliminado!", "Usuario ha sido eliminado", "success");
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true);
    setUserSelected({
      ...user,
    });
  };

  const openHandlerForm = () => {
    setVisibleForm(true);
  };

  const closeHandlerForm = () => {
    setVisibleForm(false);
    setUserSelected(initialForm);
  };

  return {
    users,
    userSelected,
    initialForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    openHandlerForm,
    closeHandlerForm,
  };
};
