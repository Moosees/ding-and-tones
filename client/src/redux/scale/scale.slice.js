import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Howler } from 'howler';
import { defaultScale } from '../../assets/defaultData';
import { getNoteLabelFromName, noteValueToName } from '../../assets/intervals';
import { audioSources, getAudioSrc } from '../../assets/sound/audioOptions';
import { api } from '../api/api.slice';
import {
  isFirstLoadAction,
  isSignInAction,
  userExtendedApi,
} from '../user/user.api';
import { changeAudioSrc, updateHowls } from './howls.utils';
import { scaleExtendedApi } from './scale.api';
import {
  addExtraNotesPos,
  createFullScaleFromNames,
  createPositionMap,
  createScaleLabel,
  parseScaleData,
  sortScaleByFreq,
  transposeNotesToDestination,
} from './scale.utils';

const { info, notes, parsed } = parseScaleData(defaultScale);

const INITIAL_STATE = {
  howls: {
    audioSrc: audioSources[0],
    status: {},
    volume: 0.8,
  },
  info: {
    label: info.label,
    layout: info.layout,
    name: info.name,
    rotation: info.rotation,
    rootName: info.rootName,
    rootValue: info.rootValue,
    rootIndex: info.rootIndex,
    sharpNotes: info.sharpNotes,
  },
  notes: {
    dings: notes.dings,
    round: notes.round,
    extra: notes.extra,
  },
  parsed: {
    pitched: parsed.pitched,
    positions: parsed.positions,
  },
  ui: {
    hasChanges: false,
    isOwner: false,
    scaleId: null,
  },
};

