import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import PropTypes from 'prop-types';
import ModalSignUpForm from '../ModalSignUpForm';
import ModalLogInForm from '../ModalLogInForm';
import ModalWelcomeNewUser from '../ModalWelcomeNewUser';
import { AppContext } from '../../context/AppContext';

const Body = (props) => {
  const classes = useStyles(props);
  const { handleOpen } = useContext(AppContext);

  return (
    <div>
      <div className={classes.title}>
        <p>
          The super awesome
          <br />
          to-do list creator
        </p>
      </div>
      <div className={classes.tagline}>
        <p>
          Organize your life, or at least feel
          <br />
          productive for a few minutes.
        </p>
      </div>
      <div className={classes.btn}>
        <Button
          onClick={handleOpen}
          variant="contained"
          className={classes.signUpBtn}
        >
          Sign up
        </Button>
      </div>
      <ModalSignUpForm />
      <ModalLogInForm />
      <ModalWelcomeNewUser />
    </div>
  );
};

Body.prototype = {
  classes: PropTypes.object.isRequired,
  context: PropTypes.shape({
    handleOpen: PropTypes.func.isRequired,
  }),
};

export default Body;
