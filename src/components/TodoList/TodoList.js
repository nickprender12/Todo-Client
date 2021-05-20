import React, { useEffect } from 'react';

import List from '@material-ui/core/List';
import { Todo } from '../index';
import Paper from '@material-ui/core/paper';
import useStyles from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos, fetchTodos } from '../../features/todo/todosSlice';

const TodoList = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const todos = useSelector(selectAllTodos);
  const error = useSelector((state) => state.todos.error);
  const userId = useSelector((state) => state.currentUser.currentUser.id);
  const todoStatus = useSelector((state) => state.todos.status);

  useEffect(() => {
    if (todoStatus === 'idle') {
      if (!userId) {
        return;
      } else {
        dispatch(fetchTodos(userId));
      }
    }
  }, [todoStatus, dispatch, userId]);

  let content;

  if (todoStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (todoStatus === 'succeeded') {
    content = todos.map((todo, i) => (
      <Todo {...todo} key={todo.id} index={i} listLength={todos.length} />
    ));
  } else if (todoStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <Paper className={classes.root}>
      <List>{content}</List>
    </Paper>
  );
};

export default TodoList;
