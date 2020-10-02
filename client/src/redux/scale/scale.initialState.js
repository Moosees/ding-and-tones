import { createFullScaleFromNames } from './scale.utils';

export const infoState = {
  label: '(A2) C3 E3 F3 G3 A3 B3 C4 E4',
  layout: 1,
  name: 'Integral',
  rootName: 'A',
  rootValue: 33,
};

export const notesState = {
  round: ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'],
  scaleFull: createFullScaleFromNames([
    'A2',
    'C3',
    'E3',
    'F3',
    'G3',
    'A3',
    'B3',
    'C4',
    'E4',
  ]),
};

export const uiState = {
  isDeleting: false,
  isFetching: false,
  isOwner: false,
  isSaving: false,
  scaleId: null,
};
