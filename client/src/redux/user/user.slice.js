import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userExtendedApi } from './user.api';

const isUpdateUserAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.saveUserInfo.matchFulfilled
);

const INITIAL_STATE = {
  fetchSessionTried: false,
  name: '',
  isAnonymous: true,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setSessionTried(state) {
      state.fetchSessionTried = true;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isUpdateUserAction, (state, action) => {
      console.log('USER MATCH', { action });
      state.name = action.payload.user.name;
      state.isAnonymous = action.payload.user.anonymous;
    });
  },
});

export const { setSessionTried } = userSlice.actions;

export default userSlice.reducer;
