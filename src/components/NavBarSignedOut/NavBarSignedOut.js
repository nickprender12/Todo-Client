import React, { useContext } from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import { AppContext } from '../../context/AppContext';

const NavBarSignedOut = (props) => {
  const classes = useStyles(props);
  const { handleOpen, handleLogInOpen } = useContext(AppContext);
  return (
    <div className={classes.btnList}>
      <Button className={classes.logInBtn} onClick={handleLogInOpen}>
        Sign In
      </Button>
      <Button
        onClick={handleOpen}
        variant="contained"
        className={classes.signUpBtn}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NavBarSignedOut;
