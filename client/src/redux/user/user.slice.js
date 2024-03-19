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
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isUpdateUserAction, (state, action) => {
      console.log('MATCH', { action });
      state.name = action.payload.user.name;
      state.isAnonymous = action.payload.user.anonymous;
    });
  },
});

export default userSlice.reducer;
