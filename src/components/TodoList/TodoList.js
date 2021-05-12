import React from 'react';
import List from '@material-ui/core/List';
import { Todo } from '../index';
import Paper from '@material-ui/core/paper';
import useStyles from './styles';

import { useSelector } from 'react-redux';

const TodoList = (props) => {
  const classes = useStyles(props);
  const todos = useSelector((state) => state.todos);
  // const { todos, removeTodo, toggleTodo, editTodo } = props;

  if (todos.length)
    return (
      <Paper className={classes.root}>
        <List>
          {todos.map((todo, i) => {
            return (
              <Todo
                {...todo}
                key={todo.id}
                // removeTodo={removeTodo}
                // toggleTodo={toggleTodo}
                // editTodo={editTodo}
                index={i}
                listLength={todos.length}
              />
            );
          })}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
