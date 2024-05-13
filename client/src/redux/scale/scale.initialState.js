import { defaultScale } from '../../assets/defaultData';
import { parseScaleData } from './scale.utils';

export const parsedDefaultScale = parseScaleData(defaultScale, true);

// export const infoState = {
//   label: '',
//   layout: 1,
//   name: '',
//   rotation: 180,
//   rootName: '',
//   rootValue: 33,
//   rootIndex: 0,
//   sharpNotes: true,
// };

export const infoState = {...parsedDefaultScale.info, rotation: 180};

// export const notesState = {
//   dings: [],
//   round: [],
//   extra: [],
// };

export const notesState = parsedDefaultScale.notes;

// export const parsedState = {
//   pitched: [],
//   positions: [],
// };

export const parsedState = parsedDefaultScale.parsed;

export const uiState = {
  hasChanges: false,
  isDeleting: false,
  isFetching: false,
  isOwner: false,
  isSaving: false,
  scaleId: null,
};
