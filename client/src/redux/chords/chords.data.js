import { v4 as uuid } from 'uuid';

const chords = [
  { isSelected: false, name: 'power chord', nameShort: '5', intervals: [0, 7] },
  { isSelected: true, name: 'major', nameShort: '', intervals: [0, 4, 7] },
  {
    isSelected: false,
    name: 'major 6th',
    nameShort: '6',
    intervals: [0, 4, 7, 9],
  },
  {
    isSelected: false,
    name: 'dominant 7th',
    nameShort: '7',
    intervals: [0, 4, 7, 10],
  },
  {
    isSelected: false,
    name: 'major 7th',
    nameShort: 'M7',
    intervals: [0, 4, 7, 11],
  },
  {
    isSelected: false,
    name: 'augmented',
    nameShort: 'aug',
    intervals: [0, 4, 8],
  },
  {
    isSelected: false,
    name: 'augmented 7th',
    nameShort: 'aug7',
    intervals: [0, 4, 8, 10],
  },
  { isSelected: true, name: 'minor', nameShort: 'm', intervals: [0, 3, 7] },
  {
    isSelected: false,
    name: 'minor 6th',
    nameShort: 'm6',
    intervals: [0, 3, 7, 9],
  },
  {
    isSelected: false,
    name: 'minor 7th',
    nameShort: 'm7',
    intervals: [0, 3, 7, 10],
  },
  {
    isSelected: false,
    name: 'min-maj 7th',
    nameShort: 'mM7',
    intervals: [0, 3, 7, 11],
  },
  {
    isSelected: false,
    name: 'diminished',
    nameShort: 'dim',
    intervals: [0, 3, 6],
  },
  {
    isSelected: false,
    name: 'diminished 7th',
    nameShort: 'dim7',
    intervals: [0, 3, 6, 9],
  },
];

export const chordList = chords.map((chord) => ({
  ...chord,
  id: uuid(),
}));
