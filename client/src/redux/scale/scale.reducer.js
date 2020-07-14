import { scaleState } from './scale.initialState';
import actionTypes from './scale.types';
import {
  createFullScaleFromNames,
  createScaleLabel,
  sortScaleByFreq,
  transposeScale,
} from './scale.utils';

const scaleReducer = (state = scaleState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NOTE:
      const newScaleSorted = sortScaleByFreq([...state.scaleSimple, payload]);

      return {
        ...state,
        label: createScaleLabel(newScaleSorted),
        scaleSimple: newScaleSorted,
        scaleFull: createFullScaleFromNames(newScaleSorted),
      };

    case actionTypes.SCALE_FETCH_ERROR:
      return { ...state, error: payload, isFetching: false };

    case actionTypes.SCALE_FETCH_STARTED:
      return { ...state, isFetching: true };

    case actionTypes.LOAD_SCALE:
      return {
        ...state,
        ...payload,
        isFetching: false,
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
