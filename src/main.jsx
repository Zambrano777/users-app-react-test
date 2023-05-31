import React from "react";
import ReactDOM from "react-dom/client";
import { UsersApp } from "./UsersApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider.jsx";
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersApp />
      </AuthProvider>
    </BrowserRouter>  
  </React.StrictMode>
);
