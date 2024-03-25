import { isAnyOf } from '@reduxjs/toolkit';
import { userExtendedApi } from '../user/user.api';

export const isUpdateUserAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled,
  userExtendedApi.endpoints.saveUserInfo.matchFulfilled
);

export const isSignInAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled
);
