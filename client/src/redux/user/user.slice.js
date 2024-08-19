import { createSlice } from '@reduxjs/toolkit';
import { isSignInAction, isUpdateUserAction } from '../api/api.slice';

const INITIAL_STATE = {
  name: '',
  anonymous: true,
  isSignedIn: false,
  privacyOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
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

      state.name = action.payload.user.name;
      state.anonymous = action.payload.user.anonymous;
    });
    builder.addMatcher(isSignInAction, (state, action) => {
      if (!action.payload.user) return;

      state.isSignedIn = true;
    });
  },
});

export const { signOut, setPrivacyOpen } = userSlice.actions;

export default userSlice;
