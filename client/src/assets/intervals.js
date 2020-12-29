export const drumModes = {
  NUMBERS: 1,
  NOTES: 2,
  INTERVALS: 3,
};

// prettier-ignore
export const noteNameToValue = {
  'C1': 12,
  'C#1': 13,
  'Db1': 13,
  'D1': 14,
  'D#1': 15,
  'Eb1': 15,
  'E1': 16,
  'F1': 17,
  'F#1': 18,
  'Gb1': 18,
  'G1': 19,
  'G#1': 20,
  'Ab1': 20,
  'A1': 21,
  'A#1': 22,
  'Bb1': 22,
  'B1': 23,
  'C2': 24,
  'C#2': 25,
  'Db2': 25,
  'D2': 26,
  'D#2': 27,
  'Eb2': 27,
  'E2': 28,
  'F2': 29,
  'F#2': 30,
  'Gb2': 30,
  'G2': 31,
  'G#2': 32,
  'Ab2': 32,
  'A2': 33,
  'A#2': 34,
  'Bb2': 34,
  'B2': 35,
  'C3': 36,
  'C#3': 37,
  'Db3': 37,
  'D3': 38,
  'D#3': 39,
  'Eb3': 39,
  'E3': 40,
  'F3': 41,
  'F#3': 42,
  'Gb3': 42,
  'G3': 43,
  'G#3': 44,
  'Ab3': 44,
  'A3': 45,
  'A#3': 46,
  'Bb3': 46,
  'B3': 47,
  'C4': 48,
  'C#4': 49,
  'Db4': 49,
  'D4': 50,
  'D#4': 51,
  'Eb4': 51,
  'E4': 52,
  'F4': 53,
  'F#4': 54,
  'Gb4': 54,
  'G4': 55,
  'G#4': 56,
  'Ab4': 56,
  'A4': 57,
  'A#4': 58,
  'Bb4': 58,
  'B4': 59,
  'C5': 60,
  'C#5': 61,
  'Db5': 61,
  'D5': 62,
  'D#5': 63,
  'Eb5': 63,
  'E5': 64,
  'F5': 65,
  'F#5': 66,
  'Gb5': 66,
  'G5': 67,
  'G#5': 68,
  'Ab5': 68,
  'A5': 69,
  'A#5': 70,
  'Bb5': 70,
  'B5': 71,
  'C6': 72
};

export const noteValueToName = {
  12: 'C1',
  13: 'Db1',
  14: 'D1',
  15: 'Eb1',
  16: 'E1',
  17: 'F1',
  18: 'Gb1',
  19: 'G1',
  20: 'Ab1',
  21: 'A1',
  22: 'Bb1',
  23: 'B1',
  24: 'C2',
  25: 'Db2',
  26: 'D2',
  27: 'Eb2',
  28: 'E2',
  29: 'F2',
  30: 'Gb2',
  31: 'G2',
  32: 'Ab2',
  33: 'A2',
  34: 'Bb2',
  35: 'B2',
  36: 'C3',
  37: 'Db3',
  38: 'D3',
  39: 'Eb3',
  40: 'E3',
  41: 'F3',
  42: 'Gb3',
  43: 'G3',
  44: 'Ab3',
  45: 'A3',
  46: 'Bb3',
  47: 'B3',
  48: 'C4',
  49: 'Db4',
  50: 'D4',
  51: 'Eb4',
  52: 'E4',
  53: 'F4',
  54: 'Gb4',
  55: 'G4',
  56: 'Ab4',
  57: 'A4',
  58: 'Bb4',
  59: 'B4',
  60: 'C5',
  61: 'Db5',
  62: 'D5',
  63: 'Eb5',
  64: 'E5',
  65: 'F5',
  66: 'Gb5',
  67: 'G5',
  68: 'Ab5',
  69: 'A5',
  70: 'Bb5',
  71: 'B5',
  72: 'C6',
};

// This might be useful later
// export const sharpToFlat = {
//   'C#1': 'Db1',
//   'D#1': 'Eb1',
//   'F#1': 'Gb1',
//   'G#1': 'Ab1',
//   'A#1': 'Bb1',
//   'C#2': 'Db2',
//   'D#2': 'Eb2',
//   'F#2': 'Gb2',
//   'G#2': 'Ab2',
//   'A#2': 'Bb2',
//   'C#3': 'Db3',
//   'D#3': 'Eb3',
//   'F#3': 'Gb3',
//   'G#3': 'Ab3',
//   'A#3': 'Bb3',
//   'C#4': 'Db4',
//   'D#4': 'Eb4',
//   'F#4': 'Gb4',
//   'G#4': 'Ab4',
//   'A#4': 'Bb4',
//   'C#5': 'Db5',
//   'D#5': 'Eb5',
//   'F#5': 'Gb5',
//   'G#5': 'Ab5',
//   'A#5': 'Bb5',
// };

