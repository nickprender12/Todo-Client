import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import { Todo } from '../index';
import Paper from '@material-ui/core/paper';
import useStyles from './styles';

import { useSelector, useDispatch } from 'react-redux';

import { selectAllTodos, fetchTodos } from '../../features/todo/todosSlice';

const TodoList = (props) => {
  const classes = useStyles(props);
  // const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const error = useSelector((state) => state.todos.error);

  const todoStatus = useSelector((state) => state.todos.status);

  useEffect(() => {
    if (todoStatus === 'idle') {
      // console.log('idle');
      dispatch(fetchTodos());
    }
  }, [todoStatus, dispatch]);

  let content;

  if (todoStatus === 'loading') {
    // console.log('loading');
    content = <div className="loader">Loading...</div>;
  } else if (todoStatus === 'succeeded') {
    // console.log('succeeded');
    content = todos.map((todo, i) => (
      <Todo {...todo} key={todo.id} index={i} listLength={todos.length} />
    ));
  } else if (todoStatus === 'failed') {
    // console.log('failed');
    content = <div>{error}</div>;
  }

  return (
    <Paper className={classes.root}>
      <List>{content}</List>
    </Paper>
  );

  // if (todos.length)
  //   return (
  //     <Paper className={classes.root}>
  //       <List>
  //         {todos.map((todo, i) => {
  //           return (
  //             <Todo
  //               {...todo}
  //               key={todo.id}
  //               index={i}
  //               listLength={todos.length}
  //             />
  //           );
  //         })}
  //       </List>
  //     </Paper>
  //   );
  // return null;
};

export default TodoList;
