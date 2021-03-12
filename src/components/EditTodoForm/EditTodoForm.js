import React from 'react';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
import useInputState from '../../hooks/useInputState';

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const EditTodoForm = (props) => {
  const classes = useStyles(props);
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
