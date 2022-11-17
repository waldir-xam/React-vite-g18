import { useState } from "react";

const Inputimg = () => {
  const [valorInput, setValorInput] = useState("");
  const captura = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    
  };
  return (
    <div>
      <form action="">
        <input type="text" />
        <button>Buscar</button>
      </form>
    </div>
  );
};
export default Inputimg;
