import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../context/AppContext';
import { SignUpContext } from '../../context/SignUpContext';
const NavBar = (props) => {
  const classes = useStyles(props);
  const { handleOpen, handleLogInOpen } = useContext(AppContext);
  const { handleLogOut, currentUser } = useContext(SignUpContext);

  return (
    <div className={classes.root}>
      <div className={classes.tuduLogo}>TuDu</div>
      {currentUser === null ? (
        <div className={classes.btnList}>
          <Button
            className={classes.logInBtn}
            onClick={handleLogInOpen}
            variant="outlined"
          >
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
      ) : (
        <div className={classes.btnList}>
          <Typography className={classes.username}>
            {currentUser.username} logged in
          </Typography>
          <Button
            style={{ textTransform: 'none' }}
            variant="outlined"
            // variant="contained"
            className={classes.logOutBtn}
            onClick={handleLogOut}
            text-transform="none"
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
