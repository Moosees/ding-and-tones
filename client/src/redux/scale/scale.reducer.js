import { scaleState } from './scale.initialState';
import scaleTypes from './scale.types';
import {
  createFullScaleFromNames,
  createScaleLabel,
  sortScaleByFreq,
  transposeScale,
} from './scale.utils';

const scaleReducer = (state = scaleState, { type, payload }) => {
  switch (type) {
    case scaleTypes.ADD_NOTE:
      const newScaleSorted = sortScaleByFreq([...state.scale.round, payload]);

      return {
        ...state,
        label: createScaleLabel(newScaleSorted),
        scale: {
          round: newScaleSorted,
          scaleFull: createFullScaleFromNames(newScaleSorted),
        },
      };

    case scaleTypes.DELETE_ERROR:
      return { ...state, error: payload, isDeleting: false };
    case scaleTypes.DELETE_STARTED:
      return { ...state, isDeleting: true };
    case scaleTypes.DELETE_SUCCESSFUL:
      return { ...state, isDeleting: false };

    case scaleTypes.FETCH_ERROR:
      return { ...state, error: payload, isFetching: false };
    case scaleTypes.FETCH_STARTED:
      return { ...state, isFetching: true };

    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        ...payload,
        isFetching: false,
        isSaving: false,
        scale: {
          round: payload.scale.round,
          scaleFull: createFullScaleFromNames(payload.scale.round),
        },
      };

    case scaleTypes.REMOVE_NOTE:
      const filteredScaleRound = state.scale.round.filter(
        (note) => note !== payload
      );

      return {
        ...state,
        label: createScaleLabel(filteredScaleRound),
        scale: {
          round: filteredScaleRound,
          scaleFull: createFullScaleFromNames(filteredScaleRound),
        },
      };

    case scaleTypes.SAVE_ERROR:
      return { ...state, error: payload, isSaving: false };
    case scaleTypes.SAVE_STARTED:
      return { ...state, isSaving: true };

    case scaleTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };

    case scaleTypes.TRANSPOSE_SCALE:
      const transposedScale = transposeScale(state.scale.round, payload);

      return {
        ...state,
        label: createScaleLabel(transposedScale),
        scale: {
          round: transposedScale,
          scaleFull: createFullScaleFromNames(transposedScale),
        },
      };

    default:
      return state;
  }
};

export default scaleReducer;
