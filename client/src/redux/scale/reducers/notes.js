import songTypes from '../../song/song.types';
import { notesState } from '../scale.initialState';
import scaleTypes from '../scale.types';

const notesReducer = (state = notesState, { type, payload }) => {
  switch (type) {
    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        ...payload.notes,
      };

    case scaleTypes.NEW_SCALE:
      return {
        ...state,
        dings: ['A3'],
        extra: [],
        round: [],
      };

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.song.getScale) return state;

      return {
        ...state,
        ...payload.song.scale.notes,
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
