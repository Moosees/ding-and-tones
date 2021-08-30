import songTypes from '../../song/song.types';
import { notesState } from '../scale.initialState';
import scaleTypes from '../scale.types';
import { createFullScaleFromNames } from '../scale.utils';

const notesReducer = (state = notesState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.SAVE_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        round: payload.newRound,
        extra: payload.newExtra,
        scaleFull: payload.newFull,
      };

    case scaleTypes.NEW_SCALE:
      return {
        ...state,
        round: ['A3'],
        extra: [],
        scaleFull: createFullScaleFromNames(['A3'], []).newFull,
      };

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.getScale) return state;

      return {
        ...state,
        ...payload.scale.notes,
      };

    case scaleTypes.MOVE_EXTRA_NOTES:
      const movedExtra = state.extra.map(({ note, pos }) => {
        if (payload.swap && pos === payload.newPos)
          return { note, pos: payload.oldPos };
        if (pos === payload.oldPos) return { note, pos: payload.newPos };
        return { note, pos };
      });

      return { ...state, extra: movedExtra };

    default:
      return state;
  }
};

export default notesReducer;
