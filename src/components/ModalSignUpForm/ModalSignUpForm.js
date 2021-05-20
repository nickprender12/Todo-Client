import React from 'react';
import useStyles from './styles';
// import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import useInputState from '../../hooks/useInputState';
import userService from '../../services/user';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleSignUp,
  toggleLogIn,
  toggleLoading,
} from '../../features/app/appSlice';

const ModalSignUpForm = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const [name, handleNameChange, resetName] = useInputState('');
  const [username, handleUsernameChange, resetUsername] = useInputState('');
  const [password, handlePassChange, resetPassword] = useInputState('');

  const signUpOpen = useSelector((state) => state.app.signUpOpen);
  const loading = useSelector((state) => state.app.loading);

  const handleSignUpClose = () => {
    dispatch(toggleSignUp());
  };

  const handleLogInOpen = () => {
    dispatch(toggleLogIn());
  };

  const handleSignIn = () => {
    handleSignUpClose();
    handleLogInOpen();
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const userObject = {
        name: name,
        username: username,
        password: password,
      };
      const user = await userService.create(userObject);
      console.log(user);
      if (user) {
        resetName();
        resetUsername();
        resetPassword();
        setTimeout(() => {
          dispatch(toggleLoading);
        }, 3000);
        dispatch(toggleLoading);
        dispatch(toggleSignUp());
      }
    } catch (err) {
      console.error('Failed to create account: ', err);
    }
  };

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="Tudu signup form"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signUpOpen}
        onClose={handleSignUpClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signUpOpen}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <div className={classes.left}>
                <div className={classes.tuduLogoText}>Join TuDu</div>
                <Typography id="transition-modal-description">
                  Sign up to organize your life.
                </Typography>
              </div>
              <div className={classes.right}>
                <IconButton
                  aria-label="close window"
                  onClick={handleSignUpClose}
                  className={classes.closeBtn}
                  edge="end"
                  size="small"
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <Divider />
            <form className={classes.form} onSubmit={handleCreateAccount}>
              <TextField
                id="name"
                label="Enter name"
                variant="outlined"
                helperText="We'll never share your personal information with anyone else."
                fullWidth
                margin="normal"
                type="text"
                value={name}
                name="name"
                onChange={handleNameChange}
                autoFocus={true}
              />
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                value={username}
                name="Username"
                onChange={handleUsernameChange}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                name="Password"
                onChange={handlePassChange}
              />
              <Button
                className={classes.signUpBtn}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {loading ? 'loading...' : 'Create your free account'}
              </Button>
            </form>
            <Divider />
            <div className={classes.footer}>
              <Typography variant="subtitle1" gutterBottom>
                Already registered?
              </Typography>
              <Button variant="outlined" onClick={handleSignIn}>
                Sign in
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

// ModalSignUpForm.prototype = {
//   classes: PropTypes.object.isRequired,
// };

export default ModalSignUpForm;
