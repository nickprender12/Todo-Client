import { PictureInPictureAltRounded } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  _id: '5fdbcffb738d8525006e8494',
  todos: [],
  username: 'rootadmin',
  name: 'nick pre',
  passwordHash: '$2b$10$1MGeL7F/oypcfWwWnnw3UOWgDSKpgci0TMg2J2bbl7vx1m6B8cg02',
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
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
});

export const { addCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
