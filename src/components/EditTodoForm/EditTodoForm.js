import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../../hooks/useInputState';

import { useDispatch, useSelector } from 'react-redux';
import { selectTodoById, updateTodo } from '../../features/todo/todosSlice';
// import { TitleOutlined } from '@material-ui/icons';

const EditTodoForm = (props) => {
  const { id, toggle } = props;

  const todo = useSelector((state) => selectTodoById(state, id));

  const [title, handleChange, reset] = useInputState(todo.title);

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title) {
          dispatch(updateTodo({ title: title, status: todo.status, id: id }));
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
