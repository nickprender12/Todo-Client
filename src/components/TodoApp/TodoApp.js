import React, { useState, useEffect, useContext } from 'react';
import useStyles from './styles';
import { TodoForm, TodoList } from '../index';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SignUpContext } from '../../context/SignUpContext';
import todoServices from '../../services/todos';

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
  }, [currentUser]);

  const addTodo = (newTodoText) => {
    const todoObject = {
      title: newTodoText,
      status: false,
    };
    todoServices.create(todoObject).then((returnedTodo) => {
      setTodos(todos.concat(returnedTodo));
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
          {/* <h1>TuDu List</h1> */}
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

export default TodoApp;
