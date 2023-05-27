import { UserForm } from "./UserForm"

/* eslint-disable react/prop-types */
export const UserModalForm = ({initialForm, userSelected, handlerAddUser, closeHandlerForm}) => {
return (
    <>
        <div className="abrir-modal animacion fadeIn">
          <div className="modal" style={{ display: "block" }} tabIndex="-1">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {userSelected.id > 0 ? "Editar" : "Crear"}
                    Modal Usuario
                  </h5>
                </div>
                <div className="modal-body">
                  <UserForm
                    initialUserForm={initialForm}
                    userSelected={userSelected}
                    handlerAddUser={handlerAddUser}
                    closeHandlerForm={closeHandlerForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
)
}