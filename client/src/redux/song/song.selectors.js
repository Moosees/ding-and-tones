import { createSelector } from '@reduxjs/toolkit';

export const selectIsBarPlaying = createSelector(
  [(state) => state.song.songPlayer.currentBar, (_state, barId) => barId],
  (currentBar, barId) => currentBar === barId,
);

export const selectIsBarMuted = createSelector(
  [(state) => state.song.mutedBars, (_state, barId) => barId],
  (mutedBars, barId) => {
    return mutedBars[barId] ? mutedBars[barId] : false;
  },
);
