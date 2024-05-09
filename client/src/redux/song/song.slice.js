import { createSlice } from '@reduxjs/toolkit';
import {
  createAutoMoveOrder,
  createUpdatedSound,
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
    countOpen: false,
    handsOpen: false,
    headersOpen: true,
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
      const isNewDropdown =
        payload.beatId && payload.beatId !== state.ui.currentDropdown;
      state.ui.currentDropdown = isNewDropdown ? payload.beatId : null;
    },
    addNewBar(state, { payload }) {
      console.log('addNewBarReducer', { payload });
      const { barId, bar, beats } = payload;

      const autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        bar.measure
      );

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement.push(barId);
      state.bars[barId] = bar;
      Object.assign(state.beats, beats);
      state.ui.currentDropdown = null;
    },
    deleteBar(state, { payload }) {
      const beatsToDelete = [...state.bars[payload.barId].measure];
      const autoMoveOrder = createAutoMoveOrder(
        { arrangement: state.arrangement, bars: state.bars },
        null,
        payload.barId
      );

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement = state.arrangement.filter(
        (barId) => barId !== payload.barId
      );
      delete state.bars[payload.barId];
      state.beats = filterObjectByKeyArray(state.beats, beatsToDelete, true);
      state.ui.currentDropdown = null;
      delete state.ui.mutedBars[state.barId];
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
      state.refs.composer = parsedSong.ui.composer;
      state.refs.isPrivate = parsedSong.ui.isPrivate;
      state.refs.songId = parsedSong.ui.songId;
      state.refs.scaleId = parsedSong.ui.scaleId;
      state.ui.isEditingSong = false; // needs logic
      state.ui.isOwner = false; // needs logic
      state.ui.currentDropdown = null;
      state.ui.scaleName = parsedSong.ui.scaleName; // not needed
      state.ui.scaleLabel = parsedSong.ui.scaleLabel; // not needed
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
    updateSoundForBeat(state, { payload }) {
      const { beatId, update } = payload;
      const sound = createUpdatedSound(
        state.beats[beatId].sound,
        update,
        state.ui.multiSelect
      );

      state.beats[beatId].sound = sound;
    },
    updateHandForBeat(state, { payload }) {
      const { beatId, newHand } = payload;
      const isSelected = state.beats[beatId].hand === newHand;

      if (isSelected) {
        delete state.beats[beatId].hand;
      } else {
        state.beats[beatId].hand = newHand;
      }
      state.ui.handsOpen = true;
    },
    updateSongInfo(state, { payload }) {
      state.info = { ...state.info, ...payload.songInfo };
    },
    updateSongUi(state, { payload }) {
      state.ui = { ...state.ui, ...payload.songUi };
    },
    togglePrivateSong(state) {
      state.refs.isPrivate = !state.refs.isPrivate;
    },
    toggleAutoMove(state) {}, // updateSongUi?
    toggleEditSong(state) {}, // updateSongUi?
    toggleMultiSelect(state) {}, // updateSongUi?
  },
});

export const {
  startSongPlayback,
  stopSongPlayback,
  setCurrentDropdown,
  addNewBar,
  deleteBar,
  duplicateBar,
  moveBarToIndex,
  loadSong,
  updateBarSubdivisions,
  clearBeat,
  updateSoundForBeat,
  updateHandForBeat,
  updateSongInfo,
  updateSongUi,
  togglePrivateSong,
} = songSlice.actions;

export default songSlice.reducer;
