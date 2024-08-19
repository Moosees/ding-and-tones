import { createSelector } from '@reduxjs/toolkit';

export const makeSelectIsBeatPlaying = () => {
  const selectIsBeatPlaying = createSelector(
    [(state) => state.song.songPlayer.currentBeat, (_state, beatId) => beatId],
    (currentBeat, beatId) => currentBeat === beatId,
  );

  return selectIsBeatPlaying;
};

export const makeSelectIsBarPlaying = () => {
  const selectIsBarPlaying = createSelector(
    [(state) => state.song.songPlayer.currentBar, (_state, barId) => barId],
    (currentBar, barId) => currentBar === barId,
  );

  return selectIsBarPlaying;
};

export const makeSelectIsBarMuted = () => {
  const selectIsBarMuted = createSelector(
    [(state) => state.song.mutedBars, (_state, barId) => barId],
    (mutedBars, barId) => {
      return mutedBars[barId] ? mutedBars[barId] : false;
    },
  );

  return selectIsBarMuted;
};

export const selectArrangementLength = createSelector(
  (state) => state.song.arrangement,
  (arrangement) => arrangement.length,
);

export const makeSelectIsDropdownOpen = () => {
  const selectIsDropdownOpen = createSelector(
    [(state) => state.song.ui.currentDropdown, (_state, beatId) => beatId],
    (currentDropdown, beatId) => currentDropdown === beatId,
  );

  return selectIsDropdownOpen;
};

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
