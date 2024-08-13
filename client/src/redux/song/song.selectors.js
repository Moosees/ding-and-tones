import { createSelector } from '@reduxjs/toolkit';

export const selectIsBarPlaying = createSelector(
  [(state) => state.song.songPlayer.currentBar, (_state, barId) => barId],
  (currentBar, barId) => currentBar === barId,
);
