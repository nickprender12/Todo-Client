import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todoServices from '../services/todos';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  // const addtodos = async (newTodoText) => {
  //   try {
  //     setTodos([...todos, { id: uuidv4(), title: newTodoText, status: false }]);
  //     todoServices.create(todos)
  //   } catch (exception) {

  //   }
  // }

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuidv4(), title: newTodoText, status: false }]);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTitle) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, title: newTitle } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
