import { chordList } from './chords.data';
import actionTypes from './chords.types';
import { findAllChords, updateIsSelected } from './chords.utils';

const INITIAL_STATE = {
  chordList,
  foundChords: [],
};

const chordsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_CHORD:
      const { id, scale } = payload;
      const updatedChordList = updateIsSelected(state.chordList, id);

      const updatedFoundChords = findAllChords(
        scale,
        updatedChordList.filter((chord) => chord.isSelected)
      );

      return {
        ...state,
        chordList: updatedChordList,
        foundChords: updatedFoundChords,
      };

    default:
      return state;
  }
};

export default chordsReducer;
