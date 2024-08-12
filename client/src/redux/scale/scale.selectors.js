import { createSelector } from '@reduxjs/toolkit';

export const selectScaleName = createSelector(
  [(state) => state.scale.info.rootName, (state) => state.scale.info.name],
  (rootName, name) => `${rootName} ${name}`,
);
