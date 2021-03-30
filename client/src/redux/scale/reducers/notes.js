import songTypes from '../../song/song.types';
import { notesState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createFullScaleFromNames } from '../scale.utils';

const notesReducer = (state = notesState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
      const scaleMerged = [payload.notes.dings[0], ...payload.notes.round];
      return {
        ...state,
        round: scaleMerged,
        extra: payload.notes.extra,
        scaleFull: createFullScaleFromNames(scaleMerged, payload.notes.extra),
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        round: payload.newRound,
        extra: payload.newExtra,
        scaleFull: payload.newFull,
      };

    case songTypes.FETCH_SUCCESSFUL:
      return payload.getScale && payload.scale
        ? {
            ...state,
            round: payload.scale.notes.round,
            extra: payload.scale.notes.extra,
            scaleFull: createFullScaleFromNames(
              payload.scale.notes.round,
              payload.scale.notes.extra
            ),
          }
        : state;

    default:
      return state;
  }
};

export default notesReducer;
