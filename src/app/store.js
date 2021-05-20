import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todo/todosSlice';
import currentUserReducer from '../features/currentUser/currentUserSlice';
import appReducer from '../features/app/appSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
    currentUser: currentUserReducer,
    app: appReducer,
  },
});
