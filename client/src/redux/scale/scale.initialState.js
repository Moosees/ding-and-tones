import { createFullScaleFromNames } from './scale.utils';

export const scaleState = {
  error: '',
  isFetching: false,
  label: '(A2) C3 E3 F3 G3 A3 B3 C4 E4',
  layout: 1,
  name: 'A Integral',
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
  scaleSimple: ['A2', 'C3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'E4'],
};
