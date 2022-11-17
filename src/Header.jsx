import { useState } from "react";

const Header = () => {
  // const nombre = "guillermo";
  //hook useState
  const [nombre, setNombre] = useState("waldir");

  const cambiarNombre = (nuevo) => {
    setNombre(nuevo);
  };

  return (
    <div>
      <h1>Primer componente</h1>
      <p>
        mi nombre es:{" "}
        <strong className={nombre.length <= 4 ? "verde" : "azul"}>
          {nombre}
        </strong>
      </p>
      <p>mi apellido es : </p>

      <input
        type="text"
        placeholder="cambia el nombre"
        onChange={(e) => cambiarNombre(e.target.value)}
      />

      <button onClick={(e) => cambiarNombre("lucho")}>Cambiar nombre</button>
    </div>
  );
};

export default Header;

// 1
