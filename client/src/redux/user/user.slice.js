import { createSlice } from '@reduxjs/toolkit';
import { isSignInAction, isUpdateUserAction } from './user.api';

const INITIAL_STATE = {
  fetchSessionTried: false,
  name: '',
  anonymous: true,
  isSignedIn: false,
  privacyOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setSessionTried(state) {
      state.fetchSessionTried = true;
    },
    // signIn(state, { payload }) {
    //   console.log('SIGN IN', { payload });
    //   state.name = payload.user.name;
    //   state.anonymous = payload.user.anonymous;
    //   state.isSignedIn = true;
    // },
    signOut(state) {
      state.name = '';
      state.anonymous = true;
      state.isSignedIn = false;
    },
    setPrivacyOpen(state, { payload }) {
      state.privacyOpen = payload.privacyOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isUpdateUserAction, (state, action) => {
      if (!action.payload.user) return;
      console.log('USER MATCH', { action });

      state.name = action.payload.user.name;
      state.anonymous = action.payload.user.anonymous;
    });
    builder.addMatcher(isSignInAction, (state, action) => {
      if (!action.payload.user) return;

      console.log('SIGN IN MATCH');
      state.isSignedIn = true;
    });
  },
});

export const { setSessionTried, signOut, setPrivacyOpen } = userSlice.actions;

export default userSlice;
