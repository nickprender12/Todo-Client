import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoServices from '../../services/todos';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (id) => {
  const response = await todoServices.getAll();
  const userTodos = response.filter((todo) => todo.user.id === id);
  const responseObject = {
    todos: userTodos,
  };
  return responseObject.todos;
});

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (newTodo) => {
    const response = await todoServices.create(newTodo);
    return response;
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (newTodoObj) => {
    const { id } = newTodoObj;
    const response = await todoServices.update(id, newTodoObj);
    return response;
  }
);

export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  const response = await todoServices.remove(id);
  return response;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.todos = state.todos.concat(action.payload);
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [updateTodo.fulfilled]: (state, action) => {
      const { id, title, status } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.status = status;
      }
    },
    [removeTodo.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const todoToRemove = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(todoToRemove, 1);
    },
  },
});

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.todos;

export const selectTodoById = (state, todoId) =>
  state.todos.todos.find((todo) => todo.id === todoId);
