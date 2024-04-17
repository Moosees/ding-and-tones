import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentBar: null,
  currentBeat: null,
  currentHand: 1,
  currentSound: [],
  countOpen: false,
  handsOpen: false,
  headersOpen: true,
  privacyOpen: false,
};

const validKeys = [
  'countOpen',
  'handsOpen',
  'headersOpen',
  'privacyOpen',
];

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentlyPlaying(state, { payload }) {
      console.log('setCurrentlyPlaying', payload);
      const { currentBar, currentBeat, currentHand, currentSound } = payload;
      state.currentBar = currentBar;
      state.currentBeat = currentBeat;
      state.currentHand = currentHand || 1;
      state.currentSound = currentSound;
    },
    setUiState(state, { payload }) {
      const { key, val } = payload;
      if (!validKeys.includes(key)) return;

      state[key] = val;
      if (key === 'isEditingSong') state.mutedBars = {}; // move to extra reducer
    },
    toggleUiState(state, { payload }) {
      if (!validKeys.includes(payload.key)) return;

      state[payload.key] = !state[payload.key];
      if (payload.key === 'isEditingSong') state.mutedBars = {}; // move to extra reducer
    },
  },
});

export default uiSlice.reducer;
