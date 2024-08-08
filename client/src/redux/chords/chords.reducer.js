import { chordList } from '../../assets/chords';
import scaleTypes from '../scale/scale.types';
import songTypes from '../song/song.types';
import chordsTypes from './chords.types';
import {
  findAllChords,
  setAllIsSelected,
  updateIsSelected,
} from './chords.utils';

const INITIAL_STATE = {
  chordList,
  foundChords: [],
  printList: [],
};

const chordsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case chordsTypes.ADD_CHORD_TO_PRINT:
      return { ...state, printList: [...state.printList, payload.chord] };

    case chordsTypes.REMOVE_CHORD_FROM_PRINT:
      return {
        ...state,
        printList: state.printList.filter(
          ({ nameShort }) => nameShort !== payload.nameShort,
        ),
      };

    case chordsTypes.SELECT_CHORD:
      const { id, scale } = payload;
      const updatedChordList = updateIsSelected(state.chordList, id);

      const updatedFoundChords = findAllChords(
        scale,
        updatedChordList.filter((chord) => chord.isSelected),
      );

      return {
        ...state,
        chordList: updatedChordList,
        foundChords: updatedFoundChords,
      };

    case chordsTypes.SET_ALL_FILTERS:
      const { allSelected, currentScale } = payload;
      const newChordList = setAllIsSelected(state.chordList, allSelected);

      const newFoundChords = findAllChords(
        currentScale,
        newChordList.filter((chord) => chord.isSelected),
      );

      return {
        ...state,
        chordList: newChordList,
        foundChords: newFoundChords,
      };

    case scaleTypes.FETCH_SUCCESSFUL:
    case scaleTypes.NEW_SCALE:
    case scaleTypes.LOAD_SCALE:
    case scaleTypes.UPDATE_SCALE:
      return { ...state, foundChords: [], printList: [] };

    case songTypes.FETCH_SUCCESSFUL:
      if (!payload.song.getScale) return state;

      return { ...state, foundChords: [], printList: [] };

    default:
      return state;
  }
};

export default chordsReducer;
