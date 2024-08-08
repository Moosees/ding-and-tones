import { createSlice } from '@reduxjs/toolkit';
import { chordList } from '../../assets/chords';
import { isChangeNotesAction } from '../scale/scale.slice';
import {
  findAllChords,
  setAllIsSelected,
  updateIsSelected,
} from './chords.utils';

const INITIAL_STATE = {
  chordList: [...chordList],
  foundChords: [],
  printList: [],
};

const chordsSlice = createSlice({
  name: 'chords',
  initialState: INITIAL_STATE,
  reducers: {
    addChordToPrintList(state, { payload }) {
      state.printList.push(payload.chord);
    },
    removeChordFromPrintList(state, { payload }) {
      state.printList = state.printList.filter(
        ({ nameShort }) => payload.chord.nameShort !== nameShort,
      );
    },
    toggleChordIsSelected(state, { payload }) {
      const { id, scale } = payload;

      const chordList = updateIsSelected(state.chordList, id);

      const foundChords = findAllChords(
        scale,
        chordList.filter((chord) => chord.isSelected),
      );

      state.chordList = chordList;
      state.foundChords = foundChords;
    },
    setAllChordFiltersTo(state, { payload }) {
      const { value, currentScale } = payload;

      const chordList = setAllIsSelected(state.chordList, value);

      const foundChords = findAllChords(
        currentScale,
        chordList.filter((chord) => chord.isSelected),
      );

      state.chordList = chordList;
      state.foundChords = foundChords;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isChangeNotesAction, (state) => {
      state.foundChords = [];
      state.printList = [];
    });
  },
});

export const {
  addChordToPrintList,
  removeChordFromPrintList,
  toggleChordIsSelected,
  setAllChordFiltersTo,
} = chordsSlice.actions;

export default chordsSlice;
