import actionTypes from './scale.types';
import { createFullScale, removeSharps, sortScale } from './scale.utils';

const INITIAL_STATE = {
  name: 'A Integral',
  layout: 'round',
  scaleSimple: [],
  scaleFull: [],
};

const scaleReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NOTE:
      const newScale = [...state.scaleSimple, payload];
      const newScaleSorted = sortScale(newScale);
      const newScaleFull = createFullScale(newScaleSorted);

      return { ...state, scaleSimple: newScaleSorted, scaleFull: newScaleFull };

    case actionTypes.REMOVE_NOTE:
      const filteredScaleSimple = state.scaleSimple.filter(
        (note) => note !== payload
      );
      const filteredScaleFull = createFullScale(filteredScaleSimple);

      return {
        ...state,
        scaleSimple: filteredScaleSimple,
        scaleFull: filteredScaleFull,
      };

    case actionTypes.SAVE_SCALE:
      const scaleSimple = removeSharps(payload);
      const scaleFull = createFullScale(scaleSimple);

      return { ...state, scaleSimple, scaleFull };

    default:
      return state;
  }
};

export default scaleReducer;
