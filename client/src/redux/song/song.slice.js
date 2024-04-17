import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  arrangement: [],
  bars: {},
  beats: {},
  info: {
    bpm: 80,
    difficulty: 1,
    metre: 's44',
    subdivision: 8,
    title: '',
  },
  ui: {
    composer: null,
    isDeleting: false,
    isFetching: false,
    isSaving: false,
    isOwner: false,
    isPrivate: false,
    songId: null,
    scaleId: null,
    scaleName: '',
    scaleLabel: '',
  },
};

const songSlice = createSlice({
  name: 'song',
  initialState: INITIAL_STATE,
  reducers: {
    addNewBar(state, { payload }) {},
    deleteBar(state, { payload }) {},
    duplicateBar(state, { payload }) {},
    moveBar(state, { payload }) {},
    loadSong(state, { payload }) {
      // merged FETCH_SUCCESSFUL and SET_STATE
    },
    updateBarSubdivision(state, { payload }) {},
    updateMeasureAndBeats(state, { payload }) {},
    clearBeat(state, { payload }) {},
    updateBeat(state, { payload }) {},
    updateHand(state, { payload }) {},
    updateSongInfo(state, { payload }) {},
    updateSongUi(state, { payload }) {},
    togglePrivateSong(state, { payload }) {
      // matcher for endpoint fulfilled instead?
    },
  },
});

export default songSlice.reducer;
