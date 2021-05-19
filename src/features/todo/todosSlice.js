import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoServices from '../../services/todos';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await todoServices.getAll();
  const responseObject = {
    todos: response,
  };
  return responseObject.todos;
});

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (initialTodo) => {
    const response = await todoServices.create(initialTodo);
    return response;
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (newObject) => {
    const { id } = newObject;
    const response = await todoServices.update(id, newObject);
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
  reducers: {
    // todoAdded: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare(title, status) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         status,
    //       },
    //     };
    //   },
    // },
    // todoUpdated: {
    //   reducer(state, action) {
    //     const { id, title, status } = action.payload;
    //     const existingTodo = state.todos.find((todo) => todo.id === id);
    //     if (existingTodo) {
    //       existingTodo.title = title;
    //       existingTodo.status = status;
    //     }
    //   },
    //   prepare(id, title, status) {
    //     return {
    //       payload: {
    //         id,
    //         title,
    //         status,
    //       },
    //     };
    //   },
    // },
    // todoRemoved: {
    //   reducer(state, action) {
    //     const todoToRemove = state.todos.findIndex(
    //       (todo) => todo.id === action.payload
    //     );
    //     state.todos.splice(todoToRemove, 1);
    //   },
    //   prepare(id) {
    //     return {
    //       payload: {
    //         id,
    //       },
    //     };
    //   },
    // },
  },
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
// export const { todoUpdated, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.todos;

export const selectTodoById = (state, todoId) =>
  state.todos.todos.find((todo) => todo.id === todoId);
