import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../../hooks/useInputState';

import { useDispatch, useSelector } from 'react-redux';
import { todoUpdated } from '../../features/todo/todosSlice';

const EditTodoForm = (props) => {
  const { id, toggle } = props;
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === id)
  );

  const [title, handleChange, reset] = useInputState(todo.title);

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title) {
          dispatch(todoUpdated({ id: id, title, status: todo.status }));
        }
        reset();
        toggle();
      }}
      style={{ marginLeft: '1rem', width: '75%' }}
    >
      <TextField
        margin="normal"
        value={title}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
