export const noteNameToValue = {
  C1: 12,
  'C#1': 13,
  Db1: 13,
  D1: 14,
  'D#1': 15,
  Eb1: 15,
  E1: 16,
  F1: 17,
  'F#1': 18,
  Gb1: 18,
  G1: 19,
  'G#1': 20,
  Ab1: 20,
  A1: 21,
  'A#1': 22,
  Bb1: 22,
  B1: 23,
  C2: 24,
  'C#2': 25,
  Db2: 25,
  D2: 26,
  'D#2': 27,
  Eb2: 27,
  E2: 28,
  F2: 29,
  'F#2': 30,
  Gb2: 30,
  G2: 31,
  'G#2': 32,
  Ab2: 32,
  A2: 33,
  'A#2': 34,
  Bb2: 34,
  B2: 35,
  C3: 36,
  'C#3': 37,
  Db3: 37,
  D3: 38,
  'D#3': 39,
  Eb3: 39,
  E3: 40,
  F3: 41,
  'F#3': 42,
  Gb3: 42,
  G3: 43,
  'G#3': 44,
  Ab3: 44,
  A3: 45,
  'A#3': 46,
  Bb3: 46,
  B3: 47,
  C4: 48,
  'C#4': 49,
  Db4: 49,
  D4: 50,
  'D#4': 51,
  Eb4: 51,
  E4: 52,
  F4: 53,
  'F#4': 54,
  Gb4: 54,
  G4: 55,
  'G#4': 56,
  Ab4: 56,
  A4: 57,
  'A#4': 58,
  Bb4: 58,
  B4: 59,
  C5: 60,
  'C#5': 61,
  Db5: 61,
  D5: 62,
  'D#5': 63,
  Eb5: 63,
  E5: 64,
  F5: 65,
  'F#5': 66,
  Gb5: 66,
  G5: 67,
  'G#5': 68,
  Ab5: 68,
  A5: 69,
  'A#5': 70,
  Bb5: 70,
  B5: 71,
  C6: 72
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
  72: 'C6'
};

export const intervals = {
  0: {
    name: 'Perfect Unison',
    shortName: 'P1',
    color: '#000',
    halfsteps: 0
  },
  1: {
    name: 'Minor Second',
    shortName: 'm2',
    color: '#5D00FC',
    halfsteps: 1
  },
  2: {
    name: 'Major Second',
    shortName: 'M2',
    color: '#006CFC',
    halfsteps: 2
  },
  3: {
    name: 'Minor Third',
    shortName: 'm3',
    color: '#FECB00',
    halfsteps: 3
  },
  4: {
    name: 'Major Third',
    shortName: 'M3',
    color: '#FE4C02',
    halfsteps: 4
  },
  5: {
    name: 'Perfect Fourth',
    shortName: 'P4',
    color: '#02FFFF',
    halfsteps: 5
  },
  6: {
    name: 'Tritone',
    shortName: 'TT',
    color: '#CAFE00',
    halfsteps: 6
  },
  7: {
    name: 'Perfect Fifth',
    shortName: 'P5',
    color: '#FD1601',
    halfsteps: 7
  },
  8: {
    name: 'Minor Sixth',
    shortName: 'm6',
    color: '#FEFF02',
    halfsteps: 8
  },
  9: {
    name: 'Major Sixth',
    shortName: 'M6',
    color: '#FEA300',
    halfsteps: 9
  },
  10: {
    name: 'Minor Seventh',
    shortName: 'm7',
    color: '#010FFF',
    halfsteps: 10
  },
  11: {
    name: 'Major Seventh',
    shortName: 'M7',
    color: '#BB00FF',
    halfsteps: 11
  },
  12: {
    name: 'Perfect Octave',
    shortName: 'P8',
    color: '#FF0000',
    halfsteps: 12
  },
  13: {
    name: 'Minor Ninth',
    shortName: 'm9',
    color: '#E100EE',
    halfsteps: 13
  },
  14: {
    name: 'Major Ninth',
    shortName: 'M9',
    color: '#0000FE',
    halfsteps: 14
  },
  15: {
    name: 'Minor Tenth',
    shortName: 'm10',
    color: '#7EFD03',
    halfsteps: 15
  },
  16: {
    name: 'Major Tenth',
    shortName: 'M10',
    color: '#FEFF02',
    halfsteps: 16
  },
  17: {
    name: 'Perfect Eleventh',
    shortName: 'P11',
    color: '#1DFF00',
    halfsteps: 17
  },
  18: {
    name: 'Augmented Eleventh',
    shortName: 'A11',
    color: '#00FD8A',
    halfsteps: 18
  },
  19: {
    name: 'Perfect Twelfth',
    shortName: 'P12',
    color: '#00FE00',
    halfsteps: 19
  },
  20: {
    name: 'Minor Thirteenth',
    shortName: 'm13',
    color: '#01FEE9',
    halfsteps: 20
  },
  21: {
    name: 'Major Thirteenth',
    shortName: 'M13',
    color: '#01A2FD',
    halfsteps: 21
  },
  22: {
    name: 'Minor Fourteenth',
    shortName: 'm14',
    color: '#9C00FD',
    halfsteps: 22
  },
  23: {
    name: 'Major Fourteenth',
    shortName: 'M14',
    color: '#4000FD',
    halfsteps: 23
  },
  24: {
    name: 'Second Octave',
    shortname: 'P15',
    color: '#FF0028',
    halfsteps: 24
  }
  // other: {
  //   name: 'Other',
  //   shortName: 'X',
  //   color: '#FF00FF'
  // },
  // bass: {
  //   name: 'Lower',
  //   shortName: 'Sub',
  //   color: '#CC004A'
  // }
};
