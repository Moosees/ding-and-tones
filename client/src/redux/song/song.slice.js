import { createSlice } from '@reduxjs/toolkit';
import { createAutoMoveOrder, moveBar } from './song.utils';
import { filterState } from '../store.utils';
import { createDefaultSong } from '../../assets/defaultData';

const defaultSong = createDefaultSong();

const INITIAL_STATE = {
  arrangement: defaultSong.arrangement,
  autoMoveOrder: defaultSong.autoMoveOrder,
  bars: defaultSong.bars,
  beats: defaultSong.beats,
  info: defaultSong.info,
  mutedBars: {},
  refs: {
    composer: null,
    isPrivate: false,
    songId: null,
    scaleId: null,
  },
  ui: {
    autoMove: false,
    currentBar: null,
    currentBeat: null,
    currentHand: 1,
    currentSound: [],
    currentDropdown: null,
    isEditingSong: true,
    isSongPlaying: false,
    isOwner: false,
    multiSelect: false,
    scaleName: '',
    scaleLabel: '',
  },
};

const songSlice = createSlice({
  name: 'song',
  initialState: INITIAL_STATE,
  reducers: {
    startSongPlayback(state) {
      state.ui.isSongPlaying = true;
      state.ui.currentDropdown = null;
    },
    stopSongPlayback(state) {
      state.ui.currentBar = null;
      state.ui.currentBeat = null;
      state.ui.currentHand = 1; // not needed?
      state.ui.currentSound = []; // not needed?
      state.ui.isSongPlaying = false;
    },
    setCurrentDropdown(state, { payload }) {
      state.ui.currentDropdown =
        state.ui.currentDropdown === payload.beatId ? null : payload.beatId;
    },
    addNewBar(state, { payload }) {
      console.log('addNewBarReducer', { payload });
      const { bar, beats } = payload;

      state.arrangement.push(bar.barId);
      state.bars[bar.barId] = bar;
      Object.assign(state.beats, beats);

      state.autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        bar.measure
      ); // needs fixing?
      state.ui.currentDropdown = null;
    },
    deleteBar(state, { payload }) {
      const beatsToDelete = [...state.bars[payload.barId].measure];

      state.arrangement = state.arrangement.filter(
        (barId) => barId !== payload.barId
      );
      delete state.bars[payload.barId];
      state.beats = filterState(state.beats, beatsToDelete, true);

      state.autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        null,
        payload.barId
      ); // needs fixing
      state.ui.currentDropdown = null;
    },
    duplicateBar(state, { payload }) {
      const { newBar, newBarId, newBeats } = payload;

      const autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        newBar.measure
      );

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement.push(newBarId);
      state.bars[newBarId] = newBar;
      Object.assign(state.beats, newBeats);
      state.ui.currentDropdown = null;
    },
    moveBarToIndex(state, { payload }) {
      const { barIndex, targetIndex } = payload;

      const arrangement = moveBar(state.arrangement, barIndex, targetIndex);

      const autoMoveOrder = createAutoMoveOrder({
        arrangement: arrangement,
        bars: state.bars,
      });

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement = arrangement;
      state.ui.currentDropdown = null;
    },
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
