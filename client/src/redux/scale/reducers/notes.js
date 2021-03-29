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
        scaleFull: createFullScaleFromNames(scaleMerged),
      };

    case scaleTypes.UPDATE_SCALE:
      return {
        ...state,
        round: payload.newRound,
        mutant: payload.newMutant,
        scaleFull: payload.newFull,
      };

    case songTypes.FETCH_SUCCESSFUL:
      return payload.getScale && payload.scale
        ? {
            ...state,
            round: payload.scale.notes.round,
            scaleFull: createFullScaleFromNames(payload.scale.notes.round),
          }
        : state;

    default:
      return state;
  }
};

export default notesReducer;
