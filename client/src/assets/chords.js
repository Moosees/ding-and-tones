import { v4 as uuid } from 'uuid';

const chords = [
  { isSelected: true, name: 'major', nameShort: '', intervals: [0, 4, 7] },
  { isSelected: true, name: 'minor', nameShort: 'm', intervals: [0, 3, 7] },
  { name: '5th', nameShort: '5', intervals: [0, 7] },
  {
    name: 'dominant 7th',
    nameShort: '7',
    intervals: [0, 4, 7, 10],
  },
  {
    name: 'major 7th',
    nameShort: 'M7',
    intervals: [0, 4, 7, 11],
  },
  {
    name: 'minor 7th',
    nameShort: 'm7',
    intervals: [0, 3, 7, 10],
  },
  {
    name: 'min-maj 7th',
    nameShort: 'mM7',
    intervals: [0, 3, 7, 11],
  },
  {
    name: 'major 6th',
    nameShort: '6',
    intervals: [0, 4, 7, 9],
  },
  {
    name: 'minor 6th',
    nameShort: 'm6',
    intervals: [0, 3, 7, 9],
  },
  {
    name: 'augmented',
    nameShort: 'aug',
    intervals: [0, 4, 8],
  },
  {
    name: 'augmented 7th',
    nameShort: 'aug7',
    intervals: [0, 4, 8, 10],
  },
  {
    name: '7b5',
    nameShort: '7b5',
    intervals: [0, 4, 6, 10],
  },
  {
    name: 'diminished',
    nameShort: 'dim',
    intervals: [0, 3, 6],
  },
  {
    name: 'diminished 7th',
    nameShort: 'dim7',
    intervals: [0, 3, 6, 9],
  },
  {
    name: 'half-diminished',
    nameShort: 'm7b5',
    intervals: [0, 3, 6, 10],
  },
  { name: 'sus2', nameShort: 'sus2', intervals: [0, 2, 7] },
  { name: 'sus4', nameShort: 'sus4', intervals: [0, 5, 7] },
  { name: 'add2/add9', nameShort: 'add', intervals: [0, 2, 4, 7] },
  { name: 'add4/add11', nameShort: 'add4', intervals: [0, 4, 5, 7] },
];

export const chordList = chords.map((chord) => ({
  ...chord,
  id: uuid(),
  isSelected: chord.isSelected || false,
}));
