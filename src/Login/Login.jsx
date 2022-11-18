import "./Style.css";
import imagen from "./components/izq.jpg";
import HeaderLogin from "./components/HeaderLogin";
import { UserContext } from "../Context/UserContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const { user, storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    if (
      userData.email === "pepe@gmail.com" &&
      userData.password === "12345678"
    ) {
      const user = {
        nombre: "pepe",
        apellido: "zapata",
        edad: 20,
      };
      storeUser(user);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "usuario invalido",
      });
    }
  };

  return (
    <div className="login-container">
      <HeaderLogin />
      <div className="container">
        <div className="izq">
          <img src={imagen}></img>
        </div>
        <div className="der">
          <h1>Bienvenido!</h1>
          {/*           <h4>{user.name}</h4>
          <h4>{user.last_name}</h4>
          <h4>{user.edad}</h4>
          <h4>{user.talla}</h4> */}

          <input label="Email" onChange={handleInput} placeholder="email" />
          <input
            label="Password"
            placeholder="Password"
            onChange={handleInput}
          />

          <a className="recover">Recuperar contraseña</a>

          <button value="submit" onClick={handleClickLogin}>
            Iniciar Sesion
          </button>
          <button>Iniciar Sesion con:</button>
          <p className="pre-register">
            No tienes una cuenta aun? <a className="register">Registrate!</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
