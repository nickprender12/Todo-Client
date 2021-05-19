import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from '../../hooks/useInputState';
import useStyles from './styles';
import { unwrapResult } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { todoAdded, addNewTodo } from '../../features/todo/todosSlice';

const TodoForm = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [title, handleChange, reset] = useInputState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const onNewTodoClicked = async () => {
    try {
      setAddRequestStatus('pending');
      const resultAction = await dispatch(addNewTodo({ title, status: false }));
      // console.log('from todo clicked', resultAction);
      unwrapResult(resultAction); //remove payload
      reset();
    } catch (err) {
      console.error('Failed to save the post: ', err);
    } finally {
      setAddRequestStatus('idle');
    }
  };

  return (
    <Paper
      style={{ margin: '1rem 0', padding: '0 1rem' }}
      className={classes.pap}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // dispatch(todoAdded(title, false));
          onNewTodoClicked();
        }}
      >
        <TextField
          value={title}
          onChange={handleChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
