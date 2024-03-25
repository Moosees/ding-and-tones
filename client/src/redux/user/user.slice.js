import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userExtendedApi } from './user.api';

const isUpdateUserAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled,
  userExtendedApi.endpoints.saveUserInfo.matchFulfilled
);

const isSignInAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled
);

const INITIAL_STATE = {
  fetchSessionTried: false,
  name: '',
  anonymous: true,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: 'userSlice',
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
  },
  extraReducers: (builder) => {
    builder.addMatcher(isUpdateUserAction, (state, action) => {
      console.log('USER MATCH', { action });
      state.name = action.payload.user.name;
      state.anonymous = action.payload.user.anonymous;
    });
    builder.addMatcher(isSignInAction, (state, action) => {
      console.log('SIGN IN MATCH');
      state.isSignedIn = true;
    });
  },
});

export const { setSessionTried, signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
