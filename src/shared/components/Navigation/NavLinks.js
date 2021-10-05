import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from '../../context/auth-context';
import DropdownMenu from './DropDownMenu';
import DropdownLogout from './DropdownLogout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  authButton: {
      fontSize:"16px",
      background: "transparent",
      border: "none",
      letterSpacing:"1px"
  },
});

const NavLinks = props => {
  const auth = useContext(AuthContext);
  const classes = useStyles();

    return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>CENTERS</NavLink>
    </li>
    {auth.isLoggedIn &&(
    <li>
      <NavLink to="/users">ADD CENTER</NavLink>
    </li>
    )}
    {auth.isLoggedIn &&(
    <li>
      <NavLink to="/users">USERS</NavLink>
    </li>
    )}
     {!auth.isLoggedIn &&(
    <li>
      <NavLink to="/auth"><PersonIcon className={classes.authButton}/></NavLink>

    </li>
    )}
    {auth.isLoggedIn && (
        <li>
          <DropdownLogout/>
        </li>
      )}
  </ul>

};

export default NavLinks;