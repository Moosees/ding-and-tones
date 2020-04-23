import { chordList } from './chords.data';
import actionTypes from './chords.types';
import { findAllChords } from './chords.utils';

const INITIAL_STATE = {
  chordList,
  displayedChord: null,
  foundChords: [],
};

const chordsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.CLEAR_CHORD:
      return { ...state, displayedChord: null };

    case actionTypes.DISPLAY_CHORD:
      return {
        ...state,
        displayedChord: state.displayedChord === payload ? null : payload,
      };

    case actionTypes.FIND_CHORDS:
      const { scale, chords } = payload;
      const foundChords = findAllChords(scale, chords);
      return { ...state, foundChords };

    default:
      return state;
  }
};

export default chordsReducer;
