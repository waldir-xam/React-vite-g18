import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Header";
import { Link } from "react-router-dom";
import Router from "./router/Router";
import "./App.css";
import HeaderLogin from "./Login/components/HeaderLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App-container">
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite / React / Router</h1>
        <h2>Contador</h2>
        <div className="card">
          <button
            className="btn-counter"
            onClick={() => setCount((count) => count + 1)}
          >
            El conteo es : {count}
          </button>
          <p>
            {/*             Editar <code>src/App.jsx</code> and save to test HMR
             */}{" "}
          </p>
        </div>
        <p className="read-the-docs">
          Click en los iconos de React y Vite para saber mas{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
