import React, { useState } from 'react';
import {useDarkMode} from './utils/useDarkMode'

import Coins from './Coins';
import {Route, Link, Switch} from 'react-router-dom'
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
  
    
      <h1>Crypto Tracker</h1>
    <Link to='/coin'>Coins</Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
