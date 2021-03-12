import React, { useState, useEffect, useContext } from 'react';
import useStyles from './styles';
import { TodoForm, TodoList } from '../index';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import useTodoState from '../../hooks/useTodoState';
import { SignUpContext } from '../../context/SignUpContext';
import todoServices from '../../services/todos';
//import todo from '../../../../server/models/todo';

const TodoApp = (props) => {
  const classes = useStyles(props);
  const { currentUser } = useContext(SignUpContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (currentUser === null) {
      return;
    } else {
      todoServices.getAll().then((todos) => {
        return setTodos(
          todos.filter((todo) => {
            return todo.user.id === currentUser.id;
          })
        );
      });
    }
  }, [currentUser, todos]);

  //const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
  //   initialTodos
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const addTodo = (newTodoText) => {
    const todoObject = {
      title: newTodoText,
      status: false,
    };
    todoServices.create(todoObject).then((returnedTodo) => {
      setTodos(...todos, returnedTodo);
    });
  };

  const removeTodo = (todoId) => {
    todoServices.remove(todoId).then(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    });
  };

  const toggleTodo = (todoId) => {
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    const updatedTodo = { ...todoToUpdate, status: !todoToUpdate.status };
    todoServices.update(todoId, updatedTodo).then((returnedTodo) => {
      setTodos(todos.map((todo) => (todo.id !== todoId ? todo : returnedTodo)));
    });
  };

  const editTodo = (todoId, newTitle) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    const editedTodo = { ...todoToEdit, title: newTitle };
    todoServices.update(todoId, editedTodo).then((returnedTodo) => {
      setTodos(todos.map((todo) => (todo.id !== todoId ? todo : returnedTodo)));
    });
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container justify="center">
        <Grid item xs={11} md={6} lg={4}>
          <h1>TuDu List</h1>
          <div className={classes.listForm}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

TodoApp.prototype = {
  classes: PropTypes.object.isRequired,
};

export default TodoApp;
