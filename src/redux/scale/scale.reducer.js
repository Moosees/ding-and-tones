import actionTypes from './scale.types';
import { createFullScale, sortScale } from './scale.utils';

const INITIAL_STATE = {
  name: 'A Integral',
  layout: 'round',
  scaleSimple: ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'],
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
      const scaleFull = createFullScale(payload);

      return { ...state, scaleSimple: payload, scaleFull };

    default:
      return state;
  }
};

export default scaleReducer;
