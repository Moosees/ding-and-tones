import { createSlice } from '@reduxjs/toolkit';
import {
  createAutoMoveOrder,
  moveBar,
  parseFetchedSong,
  updateMeasureAndBeats,
} from './song.utils';
import { filterObjectByKeyArray } from '../store.utils';
import { createDefaultSong } from '../../assets/defaultData';
import { compareSubdivisionsLength } from '../../assets/metre';

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

      const autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        bar.measure
      );

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement.push(bar.barId);
      state.bars[bar.barId] = bar;
      Object.assign(state.beats, beats);
      state.ui.currentDropdown = null;
    },
    deleteBar(state, { payload }) {
      const { barId } = payload;

      const beatsToDelete = [...state.bars[barId].measure];
      const autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        null,
        barId
      );

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement = state.arrangement.filter(
        (barId) => barId !== payload.barId
      );
      delete state.bars[payload.barId];
      state.beats = filterObjectByKeyArray(state.beats, beatsToDelete, true);
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
      // merged FETCH_SUCCESSFUL, SET_STATE, (createNewSong)
      const { song, getScale, suppressAlert } = payload;

      const parsedSong = parseFetchedSong(song, getScale, suppressAlert); // suppressAlert not needed?
      const autoMoveOrder = createAutoMoveOrder(parsedSong);

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement = parsedSong.arrangement;
      state.bars = parsedSong.bars;
      state.beats = parsedSong.beats;
      state.info = parsedSong.info;
      state.ui.isEditingSong = false; // needs logic
      state.ui.isOwner = false; // needs logic
    },
    updateBarSubdivisions(state, { payload }) {
      const { barId, newSubdivisions } = payload;
      const { metre, subdivisions } = state.bars[barId];

      const lengthDifference = compareSubdivisionsLength(
        subdivisions,
        newSubdivisions,
        metre
      );

      if (lengthDifference !== 0) {
        const { addBeats, deleteBeats, newMeasure } = updateMeasureAndBeats(
          state.bars[barId],
          newSubdivisions
        ); // rename and refactor?

        const barsForAutoMoveOrder = { ...state.bars };
        barsForAutoMoveOrder[barId].measure = newMeasure;

        const autoMoveOrder = createAutoMoveOrder({
          arrangement: state.arrangement,
          bars: barsForAutoMoveOrder,
        });

        state.autoMoveOrder = autoMoveOrder;
        state.bars[barId].measure = newMeasure;
        Object.assign(state.beats, addBeats);
        for (const beatId of deleteBeats) {
          console.log('delete beat', beatId);
          delete state.beats[beatId];
        }
      }

      state.bars[barId].subdivisions = newSubdivisions;
      state.ui.currentDropdown = null;
    },
    clearBeat(state, { payload }) {
      state.beats[payload.beatId].sound = ['-'];
    },
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
