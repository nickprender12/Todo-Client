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
    // addTodo: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   // state.value += 1;
    // },
  },
});
export const { todoAdded } = todosSlice.actions;
// export const { addTodo } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectAllTodos = (state) => state.todos.value;

export default todosSlice.reducer;
