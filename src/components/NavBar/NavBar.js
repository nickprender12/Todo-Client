import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/currentUser/currentUserSlice';
import {
  toggleStatus,
  toggleSignUp,
  toggleLogIn,
} from '../../features/app/appSlice';

const NavBar = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleSignUpOpen = () => {
    dispatch(toggleSignUp());
  };

  const handleLogInOpen = () => {
    dispatch(toggleLogIn());
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    if (currentUser.currentUser) {
      dispatch(toggleStatus());
      dispatch(logout());
      window.localStorage.clear();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.tuduLogo}>TuDu</div>
      {currentUser.currentUser === null ? (
        <div className={classes.btnList}>
          <Button
            className={classes.logInBtn}
            onClick={handleLogInOpen}
            variant="outlined"
          >
            Sign In
          </Button>
          <Button
            onClick={handleSignUpOpen}
            variant="contained"
            className={classes.signUpBtn}
          >
            Sign Up
          </Button>
        </div>
      ) : (
        <div className={classes.btnList}>
          <Typography className={classes.username}>
            {currentUser.currentUser.username} logged in
          </Typography>
          <Button
            style={{ textTransform: 'none' }}
            variant="outlined"
            className={classes.logOutBtn}
            onClick={handleLogOut}
            autoFocus={false}
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
