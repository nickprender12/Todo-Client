import React, { useContext } from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { AppContext } from '../../context/AppContext';
import { SignUpContext } from '../../context/SignUpContext';

const ModalSignUpForm = (props) => {
  const classes = useStyles(props);
  const { signUpOpen, handleClose, handleLogInOpen } = useContext(AppContext);

  const {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    handleCreateAccount,
    loading,
  } = useContext(SignUpContext);

  const handleSignIn = () => {
    handleClose();
    handleLogInOpen();
  };

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="Tudu signup form"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signUpOpen}
        onClose={handleClose}
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
                  onClick={handleClose}
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
                id="outlined-basic"
                label="Enter name"
                variant="outlined"
                helperText="We'll never share your personal information with anyone else."
                fullWidth
                margin="normal"
                type="text"
                value={name}
                name="name"
                onChange={({ target }) => setName(target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
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

ModalSignUpForm.prototype = {
  classes: PropTypes.object.isRequired,
};

export default ModalSignUpForm;
