import actionTypes from './scale.types';
import {
  createFullScaleFromNames,
  createScaleLabel,
  sortScaleByFreq,
  transposeScale,
} from './scale.utils';

const INITIAL_STATE = {
  name: '',
  layout: 1,
  label: '',
  scaleSimple: [],
  scaleFull: [],
};

const scaleReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NOTE:
      const newScaleSorted = sortScaleByFreq([...state.scaleSimple, payload]);

      return {
        ...state,
        label: createScaleLabel(newScaleSorted),
        scaleSimple: newScaleSorted,
        scaleFull: createFullScaleFromNames(newScaleSorted),
      };

    case actionTypes.LOAD_SCALE:
      return {
        ...state,
        ...payload,
        scaleFull: createFullScaleFromNames(payload.scaleSimple),
      };

    case actionTypes.REMOVE_NOTE:
      const filteredScaleSimple = state.scaleSimple.filter(
        (note) => note !== payload
      );

      return {
        ...state,
        label: createScaleLabel(filteredScaleSimple),
        scaleSimple: filteredScaleSimple,
        scaleFull: createFullScaleFromNames(filteredScaleSimple),
      };

    case actionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };

    case actionTypes.TRANSPOSE_SCALE:
      const transposedScale = transposeScale(state.scaleSimple, payload);

      return {
        ...state,
        label: createScaleLabel(transposedScale),
        scaleSimple: transposedScale,
        scaleFull: createFullScaleFromNames(transposedScale),
      };

    default:
      return state;
  }
};

export default scaleReducer;
