export const arrangementState = ['bar_a', 'bar_d'];

export const barsState = {
  bar_a: {
    metre: 's44',
    subdivision: 4,
    lengthInBeats: 4,
    repeats: 1,
    measure: ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah'],
  },
  bar_d: {
    metre: 'c68',
    subdivision: 8,
    lengthInBeats: 3,
    repeats: 1,
    measure: ['da', 'db', 'dc', 'dd', 'de', 'df'],
  },
};

export const beatsState = {
  aa: { sound: '1', value: 4 },
  ab: { sound: '2', value: 8 },
  ac: { sound: '3', value: 4 },
  ad: { sound: '4', value: 8 },
  ae: { sound: '5', value: 4 },
  af: { sound: '6', value: 8 },
  ag: { sound: '7', value: 4 },
  ah: { sound: '8', value: 8 },
  da: { sound: '0', value: 4 },
  db: { sound: '-', value: 8 },
  dc: { sound: '-', value: 8 },
  dd: { sound: '0', value: 4 },
  de: { sound: '-', value: 8 },
  df: { sound: '-', value: 8 },
};

export const infoState = {
  bpm: 100,
  difficulty: 1,
  metre: 's44',
  subdivision: 4,
  title: 'This is a song',
};

export const uiState = {
  error: '',
  isDeleting: false,
  isFetching: false,
  isSaving: false,
  isOwner: false,
  songId: null,
};
