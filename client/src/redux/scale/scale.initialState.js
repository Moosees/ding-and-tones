import { createFullScaleFromNames } from './scale.utils';

export const infoState = {
  label: '(A2) C3 D3 E3 G3 A3 C4 D4 E4',
  layout: 1,
  name: 'minor pentatonic',
  rootName: 'A',
  rootValue: 33,
  rootIndex: 0,
};

export const notesState = {
  round: ['A2', 'C3', 'D3', 'E3', 'G3', 'A3', 'C4', 'D4', 'E4'],
  extra: [],
  scaleFull: createFullScaleFromNames(
    ['A2', 'C3', 'D3', 'E3', 'G3', 'A3', 'C4', 'D4', 'E4'],
    []
  ).newFull,
};

export const uiState = {
  hasChanges: false,
  isDeleting: false,
  isFetching: false,
  isOwner: false,
  isSaving: false,
  positionMap: [
    { rotate: 0, translate: 0 },
    { rotate: 0, translate: 6.6 },
    { rotate: 45, translate: 6.6 },
    { rotate: 315, translate: 6.6 },
    { rotate: 90, translate: 6.6 },
    { rotate: 270, translate: 6.6 },
    { rotate: 135, translate: 6.6 },
    { rotate: 225, translate: 6.6 },
    { rotate: 180, translate: 6.6 },
  ],
  scaleId: null,
};
