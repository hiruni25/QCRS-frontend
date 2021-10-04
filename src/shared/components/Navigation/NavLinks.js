import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import PersonIcon from '@mui/icons-material/Person';

const NavLinks = props => {
    return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>CENTERS</NavLink>
    </li>
    <li>
      <NavLink to="/users">USERS</NavLink>
    </li>
    <li>
      <NavLink to="/auth"><PersonIcon/></NavLink>
    </li>
  </ul>

};

export default NavLinks;