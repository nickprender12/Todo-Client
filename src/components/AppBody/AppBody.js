import React from 'react';
import useStyles from './styles';
import { Body, TodoApp } from '../index';
// import PropTypes from 'prop-types';
// import Notification from '../Notification';

import { useSelector } from 'react-redux';

const AppBody = (props) => {
  const loggedInStatus = useSelector((state) => state.app.loggedIn);

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {loggedInStatus ? <TodoApp /> : <Body />}
      {/* <Notification className={classes.notification} message={message} /> */}
    </div>
  );
};

// AppBody.prototype = {
//   classes: PropTypes.object.isRequired,
// };

export default AppBody;
