import { chordList } from '../../assets/chords';
import chordsTypes from './chords.types';
import {
  findAllChords,
  setAllIsSelected,
  updateIsSelected,
} from './chords.utils';

const INITIAL_STATE = {
  chordList,
  foundChords: [],
  printList: [
    {
      name: 'A minor',
      nameShort: 'Am',
      intervals: [0, 3, 7],
      notes: ['A', 'C', 'E'],
      notesInScale: {
        A2: 0,
        A3: 0,
        C3: 3,
        C4: 3,
        E3: 7,
        E4: 7,
      },
      rootInScale: 0,
    },
    {
      name: 'C major',
      nameShort: 'C',
      intervals: [0, 4, 7],
      notes: ['C', 'E', 'G'],
      notesInScale: {
        C3: 0,
        C4: 0,
        E3: 4,
        E4: 4,
        G3: 7,
      },
      rootInScale: 1,
    },
    {
      name: 'D power chord',
      nameShort: 'D5',
      intervals: [0, 7],
      notes: ['D', 'A'],
      notesInScale: {
        D3: 0,
        D4: 0,
        A2: 7,
        A3: 7,
      },
      rootInScale: 2,
    },
    {
      name: 'G power chord',
      nameShort: 'G5',
      intervals: [0, 7],
      notes: ['G', 'D'],
      notesInScale: {
        G3: 0,
        D3: 7,
        D4: 7,
      },
      rootInScale: 4,
    },
  ],
};

const chordsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case chordsTypes.ADD_CHORD_TO_PRINT:
      return { ...state, printList: [...state.printList, payload.chord] };

    case chordsTypes.SELECT_CHORD:
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

    case chordsTypes.SET_ALL_FILTERS:
      const { allSelected, currentScale } = payload;
      const newChordList = setAllIsSelected(state.chordList, allSelected);

      const newFoundChords = findAllChords(
        currentScale,
        newChordList.filter((chord) => chord.isSelected)
      );

      return {
        ...state,
        chordList: newChordList,
        foundChords: newFoundChords,
      };

    default:
      return state;
  }
};

export default chordsReducer;
