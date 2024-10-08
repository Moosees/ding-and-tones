import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alert/alert.slice';
import { api } from './api/api.slice';
import chordsSlice from './chords/chords.slice';
import drumSlice from './drum/drum.slice';
import scaleSlice from './scale/scale.slice';
import songSlice from './song/song.slice';
import userSlice from './user/user.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    alert: alertSlice.reducer,
    chords: chordsSlice.reducer,
    drum: drumSlice.reducer,
    scale: scaleSlice.reducer,
    song: songSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
