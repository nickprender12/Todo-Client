import React, { useContext } from 'react';
import useStyles from './styles';
import { Body, TodoApp } from '../index';
import PropTypes from 'prop-types';
import { SignUpContext } from '../../context/SignUpContext';
import { AppContext } from '../../context/AppContext';
import Notification from '../Notification';

const AppBody = (props) => {
  const { currentUser } = useContext(SignUpContext);
  const { message } = useContext(AppContext);

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {currentUser ? <TodoApp /> : <Body />}
      <Notification className={classes.notification} message={message} />
    </div>
  );
};

AppBody.prototype = {
  classes: PropTypes.object.isRequired,
};

export default AppBody;
