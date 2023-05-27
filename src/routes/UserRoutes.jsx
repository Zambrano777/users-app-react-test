/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPage";
import { Navbar } from "../components/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogout }) => {
  const {
    users,
    userSelected,
    initialForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    visibleForm,
    openHandlerForm,
    closeHandlerForm,
  } = useUsers();

  return (
    <>
      <Navbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route
          path="users"
          element={
            <UsersPage
              users={users}
              userSelected={userSelected}
              initialForm={initialForm}
              handlerAddUser={handlerAddUser}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
              visibleForm={visibleForm}
              openHandlerForm={openHandlerForm}
              closeHandlerForm={closeHandlerForm}
            />
          }
        />
        <Route
          path="users/register"
          element={
            <RegisterPage
              handlerAddUser={handlerAddUser}
              initialUserForm={initialForm}
            />
          }
        />
        <Route
          path="users/edit/:id"
          element={
            <RegisterPage
              users={users}
              handlerAddUser={handlerAddUser}
              initialUserForm={initialForm}
            />
          }
        />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
