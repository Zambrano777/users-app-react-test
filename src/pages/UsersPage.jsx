/* eslint-disable react/prop-types */
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";


export const UsersPage = ({
  users,
  userSelected,
  initialForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerUserSelectedForm,
  visibleForm,
  openHandlerForm,
  closeHandlerForm,
}) => {
  

  return (
    <>
      {!visibleForm || (
        <UserModalForm
          userSelected={userSelected}
          initialForm={initialForm}
          handlerAddUser={handlerAddUser}
          closeHandlerForm={closeHandlerForm}
        />
      )}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button
                className="btn btn-primary my-2"
                onClick={openHandlerForm}
              >
                Nuevo Usuario
              </button>
            )}

            {users.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios en el sistema
              </div>
            ) : (
              <UsersList
                users={users}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
