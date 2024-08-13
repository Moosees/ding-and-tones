import { createSelector } from '@reduxjs/toolkit';

export const selectScaleName = createSelector(
  [(state) => state.scale.info.rootName, (state) => state.scale.info.name],
  (rootName, name) => `${rootName} ${name}`,
);

export const selectAreHowlsReady = createSelector(
  [(state) => state.scale.howls.status, (state) => state.scale.parsed.pitched],
  (status, scale) => {
    const parsedScale = ['t', 'T', ...scale.map(({ note }) => note)];

    return parsedScale.every((note) => status[note] === 'ready');
  },
);
