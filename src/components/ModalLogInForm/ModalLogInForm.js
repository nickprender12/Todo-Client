import React, { useContext } from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../context/AppContext';
import { SignUpContext } from '../../context/SignUpContext';

const ModalLogInForm = (props) => {
  const classes = useStyles(props);
  const { logInOpen, handleLogInClose } = useContext(AppContext);
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogIn,
    loading,
  } = useContext(SignUpContext);

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
            <form className={classes.form} onSubmit={handleLogIn}>
              <TextField
                //id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                name="username"
                onChange={({ target }) => setUsername(target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                name="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Button
                className={classes.signUpBtn}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
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

ModalLogInForm.prototype = {
  classes: PropTypes.object.isRequired,
};

export default ModalLogInForm;
