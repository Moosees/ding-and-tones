export const arrangementState = ['bar_a', 'bar_b', 'bar_c'];

export const barsState = {
  bar_a: {
    metre: 's44',
    subdivision: 4,
    lengthInBeats: 4,
    repeats: 1,
    measure: ['aa', 'ab', 'ac', 'ad'],
  },
  bar_b: {
    metre: 's44',
    subdivision: 4,
    lengthInBeats: 4,
    repeats: 1,
    measure: ['ba', 'bb', 'bc', 'bd'],
  },
  bar_c: {
    metre: 's44',
    subdivision: 8,
    lengthInBeats: 4,
    repeats: 1,
    measure: ['ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'cg', 'ch'],
  },
};

export const beatsState = {
  aa: { sound: '0', value: 4 },
  ab: { sound: '1', value: 4 },
  ac: { sound: '2', value: 4 },
  ad: { sound: '3', value: 4 },
  ba: { sound: '4', value: 4 },
  bb: { sound: '5', value: 4 },
  bc: { sound: '6', value: 4 },
  bd: { sound: '7', value: 4 },
  ca: { sound: '8', value: 4 },
  cb: { sound: '-', value: 8 },
  cc: { sound: 'T', value: 4 },
  cd: { sound: '_', value: 8 },
  ce: { sound: '0', value: 4 },
  cf: { sound: '-', value: 8 },
  cg: { sound: 't', value: 4 },
  ch: { sound: 't', value: 8 },
};

export const infoState = {
  bpm: 100,
  difficulty: 1,
  metre: 's44',
  subdivision: 4,
  title: 'This is a song',
};

export const uiState = {
  composer: null,
  isDeleting: false,
  isFetching: false,
  isSaving: false,
  isOwner: false,
  songId: null,
};
