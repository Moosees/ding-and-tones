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
        ...createFullScaleFromNames(scaleMerged, payload.notes.extra),
      };

    case scaleTypes.MOVE_EXTRA_NOTES:
      const movedExtra = state.extra.map(({ note, pos }) => {
        if (payload.swap && pos === payload.newPos)
          return { note, pos: payload.oldPos };
        if (pos === payload.oldPos) return { note, pos: payload.newPos };
        return { note, pos };
      });

      return { ...state, extra: movedExtra };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        round: payload.newRound,
        extra: payload.newExtra,
        ...payload.newFull,
      };

    case songTypes.FETCH_SUCCESSFUL:
      return payload.getScale && payload.scale
        ? {
            ...state,
            round: payload.scale.notes.round,
            extra: payload.scale.notes.extra,
            ...createFullScaleFromNames(
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
