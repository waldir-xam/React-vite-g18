import React from "react";
import "./Style.css";
import imagen from "./components/izq.jpg";
import HeaderLogin from "./components/HeaderLogin";

const Login = () => {
  return (
    <div className="login-container">
      <HeaderLogin />
      <div className="container">
        <div className="izq">
          <img src={imagen}></img>
        </div>
        <div className="der">
          <h1>Bienvenido!</h1>

          <h2></h2>
          <p></p>
          <input label="Email" placeholder="Email" />
          <input label="Password" placeholder="Password" />

          <a className="recover">Recuperar contraseña</a>

          <button>Iniciar Sesion</button>
          <button>Iniciar Sesion con:</button>
          <p className="pre-register">
            No tienes una cuenta aun? <a className="register">Registrate!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
