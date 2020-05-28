import { v4 as uuid } from 'uuid';

const chords = [
  { name: 'major', nameShort: '', intervals: [0, 4, 7] },
  { name: 'major 6th', nameShort: '6', intervals: [0, 4, 7, 9] },
  { name: 'dominant 7th', nameShort: '7', intervals: [0, 4, 7, 10] },
  { name: 'major 7th', nameShort: 'M7', intervals: [0, 4, 7, 11] },
  { name: 'augmented', nameShort: 'aug', intervals: [0, 4, 8] },
  { name: 'augmented 7th', nameShort: 'aug7', intervals: [0, 4, 8, 10] },
  { name: 'minor', nameShort: 'm', intervals: [0, 3, 7] },
  { name: 'minor 6th', nameShort: 'm6', intervals: [0, 3, 7, 9] },
  { name: 'minor 7th', nameShort: 'm7', intervals: [0, 3, 7, 10] },
  { name: 'min-maj 7th', nameShort: 'mM7', intervals: [0, 3, 7, 11] },
  { name: 'diminished', nameShort: 'dim', intervals: [0, 3, 6] },
  { name: 'diminished 7th', nameShort: 'dim7', intervals: [0, 3, 6, 9] },
];

export const chordList = chords.map((chord) => ({
  ...chord,
  id: uuid(),
  isSelected: true,
}));
