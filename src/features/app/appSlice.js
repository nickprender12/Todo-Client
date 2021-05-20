import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  signUpOpen: false,
  logInOpen: false,
  welcomeOpen: false,
  message: null,
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleStatus(state, action) {
      state.loggedIn = !state.loggedIn;
    },
    toggleSignUp(state, action) {
      state.signUpOpen = !state.signUpOpen;
    },
    toggleLogIn(state, action) {
      state.logInOpen = !state.logInOpen;
    },
    toggleWelcome(state, action) {
      state.welcomeOpen = !state.welcomeOpen;
    },
    toggleLoading(state, action) {
      state.loading = !state.loading;
    },
  },
});

export const {
  toggleStatus,
  toggleSignUp,
  toggleLogIn,
  toggleWelcome,
  toggleLoading,
} = appSlice.actions;

export default appSlice.reducer;
