import actionTypes from './scale.types';
import {
  createFullScaleFromNames,
  removeDuplicateNotes,
  removeSharps,
  sortScaleByFreq,
  transposeScale,
} from './scale.utils';

const INITIAL_STATE = {
  name: '',
  layout: '',
  scaleSimple: [],
  scaleFull: [],
};

const scaleReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NOTE:
      const newScaleSorted = sortScaleByFreq([...state.scaleSimple, payload]);

      return {
        ...state,
        scaleSimple: newScaleSorted,
        scaleFull: createFullScaleFromNames(newScaleSorted),
      };

    case actionTypes.LOAD_SCALE:
      const scaleFlat = removeSharps(payload.scaleAry);
      const scaleTrimmed = removeDuplicateNotes(scaleFlat);
      const scaleSimple = sortScaleByFreq(scaleTrimmed);

      return {
        ...state,
        name: payload.name,
        layout: payload.layout,
        scaleSimple,
        scaleFull: createFullScaleFromNames(scaleSimple),
      };

    case actionTypes.REMOVE_NOTE:
      const filteredScaleSimple = state.scaleSimple.filter(
        (note) => note !== payload
      );

      return {
        ...state,
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
        scaleSimple: transposedScale,
        scaleFull: createFullScaleFromNames(transposedScale),
      };

    default:
      return state;
  }
};

export default scaleReducer;
