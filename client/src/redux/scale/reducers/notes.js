import { notesState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createFullScaleFromNames } from '../scale.utils';

const notesReducer = (state = notesState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
      return {
        ...state,
        round: payload.notes.round,
        scaleFull: createFullScaleFromNames(payload.notes.round),
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        round: payload,
        scaleFull: createFullScaleFromNames(payload),
      };

    default:
      return state;
  }
};

export default notesReducer;
