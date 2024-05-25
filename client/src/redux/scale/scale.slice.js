import { createSlice } from '@reduxjs/toolkit';
import { defaultScale } from '../../assets/defaultData';
import {
	addExtraNotesPos,
	createFullScaleFromNames,
	createPositionMap,
	createScaleLabel,
	parseScaleData,
	sortScaleByFreq,
} from './scale.utils';

export const { info, notes, parsed } = parseScaleData(defaultScale, true);

const INITIAL_STATE = {
  info: {
    label: info.label,
    layout: info.layout,
    name: info.name,
    rotation: 180,
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
    positions: parsed.pitched,
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
          newInnerSorted.length
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
        state.info.sharpNotes
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
      state.ui.hasChanges = true;
      state.ui.isOwner = false;
      state.ui.scaleId = null;
    },
    loadScale(state, { payload }) {
      const { scale, suppressAlert } = payload;
      const { notes, parsed, info, isOwner, scaleId } = parseScaleData(
        scale,
        suppressAlert
      );

      state.notes = notes;
      state.parsed = parsed;
      state.info = { ...state.info, ...info };
      state.ui.isOwner = isOwner;
      state.ui.scaleId = scaleId;
      state.ui.hasChanges = false;
    },
  },
});

export default scaleSlice.reducer;
