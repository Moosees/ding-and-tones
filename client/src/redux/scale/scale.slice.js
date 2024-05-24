import { createSlice } from '@reduxjs/toolkit';

import { defaultScale } from '../../assets/defaultData';
import { parseScaleData } from './scale.utils';

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
    isDeleting: false,
    isFetching: false,
    isOwner: false,
    isSaving: false,
    scaleId: null,
  },
};

const scaleSlice = createSlice({
  name: 'scale',
  initialState: INITIAL_STATE,
  reducers: {},
});

export default scaleSlice.reducer;
