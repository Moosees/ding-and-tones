import { createFullScaleFromNames } from './scale.utils';

export const infoState = {
  label: 'E2 (A2) C3 D3 E3 G3 A3 C4 D4 E4',
  layout: 1,
  name: 'minor pentatonic',
  rootName: 'A',
  rootValue: 33,
};

export const notesState = {
  round: ['A2', 'C3', 'D3', 'E3', 'G3', 'A3', 'C4', 'D4', 'E4'],
  extra: [{ note: 'E2', pos: 'A1' }],
  scaleFull: createFullScaleFromNames(
    ['A2', 'C3', 'D3', 'E3', 'G3', 'A3', 'C4', 'D4', 'E4'],
    [{ note: 'E2', pos: 'A1' }]
  ),
};

export const uiState = {
  isDeleting: false,
  isFetching: false,
  isOwner: false,
  isSaving: false,
  scaleId: null,
};
