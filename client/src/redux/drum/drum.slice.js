import { createSlice } from '@reduxjs/toolkit';
import { drumModeList, drumModes } from '../../assets/intervals';
import { isChangeNotesAction } from '../scale/scale.slice';

const INITIAL_STATE = {
  displayedChord: null,
  displayedNote: 0,
  drumMode: drumModes.NOTES,
};

const drumSlice = createSlice({
  name: 'drum',
  initialState: INITIAL_STATE,
  reducers: {
    changeDrumMode(state, { payload }) {
      const drumModeLength = drumModeList.length;
      const currentIndex = drumModeList.indexOf(state.drumMode);

      let newPosition = currentIndex + payload.direction || 1;

      if (newPosition < 0) newPosition = drumModeLength - 1;
      if (newPosition >= drumModeLength) newPosition = 0;

      state.drumMode = drumModeList[newPosition];
    },
    setDisplayedChord(state, { payload }) {
      const { chord, rootIndex } = payload;

      state.displayedChord = chord;
      state.displayedNote = chord ? chord.rootInScale : rootIndex;
    },
    setDisplayedNote(state, { payload }) {
      const { note, rootIndex } = payload;

      state.displayedNote = state.displayedNote === note ? rootIndex : note;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isChangeNotesAction, (state, { payload }) => {
      console.log('DRUM CHANGE NOTES MATCHER', { payload });
      state.displayedChord = null;
      state.displayedNote = payload.scale?.info?.rootIndex || 0;
    });
  },
});

export const { changeDrumMode, setDisplayedChord, setDisplayedNote } =
  drumSlice.actions;

export default drumSlice;
