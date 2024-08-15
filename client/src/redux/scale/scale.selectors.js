import { createSelector } from '@reduxjs/toolkit';

export const selectScaleName = createSelector(
  [(state) => state.scale.info.rootName, (state) => state.scale.info.name],
  (rootName, name) => `${rootName} ${name}`,
);

export const selectScaleLength = createSelector(
  [
    (state) => state.scale.notes.dings,
    (state) => state.scale.notes.round,
    (state) => state.scale.notes.extra,
  ],
  (dings, round, extra) => dings.length + round.length + extra.length,
);

export const selectIsHowlReady = createSelector(
  [(state) => state.scale.howls.status, (_state, note) => note],
  (status, note) => status[note] === 'ready',
);

export const selectAreHowlsReady = createSelector(
  [(state) => state.scale.howls.status, (state) => state.scale.parsed.pitched],
  (status, scale) => {
    const parsedScale = ['t', 'T', ...scale.map(({ note }) => note)];

    return parsedScale.every((note) => status[note] === 'ready');
  },
);
