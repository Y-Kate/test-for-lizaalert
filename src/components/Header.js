import React from 'react';
import './Header.css';
import logo from '../images/hacker-logo.png'
import { Link } from 'react-router-dom';

function Header () {

  return (
    <header className="header">
      <Link to="/"><img src={logo} className="header__logo" alt="Логотип Hacker"/></Link>
      <h1 className="header__title">Hacker News: 100 свежих новостей</h1>
    </header>
  );
}

export default Header;