const scaleSlice = createSlice({
  name: 'scale',
  initialState: INITIAL_STATE,
  reducers: {
    addNoteToScale(state, { payload }) {
      const { newNote, isAddingExtraNotes } = payload;
      const update = {};

      if (isAddingExtraNotes) {
        const newExtraSorted = sortScaleByFreq([
          ...state.notes.extra.map(({ note }) => note),
          newNote,
        ]);

        update.extra = addExtraNotesPos(newExtraSorted);
      } else {
        const newInnerSorted = sortScaleByFreq([
          ...state.notes.dings,
          ...state.notes.round,
          newNote,
        ]);

        const newPositions = createPositionMap(
          state.info.layout,
          newInnerSorted.length,
        );

        update.dings = [newInnerSorted[0]];
        update.round = newInnerSorted.slice(1);
        update.positions = newPositions;
      }

      const tempNotes = {
        dings: update.dings || state.notes.dings,
        round: update.round || state.notes.round,
        extra: update.extra || state.notes.extra,
      };

      const { rootInfo, pitched } = createFullScaleFromNames(
        tempNotes,
        state.info.sharpNotes,
      );

      if (isAddingExtraNotes) {
        state.notes.extra = update.extra;
      } else {
        state.notes.dings = update.dings;
        state.notes.round = update.round;
        state.parsed.positions = update.positions;
      }
      state.parsed.pitched = pitched;
      state.info.label = createScaleLabel(tempNotes, state.info.sharpNotes);
      state.info.rootName = rootInfo.rootName;
      state.info.rootValue = rootInfo.rootValue;
      state.info.rootIndex = rootInfo.rootIndex;
    },
    loadScale(state, { payload }) {
      const { scale } = payload;
      console.log({ scale });
      const { notes, parsed, info, isOwner, scaleId } = parseScaleData(scale);
      console.log({ notes, parsed, info, isOwner, scaleId });

      state.notes = notes;
      state.parsed = parsed;
      state.info = { ...state.info, ...info };
      state.ui.isOwner = isOwner;
      state.ui.scaleId = scaleId;
      state.ui.hasChanges = false;
    },
    moveExtraNotes(state, { payload }) {
      const { oldPos, newPos, swap } = payload;

      const extra = state.notes.extra.map(({ note, pos }) => {
        if (swap && pos === newPos) return { note, pos: oldPos };
        if (pos === oldPos) return { note, pos: newPos };

        return { note, pos };
      });

      state.notes.extra = extra;
    },
    newScale(state) {
      const notes = { dings: ['A3'], round: [], extra: [] };
      const { rootInfo, pitched } = createFullScaleFromNames(
        notes,
        state.info.sharpNotes,
      );

      state.notes = notes;
      state.parsed.pitched = pitched;
      state.positions = [{ rotate: 0, translate: 0 }];
      state.info.label = createScaleLabel(notes, state.info.sharpNotes);
      state.info.layout = 1;
      state.info.name = 'New Scale';
      state.info.rootName = rootInfo.rootName;
      state.info.rootValue = rootInfo.rootValue;
      state.info.rootIndex = rootInfo.rootIndex;
    },
    removeNoteFromScale(state, action) {
      const { noteToRemove, type } = action.payload;

      console.log(type);
      const update = {};

      if (['extra', 'round'].includes(type)) {
        update[type] = state.notes[type].filter(
          (note) => (note.note || note) !== noteToRemove,
        );
      } else if (state.notes.dings.length + state.notes.round.length === 1) {
        return;
      } else {
        update.dings = [state.notes.round[0]];
        update.round = state.notes.round.slice(1);
      }

      const tempNotes = {
        dings: update.dings || state.notes.dings,
        round: update.round || state.notes.round,
        extra: update.extra || state.notes.extra,
      };

      const { rootInfo, pitched } = createFullScaleFromNames(
        tempNotes,
        state.info.sharpNotes,
      );

      if (type === 'extra') {
        state.notes.extra = tempNotes.extra;
      } else {
        state.notes.dings = tempNotes.dings; // Should always exist in update?
        state.notes.round = tempNotes.round; // Should always exist in update?
        state.parsed.positions = createPositionMap(
          state.info.layout,
          tempNotes.dings.length + tempNotes.round.length,
        );
      }

      state.parsed.pitched = pitched;
      state.info.label = createScaleLabel(tempNotes, state.info.sharpNotes);
      state.info.rootName = rootInfo.rootName;
      state.info.rootValue = rootInfo.rootValue;
      state.info.rootIndex = rootInfo.rootIndex;
    },
    rotateDrumToAngle(state, { payload }) {
      state.info.rotation = payload.angle;
    },
    setScaleName(state, { payload }) {
      state.info.name = payload.name;
    },
    toggleSharps(state) {
      state.info.rootName = getNoteLabelFromName(
        noteValueToName[state.info.rootValue],
        !state.info.sharpNotes,
      ).slice(0, -1);
      state.info.label = createScaleLabel(state.notes, !state.info.sharpNotes);
      state.info.sharpNotes = !state.info.sharpNotes;
    },
    transposeScale(state, { payload }) {
      const { destination } = payload;

      const update = transposeNotesToDestination(
        { ...state.notes },
        destination,
      );

      if (!update.dings[0]) return;

      const { rootInfo, pitched } = createFullScaleFromNames(
        update,
        state.info.sharpNotes,
      );

      const oldLength = state.notes.round.length + state.notes.dings.length;
      const newLength = update.round.length + update.dings.length;

      if (oldLength !== newLength) {
        state.parsed.positions = createPositionMap(
          state.info.layout,
          newLength,
        );
      }

      state.notes = update;
      state.parsed.pitched = pitched;
      state.info.label = createScaleLabel(update, state.info.sharpNotes);
      state.info.rootName = rootInfo.rootName;
      state.info.rootValue = rootInfo.rootValue;
      state.info.rootIndex = rootInfo.rootIndex;
    },
    setVolume(state, { payload }) {
      Howler.volume(payload.volume);

      state.howls.volume = payload.volume;
    },
    updateHowlLoadingStatus(state, { payload }) {
      const { note, status } = payload;

      if (!state.howls.status[note]) return; // TODO: check if needed

      state.howls.status[note] = status;
    },
    selectAudioSrc(state, { payload }) {
      if (state.howls.audioSrc.option === payload.audioOption) return;

      const audioSrc = getAudioSrc(payload.audioOption);
      const status = changeAudioSrc(audioSrc.path, state.parsed.pitched);

      state.howls.audioSrc = audioSrc;
      state.howls.status = status;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isChangeScaleAction, (state) => {
      state.ui.isOwner = false;
      state.ui.scaleId = null;
      state.ui.hasChanges = true;
    });
    builder.addMatcher(isChangeNotesAction, (state) => {
      const status = updateHowls(
        state.howls.status,
        state.howls.audioSrc.path,
        state.parsed.pitched,
      );

      console.log({ newStatus: status });
      state.howls.status = status;
    });
    builder.addMatcher(
      scaleExtendedApi.endpoints.deleteScaleById.matchFulfilled,
      (state, action) => {
        if (action.payload.scale.scaleId !== state.ui.scaleId) return;

        state.ui.isOwner = false;
        state.ui.scaleId = null;
        state.ui.hasChanges = true;
      },
    );
    builder.addMatcher(
      scaleExtendedApi.endpoints.saveScale.matchFulfilled,
      (state, action) => {
        state.ui.isOwner = true;
        state.ui.scaleId = action.payload.scale.scaleId;
        state.ui.hasChanges = false;
      },
    );
    builder.addMatcher(
      userExtendedApi.endpoints.signOut.matchFulfilled,
      (state) => {
        state.ui.isOwner = false;
      },
    );
    builder.addMatcher(isSignInAction, (state, action) => {
      state.ui.isOwner = action.payload.scale.isOwner;
    });
    builder.addMatcher(isFirstLoadAction, (state, action) => {
      const { endpointName, originalArgs } = action.meta.arg;
      console.log('isFirstLoadAction', { endpointName, originalArgs });

      let loadScale = false;

      if (
        endpointName === 'checkSession' &&
        !originalArgs.scaleId &&
        !originalArgs.songId
      )
        loadScale = true;

      if (
        ['getSongById', 'getScaleById'].includes(endpointName) &&
        Object.keys(state.howls.status).length === 0
      ) {
        // NOTE: Fallback if getSomethingById is REJECTED
        loadScale = true;
      }

      if (loadScale) {
        console.log('isFirstLoadAction LOAD SCALE');
        const firstHowlStatus = updateHowls(
          {},
          audioSources[0].path,
          parsed.pitched,
        );

        state.howls.status = firstHowlStatus;
      } else {
        console.log('isFirstLoadAction SKIP');
      }
    });
    builder.addMatcher(
      api.endpoints.getSongById.matchFulfilled,
      (state, action) => {
        const getScale = action.meta.arg.originalArgs.getScale;

        if (getScale && action.payload.scale) return;
        if (Object.keys(state.howls.status).length > 0) return;

        console.log('LOADING SCALES AS SCALE NOT FOUND WITH SONG', { action });
        const firstHowlStatus = updateHowls(
          {},
          audioSources[0].path,
          parsed.pitched,
        );

        state.howls.status = firstHowlStatus;
      },
    );
  },
});

export const isChangeScaleAction = isAnyOf(
  scaleSlice.actions.addNoteToScale,
  scaleSlice.actions.newScale,
  scaleSlice.actions.moveExtraNotes,
  scaleSlice.actions.removeNoteFromScale,
  scaleSlice.actions.rotateDrumToAngle,
  scaleSlice.actions.setScaleName,
  scaleSlice.actions.toggleSharps,
  scaleSlice.actions.transposeScale,
);

export const isChangeNotesAction = isAnyOf(
  scaleSlice.actions.addNoteToScale,
  scaleSlice.actions.loadScale,
  scaleSlice.actions.newScale,
  scaleSlice.actions.removeNoteFromScale,
  scaleSlice.actions.transposeScale,
);

export const {
  addNoteToScale,
  loadScale,
  newScale,
  moveExtraNotes,
  removeNoteFromScale,
  rotateDrumToAngle,
  setScaleName,
  toggleSharps,
  transposeScale,
  setVolume,
  updateHowlLoadingStatus,
  selectAudioSrc,
} = scaleSlice.actions;

export default scaleSlice;
