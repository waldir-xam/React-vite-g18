import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Pikachu from "./Pikachu.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <figure>
          <img src={Pikachu} className="pika" alt="pikachu" />
        </figure>
        <nav className="nav">
          <ul>
            <li><Link to>Inicio</Link></li>
            <li><Link to>Nosotros</Link></li>
            <li><Link to>Contacto</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
