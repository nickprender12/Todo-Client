import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { todoAdded } from './todosSlice';

export const AddTodoForm = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);

  const onSavedTodoClicked = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(
        todoAdded({
          id: nanoid(),
          title,
        })
      );
      setTitle('');
    }
  };

  return (
    <section>
      <h2>Add a New todo</h2>
      <form>
        <label htmlFor="todoTitle">todo Title:</label>
        <input
          type="text"
          id="todoTitle"
          name="todoTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <button onClick={onSavedTodoClicked}>Save todo</button>
      </form>
    </section>
  );
};
