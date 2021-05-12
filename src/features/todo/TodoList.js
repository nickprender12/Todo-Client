import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const renderedTodos = todos.map((todo) => (
    <article className="todo-excerpt" key={todo.id}>
      <h3>{todo.title}</h3>
    </article>
  ));

  return (
    <section className="todo-list">
      <h2>todos</h2>
      {renderedTodos}
    </section>
  );
};
