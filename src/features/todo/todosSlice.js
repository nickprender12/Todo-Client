import { createSlice } from '@reduxjs/toolkit';
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
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoUpdated(state, action) {
      const { id, title, status } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.status = status;
      }
    },
  },
});
export const { todoAdded, todoUpdated } = todosSlice.actions;

export default todosSlice.reducer;
