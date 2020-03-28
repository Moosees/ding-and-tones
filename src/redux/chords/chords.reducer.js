import { chordList } from './chords.data';
import actionTypes from './chords.types';
import { findAllChords } from './chords.utils';

const INITIAL_STATE = {
  chordList,
  displayedChord: null,
  foundChords: []
};

const chordsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_CHORD:
      return { ...state, displayedChord: action.payload };

    case actionTypes.CLEAR_CHORD:
      return { ...state, displayedChord: null };

    case actionTypes.FIND_CHORDS:
      const { scale, chords } = action.payload;
      const foundChords = findAllChords(scale, chords);
      return { ...state, foundChords };

    default:
      return state;
  }
};

export default chordsReducer;