export const intervals = {
  0: {
    name: 'Tonic',
    inverted: 'Octave',
    nameShort: 'P1',
    invertedShort: 'P8',
    color: '#A70227',
    colorInverted: '#A90327',
    semitones: 0,
  },
  1: {
    name: 'Minor Second',
    inverted: 'Major Seventh',
    nameShort: 'm2',
    invertedShort: 'M7',
    color: '#B7D1E7',
    colorInverted: '#95B6D8',
    semitones: 1,
  },
  2: {
    name: 'Major Second',
    inverted: 'Minor Seventh',
    nameShort: 'M2',
    invertedShort: 'm7',
    color: '#DCF0F7',
    colorInverted: '#628CC1',
    semitones: 2,
  },
  3: {
    name: 'Minor Third',
    inverted: 'Major Sixth',
    nameShort: 'm3',
    invertedShort: 'M6',
    color: '#E57452',
    colorInverted: '#EE9766',
    semitones: 3,
  },
  4: {
    name: 'Major Third',
    inverted: 'Minor Sixth',
    nameShort: 'M3',
    invertedShort: 'm6',
    color: '#DA4738',
    colorInverted: '#FAC983',
    semitones: 4,
  },
  5: {
    name: 'Perfect Fourth',
    inverted: 'Perfect Fifth',
    nameShort: 'P4',
    invertedShort: 'P5',
    color: '#EEEACA',
    colorInverted: '#BC1527',
    semitones: 5,
  },
  6: {
    name: 'Augmented Fourth',
    inverted: 'Diminished Fifth',
    nameShort: 'A4',
    invertedShort: 'D5',
    color: '#36409A',
    colorInverted: '#36409A',
    semitones: 6,
  },
  7: {
    name: 'Perfect Fifth',
    inverted: 'Perfect Fourth',
    nameShort: 'P5',
    invertedShort: 'P4',
    color: '#BC1527',
    colorInverted: '#EEEACA',
    semitones: 7,
  },
  8: {
    name: 'Minor Sixth',
    inverted: 'Major Third',
    nameShort: 'm6',
    invertedShort: 'M3',
    color: '#FAC983',
    colorInverted: '#DA4738',
    semitones: 8,
  },
  9: {
    name: 'Major Sixth',
    inverted: 'Minor Third',
    nameShort: 'M6',
    invertedShort: 'm3',
    color: '#EE9766',
    colorInverted: '#E57452',
    semitones: 9,
  },
  10: {
    name: 'Minor Seventh',
    inverted: 'Major Second',
    nameShort: 'm7',
    invertedShort: 'M2',
    color: '#628CC1',
    colorInverted: '#DCF0F7',
    semitones: 10,
  },
  11: {
    name: 'Major Seventh',
    inverted: 'Minor Second',
    nameShort: 'M7',
    invertedShort: 'm2',
    color: '#95B6D8',
    colorInverted: '#B7D1E7',
    semitones: 11,
  },
  12: {
    name: 'Octave',
    inverted: 'Octave',
    nameShort: 'P8',
    invertedShort: 'P8',
    color: '#A90327',
    colorInverted: '#A90327',
    semitones: 12,
  },
  13: {
    name: 'Minor Ninth',
    nameShort: 'm9',
    color: '#AECAE3',
    semitones: 13,
  },
  14: {
    name: 'Major Ninth',
    nameShort: 'M9',
    color: '#D6EBF4',
    semitones: 14,
  },
  15: {
    name: 'Minor Tenth',
    nameShort: 'm10',
    color: '#E9835B',
    semitones: 15,
  },
  16: {
    name: 'Major Tenth',
    nameShort: 'M10',
    color: '#DC513E',
    semitones: 16,
  },
  17: {
    name: 'Perfect Eleventh',
    nameShort: 'P11',
    color: '#ECEBD1',
    semitones: 17,
  },
  18: {
    name: 'Augmented Eleventh',
    nameShort: 'A11',
    color: '#343B98',
    semitones: 18,
  },
  19: {
    name: 'Perfect Twelfth',
    nameShort: 'P12',
    color: '#C51E27',
    semitones: 19,
  },
  20: {
    name: 'Minor Thirteenth',
    nameShort: 'm13',
    color: '#FEDD8E',
    semitones: 20,
  },
  21: {
    name: 'Major Thirteenth',
    nameShort: 'M13',
    color: '#F0A16C',
    semitones: 21,
  },
  22: {
    name: 'Minor Fourteenth',
    nameShort: 'm14',
    color: '#5985BD',
    semitones: 22,
  },
  23: {
    name: 'Major Fourteenth',
    nameShort: 'M14',
    color: '#8CAFD4',
    semitones: 23,
  },
  24: {
    name: 'Second Octave',
    nameShort: 'P15',
    color: '#AE0827',
    semitones: 24,
  },
  // 25: {
  //   name: 'Augmented Fifteenth',
  //   nameSimple: 'Minor Second 8va',
  //   nameShort: 'A15',
  //   color: '#fff',
  //   semitones: 25,
  // },
  // other: {
  //   name: 'Other',
  //   nameShort: 'X',
  //   color: '#FF00FF'
  // },
  // bass: {
  //   name: 'Lower',
  //   nameShort: 'Sub',
  //   color: '#CC004A'
  // }
};

// export const intervalsByDissonanceGrouped = [
//   [0, 12, 24, 7, 19],
//   [4, 16, 3, 15, 9, 21, 8, 20],
//   [5, 17],
//   [2, 14, 1, 13, 11, 23, 10, 22],
//   [6, 18],
// ];

// export const intervalsByDissonanceFlat = intervalsByDissonanceGrouped.flat();
