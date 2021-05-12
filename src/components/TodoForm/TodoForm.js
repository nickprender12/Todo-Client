import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from '../../hooks/useInputState';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { todoAdded } from '../../features/todo/todosSlice';

const TodoForm = (props) => {
  const classes = useStyles(props);

  const dispatch = useDispatch();

  const [title, handleChange, reset] = useInputState('');

  return (
    <Paper
      style={{ margin: '1rem 0', padding: '0 1rem' }}
      className={classes.pap}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            todoAdded({
              id: nanoid(),
              title,
              status: false,
            })
          );
          reset();
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
