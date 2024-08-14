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

export const selectArrangementLength = createSelector(
  (state) => state.song.arrangement,
  (arrangement) => arrangement.length,
);

export const selectNextBeatInMoveOrder = createSelector(
  [
    (state) => state.song.autoMoveOrder,
    (state) => state.song.ui.currentDropdown,
  ],
  (autoMoveOrder, currentDropdown) =>
    autoMoveOrder[currentDropdown]?.nextBeatId,
);

export const selectPrevBeatInMoveOrder = createSelector(
  [
    (state) => state.song.autoMoveOrder,
    (state) => state.song.ui.currentDropdown,
  ],
  (autoMoveOrder, currentDropdown) =>
    autoMoveOrder[currentDropdown]?.prevBeatId,
);
