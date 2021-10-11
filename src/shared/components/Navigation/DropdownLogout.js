import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";

import {AuthContext} from "../../context/auth-context";

const useStyles = makeStyles({
    logoutButton: {
        fontSize:"16px",
        background: "transparent",
        border: "none",
        letterSpacing:"1px"
    },
});

const DropdownLogout = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const auth = useContext(AuthContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <PersonIcon/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >

                <MenuItem onClick={handleClose} component={Link} to={"/userprofile"}>
                    User Profile
                </MenuItem>
                <MenuItem onClick={handleClose} >
                    <button className={classes.logoutButton} onClick={auth.logout}>LOGOUT</button>
                </MenuItem>

            </Menu>
        </div>
    );
}
export default DropdownLogout;
