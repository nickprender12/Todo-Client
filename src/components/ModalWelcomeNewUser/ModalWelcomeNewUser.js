import React, { useContext } from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../context/AppContext';
import { Alert } from '@material-ui/lab/';

const ModalWelcomeNewUser = (props) => {
  const classes = useStyles(props);
  const { welcomeOpen, handleWelcomeClose } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="Welcome to todo notification"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={welcomeOpen}
        onClose={handleWelcomeClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={welcomeOpen}>
          <div className={classes.paper}>
            <div className={classes.greeting}>
              <div className={classes.Success}>Success!</div>
              <Typography>We're excited for you to join.</Typography>
            </div>
            <Divider />
            <Alert severity="success" className={classes.alert}>
              You are now registered and signed in
            </Alert>
            <Button
              className={classes.okBtn}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleWelcomeClose}
            >
              OK!
            </Button>
            <Divider />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalWelcomeNewUser;
