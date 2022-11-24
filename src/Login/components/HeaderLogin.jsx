import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";
import logoImg from "../components/logoImg.svg";

const HeaderLogin = () => {
  return (
    <div className="header-login">
      <figure className="logo-login">
        <Link to="/">
          <img className="logo-img" src={logoImg} />
        </Link>
      </figure>
      <nav className="menu-header">
        <ul>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/git">Github</Link>
          </li>{" "}
          <li>
            <Link to="/banderas">Banderas</Link>
          </li>{" "}
          <li>
            <Link to="/imagen">Pixabay</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderLogin;
