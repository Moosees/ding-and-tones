import songTypes from '../../song/song.types';
import { infoState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createScaleLabel } from '../scale.utils';

const infoReducer = (state = infoState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        ...payload.info,
      };

    case scaleTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };

    case scaleTypes.TOGGLE_SHARPS:
      return {
        ...state,
        ...payload,
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        ...payload.newRoot,
        label: createScaleLabel(
          payload.newExtra,
          payload.newRound,
          state.sharpNotes
        ),
      };

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.getScale) return state;

      return {
        ...state,
        ...payload.scale.info,
      };

    default:
      return state;
  }
};

export default infoReducer;
