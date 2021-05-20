import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginServices from '../../services/login';

const initialState = {
  currentUser: null,
};

export const logIn = createAsyncThunk('currentUser/logIn', async (userObj) => {
  const { username, password } = userObj;
  const response = await loginServices.login({ username, password });

  console.log(response);
  const user = {
    currentUser: response,
  };
  return user;
});

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout(state, action) {
      state.currentUser = null;
      // window.localStorage.clear();
      // handleLogInClose();
      //const { postId, reaction } = action.payload
      // existingPost = state.posts.find((post) => post.id === postId)
      // if (existingPost) {
      //   existingPost.reactions[reaction]++
      // }
    },
    addCurrentUser: {
      reducer(state, action) {
        state.currentUser.push(action.payload);
      },
      prepare(_id, todos, username, name, passwordHash) {
        return {
          payload: {
            _id,
            todos,
            username,
            name,
            passwordHash,
          },
        };
      },
    },
  },
  extraReducers: {
    [logIn.fulfilled]: (state, action) => {
      console.log('action.payload', action.payload);
      return action.payload;
    },
  },
});

export const { addCurrentUser, logout } = currentUserSlice.actions;

export default currentUserSlice.reducer;
