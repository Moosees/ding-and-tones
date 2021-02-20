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
  aa: { sound: ['0'], value: 4, mode: 'c', hand: 2 },
  ab: { sound: ['1'], value: 4, mode: 'c', hand: 1 },
  ac: { sound: ['2'], value: 4, mode: 'c', hand: 2 },
  ad: { sound: ['3'], value: 4, mode: 'c', hand: 1 },
  ba: { sound: ['4'], value: 4, mode: 'c', hand: 2 },
  bb: { sound: ['5'], value: 4, mode: 'c', hand: 1 },
  bc: { sound: ['6'], value: 4, mode: 'c', hand: 2 },
  bd: { sound: ['7'], value: 4, mode: 'c', hand: 1 },
  ca: { sound: ['8'], value: 4, mode: 'c', hand: 2 },
  cb: { sound: ['-'], value: 8, mode: 'c', hand: 0 },
  cc: { sound: ['T'], value: 4, mode: 'c', hand: 2 },
  cd: { sound: ['-'], value: 8, mode: 'c', hand: 0 },
  ce: { sound: ['5', '7'], value: 4, mode: 'c', hand: 1 },
  cf: { sound: ['-'], value: 8, mode: 'c', hand: 0 },
  cg: { sound: ['t'], value: 4, mode: 'c', hand: 1 },
  ch: { sound: ['4', '6'], value: 8, mode: 'c', hand: 2 },
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
