import { createSlice, nanoid } from '@reduxjs/toolkit';
// import todoServices from '../../services/todos';

const initialState = [
  { id: '1', title: 'run away', status: false },
  { id: '2', title: 'clean', status: false },
];

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await todoServices.getAll();
//   return response.todos;
// });

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, status) {
        return {
          payload: {
            id: nanoid(),
            title,
            status,
          },
        };
      },
    },
    todoUpdated: {
      reducer(state, action) {
        const { id, title, status } = action.payload;
        const existingTodo = state.find((todo) => todo.id === id);
        if (existingTodo) {
          existingTodo.title = title;
          existingTodo.status = status;
        }
      },
      prepare(id, title, status) {
        return {
          payload: {
            id,
            title,
            status,
          },
        };
      },
    },
    todoRemoved: {
      reducer(state, action) {
        const todoToRemove = state.findIndex(
          (todo) => todo.id === action.payload
        );
        state.splice(todoToRemove, 1);
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});
export const { todoAdded, todoUpdated, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
