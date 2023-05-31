import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

/* eslint-disable react/prop-types */
export const Navbar = () => {
  const { handlerLogout, login } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          UserApp
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav,#navbarNavRedirect"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavRedirect">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink className="nav-link" to="/users">
                USUARIOS
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="nav-link" to="/users/register">
                REGISTRAR
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-item nav-link text-primary mx-3">
                {login.user?.username}
              </span>
            </li>
            <li>
              <button
                className="btn btn-outline-success"
                onClick={handlerLogout}
              >
                logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
