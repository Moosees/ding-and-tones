import actionTypes from './scale.types';
import { createFullScale } from './scale.utils';

const INITIAL_STATE = {
  scaleSimple: ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'],
  scaleFull: []
};

const scaleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SAVE_SCALE:
      const scaleFull = createFullScale(action.payload);
      return { ...state, scaleSimple: action.payload, scaleFull };

    default:
      return state;
  }
};

export default scaleReducer;
