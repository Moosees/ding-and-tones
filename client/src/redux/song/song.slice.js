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
  refs: {
    composer: null,
    isPrivate: false,
    songId: null,
    scaleId: null,
  },
  ui: {
    autoMove: false,
    autoMoveOrder: {},
    currentDropdown: null,
    isEditingSong: true,
    isSongPlaying: false,
    isOwner: false,
    multiSelect: false,
    mutedBars: {},
    scaleName: '',
    scaleLabel: '',
  },
};

const songSlice = createSlice({
  name: 'song',
  initialState: INITIAL_STATE,
  reducers: {
    startSongPlayback(state) {},
    stopSongPlayback(state) {},
    setCurrentDropdown(state, { payload }) {
      state.ui.currentDropdown = payload.beatId;
    },
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
    toggleAutoMove(state) {}, // updateSongUi?
    toggleEditSong(state) {}, // updateSongUi?
    toggleMultiSelect(state) {}, // updateSongUi?
    togglePrivateSong(state) {}, // matcher for endpoint fulfilled instead?
  },
});

export default songSlice.reducer;
