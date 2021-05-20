import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosReducer from '../features/todo/todosSlice';
import currentUserReducer from '../features/currentUser/currentUserSlice';
import appReducer from '../features/app/appSlice';

const combinedReducer = combineReducers({
  todos: todosReducer,
  currentUser: currentUserReducer,
  app: appReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'currentUser/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
