import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';

const Navbar = () => {
  return (
    <nav className="bottom-header">
      <ul>
        <li className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </li>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/properties">Propriétés</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;