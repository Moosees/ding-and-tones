import { createFullScaleFromNames } from './scale.utils';

export const scaleState = {
  error: '',
  isDeleting: false,
  isFetching: false,
  isSaving: false,
  label: '(A2) C3 E3 F3 G3 A3 B3 C4 E4',
  layout: 1,
  name: 'A Integral',
  scale: {
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
  },
};
