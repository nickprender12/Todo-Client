import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from '../../hooks/useInputState';
import useStyles from './styles';

const TodoForm = (props) => {
  const classes = useStyles(props);
  const { addTodo } = props;
  const [value, handleChange, reset] = useInputState('');

  return (
    <Paper
      style={{ margin: '1rem 0', padding: '0 1rem' }}
      className={classes.pap}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
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
