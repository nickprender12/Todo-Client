import React, { useEffect } from 'react';
import useStyles from './styles';
import { Body, TodoApp } from '../index';
// import PropTypes from 'prop-types';
// import Notification from '../Notification';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addCurrentUser } from '../../features/currentUser/currentUserSlice';
import { toggleStatus } from '../../features/app/appSlice';
import todoService from '../../services/todos';

const AppBody = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInTodoAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(addCurrentUser(user));
      dispatch(toggleStatus());
      todoService.setToken(user.token);
    }
  }, [dispatch]);

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
