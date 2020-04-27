import actionTypes from './scale.types';
import { createFullScale } from './scale.utils';

const INITIAL_STATE = {
  name: 'A Integral',
  layout: 'round',
  scaleSimple: ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'],
  scaleFull: [],
};

const scaleReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SAVE_SCALE:
      const scaleFull = createFullScale(payload);
      return { ...state, scaleSimple: payload, scaleFull };

    default:
      return state;
  }
};

export default scaleReducer;
