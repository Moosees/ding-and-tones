export const arrangementState = ['bar_a', 'bar_b', 'bar_c'];

export const barsState = {
  bar_a: {
    metre: 's44',
    subdivision: 4,
    repeats: 1,
    measure: ['aa', 'ab', 'ac', 'ad'],
  },
  bar_b: {
    metre: 's44',
    subdivision: 4,
    repeats: 1,
    measure: ['ba', 'bb', 'bc', 'bd'],
  },
  bar_c: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    measure: ['ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'cg', 'ch'],
  },
};

export const beatsState = {
  aa: { sound: ['0'], value: 4, mode: 'c' },
  ab: { sound: ['1'], value: 4, mode: 'c' },
  ac: { sound: ['2'], value: 4, mode: 'c' },
  ad: { sound: ['3'], value: 4, mode: 'c' },
  ba: { sound: ['4'], value: 4, mode: 'c' },
  bb: { sound: ['5'], value: 4, mode: 'c' },
  bc: { sound: ['6'], value: 4, mode: 'c' },
  bd: { sound: ['7'], value: 4, mode: 'c' },
  ca: { sound: ['8'], value: 4, mode: 'c' },
  cb: { sound: ['-'], value: 8, mode: 'c' },
  cc: { sound: ['T'], value: 4, mode: 'c' },
  cd: { sound: ['-'], value: 8, mode: 'c' },
  ce: { sound: ['5', '7'], value: 4, mode: 'c' },
  cf: { sound: ['-'], value: 8, mode: 'c' },
  cg: { sound: ['t'], value: 4, mode: 'c' },
  ch: { sound: ['4', '6'], value: 8, mode: 'c' },
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
