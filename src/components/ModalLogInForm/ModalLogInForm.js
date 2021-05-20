import React from 'react';
import useStyles from './styles';
// import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import useInputState from '../../hooks/useInputState';
import { logIn } from '../../features/currentUser/currentUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus, toggleLogIn } from '../../features/app/appSlice';
import todoService from '../../services/todos';

const ModalLogInForm = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [username, handleUserChange, resetUser] = useInputState('');
  const [password, handlePassChange, resetPassword] = useInputState('');

  const logInOpen = useSelector((state) => state.app.logInOpen);

  const handleLogInClose = () => {
    dispatch(toggleLogIn());
  };

  const onLogInClicked = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(logIn({ username, password }));
      dispatch(toggleStatus());
      window.localStorage.setItem(
        'loggedInTodoAppUser',
        JSON.stringify(resultAction.payload.currentUser)
      );
      todoService.setToken(resultAction.payload.currentUser.token);
      resetUser();
      resetPassword();
      handleLogInClose();
    } catch (err) {
      console.error('Failed to log in: ', err);
    }
  };

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="Tudu signup form"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={logInOpen}
        onClose={handleLogInClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={logInOpen}>
          <div className={classes.paper}>
            <div className={classes.greeting}>
              <div className={classes.header}>
                <div className={classes.left}>
                  <div className={classes.tuduLogoText}>Welcome back</div>
                </div>
                <div className={classes.right}>
                  <IconButton
                    aria-label="close window"
                    onClick={handleLogInClose}
                    className={classes.closeBtn}
                    edge="end"
                    size="small"
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <Typography>Sign in to your account here.</Typography>
            </div>
            <Divider />
            <form className={classes.form} onSubmit={onLogInClicked}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                name="username"
                onChange={handleUserChange}
                autoFocus={true}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                name="password"
                onChange={handlePassChange}
              />
              <Button
                className={classes.signUpBtn}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                // disabled={loading}
              >
                Sign in
              </Button>
            </form>
            <Divider />
            <div className={classes.footer}>
              <Button variant="outlined" onClick={handleLogInClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

// ModalLogInForm.prototype = {
//   classes: PropTypes.object.isRequired,
// };

export default ModalLogInForm;
