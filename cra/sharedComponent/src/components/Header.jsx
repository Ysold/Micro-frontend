import React from 'react';
import './Header.css';

function Header() {
  return (
    <div class="header">
      <header className="header">
      <div className="logo">
        Micro-Front
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#accueil" className="nav-link">Accueil</a>
          </li>
          <li className="nav-item">
            <a href="#a-propos" className="nav-link">À Propos</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
