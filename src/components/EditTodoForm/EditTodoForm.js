import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../../hooks/useInputState';

const EditTodoForm = (props) => {
  const { editTodo, id, title, toggle } = props;
  const [value, handleChange, reset] = useInputState(title);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: '1rem', width: '75%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
