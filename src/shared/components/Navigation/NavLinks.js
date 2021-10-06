import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>CENTERS</NavLink>
    </li>
    <li>
      <NavLink to="/users">USERS</NavLink>
    </li>
    <li>
      <NavLink to="/auth">LOGIN</NavLink>
    </li>
    <li>
      <NavLink to="/signup">SIGN UP</NavLink>
    </li>
    <li>
      <NavLink to="/profile">PROFILE</NavLink>
    </li>
  </ul>

};

export default NavLinks;