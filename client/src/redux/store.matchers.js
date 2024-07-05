import { isAnyOf } from '@reduxjs/toolkit';
// import { songExtendedApi } from '../song/song.api';
import { userExtendedApi } from './user/user.api';
import scaleSlice from './scale/scale.slice';

export const isUpdateUserAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled,
  userExtendedApi.endpoints.saveUserInfo.matchFulfilled,
);

export const isSignInAction = isAnyOf(
  userExtendedApi.endpoints.checkSession.matchFulfilled,
  userExtendedApi.endpoints.signIn.matchFulfilled,
);

// export const isSongApiAction = isAnyOf(
//   songExtendedApi.endpoints.saveSong.matchFulfilled,
//   songExtendedApi.endpoints.deleteSongById.matchFulfilled,
//   songExtendedApi.endpoints.getSongById.matchFulfilled
// );

export const isChangeScaleAction = isAnyOf(
  scaleSlice.actions.addNoteToScale,
  scaleSlice.actions.newScale,
  scaleSlice.actions.removeNoteFromScale,
  scaleSlice.actions.rotateDrumToAngle,
  scaleSlice.actions.setScaleName,
  scaleSlice.actions.toggleSharps,
  scaleSlice.actions.transposeScale,
);
