import { createSlice } from '@reduxjs/toolkit';
import { createDefaultSong } from '../../assets/defaultData';
import { compareSubdivisionsLength } from '../../assets/metre';
import { filterObjectByKeyArray } from '../store.utils';
import { isSignInAction, userExtendedApi } from '../user/user.api';
import { songExtendedApi } from './song.api';
import {
  createAutoMoveOrder,
  createUpdatedSound,
  moveBar,
  parseFetchedSong,
  updateMeasureAndBeats,
} from './song.utils';

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
    isOwner: false,
  },
  songPlayer: {
    currentBar: null,
    currentBeat: null,
    currentHand: 1,
    currentSound: [],
    isSongPlaying: false,
  },
  ui: {
    autoMove: false,
    currentDropdown: null,
    countOpen: false,
    handsOpen: false,
    headersOpen: true,
    isEditingSong: true,
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
      state.songPlayer.isSongPlaying = true;
      state.ui.currentDropdown = null;
    },
    stopSongPlayback(state) {
      state.songPlayer.currentBar = null;
      state.songPlayer.currentBeat = null;
      state.songPlayer.currentHand = 1;
      state.songPlayer.currentSound = [];
      state.songPlayer.isSongPlaying = false;
    },
    updateSongPlayer(state, { payload }) {
      const { currentBar, currentBeat, currentHand, currentSound } = payload;
      if (currentBar) state.songPlayer.currentBar = currentBar;
      if (currentBeat) state.songPlayer.currentBeat = currentBeat;
      state.songPlayer.currentHand = currentHand || 1;
      state.songPlayer.currentSound = currentSound || [];
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
        bar.measure,
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
        payload.barId,
      );

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement = state.arrangement.filter(
        (barId) => barId !== payload.barId,
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
        newBar.measure,
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
      console.log({ payload });
      const { song, scale, getScale, editSong } = payload;

      const parsedSong = parseFetchedSong(song, scale, getScale);
      const autoMoveOrder = createAutoMoveOrder(parsedSong);

      state.autoMoveOrder = autoMoveOrder;
      state.arrangement = parsedSong.arrangement;
      state.bars = parsedSong.bars;
      state.beats = parsedSong.beats;
      state.info = parsedSong.info;
      state.mutedBars = {};
      state.refs.composer = parsedSong.refs.composer;
      state.refs.isPrivate = parsedSong.refs.isPrivate;
      state.refs.songId = parsedSong.refs.songId;
      state.refs.scaleId = parsedSong.refs.scaleId;
      state.refs.isOwner = parsedSong.refs.isOwner;
      state.ui.isEditingSong = editSong;
      state.ui.currentDropdown = null;
      state.ui.scaleName = parsedSong.ui.scaleName;
      state.ui.scaleLabel = parsedSong.ui.scaleLabel; // NOTE: not used but could be added to save song popup
    },
    updateBarSubdivisions(state, { payload }) {
      const { barId, newSubdivisions } = payload;
      const { metre, subdivisions } = state.bars[barId];

      const lengthDifference = compareSubdivisionsLength(
        subdivisions,
        newSubdivisions,
        metre,
      );

      if (lengthDifference !== 0) {
        const { addBeats, deleteBeats, newMeasure } = updateMeasureAndBeats(
          state.bars[barId],
          newSubdivisions,
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
        state.ui.multiSelect,
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
    toggleMuteBar(state, { payload }) {
      const { solo, barId } = payload;

      if (!solo) {
        state.mutedBars[barId] = !state.mutedBars[barId];
      } else {
        const mutedBarsAry = Object.keys(state.mutedBars).filter(
          (bar) => state.mutedBars[bar],
        );
        const clearSolo =
          mutedBarsAry.length &&
          mutedBarsAry.length === state.arrangement.length - 1 &&
          !mutedBarsAry.includes(barId);

        const mutedBars = clearSolo
          ? {}
          : state.arrangement.reduce((acc, bar) => {
              if (barId !== bar) acc[bar] = true;
              return acc;
            }, {});

        state.mutedBars = mutedBars;
      }
    },
    updateSongInfo(state, { payload }) {
      Object.assign(state.info, payload.songInfo);
    },
    updateSongUi(state, { payload }) {
      Object.assign(state.ui, payload.songUi);
    },
    togglePrivateSong(state) {
      state.refs.isPrivate = !state.refs.isPrivate;
    },
    toggleAutoMove(state) {
      state.ui.autoMove = !state.ui.autoMove;
    },
    toggleEditSong(state) {
      state.ui.isEditingSong = !state.ui.isEditingSong;
      state.ui.currentDropdown = null;
      state.mutedBars = {};
    },
    toggleMultiSelect(state) {
      state.ui.multiSelect = !state.ui.multiSelect;
    },
    toggleCount(state) {
      state.ui.countOpen = !state.ui.countOpen;
    },
    toggleHeaders(state) {
      state.ui.headersOpen = !state.ui.headersOpen;
    },
    toggleHands(state) {
      state.ui.handsOpen = !state.ui.handsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      songExtendedApi.endpoints.saveSong.matchFulfilled,
      (state, action) => {
        const { song, scale } = action.payload;

        state.refs.isOwner = song.isOwner;
        state.refs.composer = song.composer;
        state.refs.songId = song.songId;
        state.refs.scaleId = scale.scaleId;
        state.ui.scaleName = scale.scaleName;
        state.ui.scaleLabel = scale.scaleLabel;
      },
    );
    builder.addMatcher(
      songExtendedApi.endpoints.deleteSongById.matchFulfilled,
      (state, action) => {
        if (action.payload.song.songId !== state.refs.songId) return;

        state.refs.isOwner = false;
        state.refs.composer = '';
        state.refs.songId = null;
        state.refs.scaleId = null;
        state.ui.scaleName = '';
        state.ui.scaleLabel = '';
      },
    );
    builder.addMatcher(
      userExtendedApi.endpoints.signOut.matchFulfilled,
      (state) => {
        state.refs.isOwner = false;
      },
    );
    builder.addMatcher(isSignInAction, (state, action) => {
      state.refs.isOwner = action.payload.song.isOwner;
    });
  },
});

export const {
  startSongPlayback,
  stopSongPlayback,
  updateSongPlayer,
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
  toggleMuteBar,
  updateSongInfo,
  updateSongUi,
  togglePrivateSong,
  toggleAutoMove,
  toggleEditSong,
  toggleMultiSelect,
  toggleCount,
  toggleHands,
  toggleHeaders,
} = songSlice.actions;

export default songSlice;
