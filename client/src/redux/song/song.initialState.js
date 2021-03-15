export const arrangementState = ['bar_a', 'bar_b', 'bar_c'];

export const barsState = {
  bar_a: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    measure: ['aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah'],
  },
  bar_b: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    measure: ['ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg', 'bh'],
  },
  bar_c: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    measure: ['ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'cg', 'ch'],
  },
};

export const beatsState = {
  aa: { sound: ['0'], value: 4, mode: 'c', hand: 1 },
  ab: { sound: ['t'], value: 8, mode: 'c', hand: 2 },
  ac: { sound: ['1'], value: 4, mode: 'c', hand: 1 },
  ad: { sound: ['t'], value: 8, mode: 'c', hand: 2 },
  ae: { sound: ['5'], value: 4, mode: 'c', hand: 1 },
  af: { sound: ['t'], value: 8, mode: 'c', hand: 2 },
  ag: { sound: ['7'], value: 4, mode: 'c', hand: 1 },
  ah: { sound: ['6'], value: 8, mode: 'c', hand: 2 },
  ba: { sound: ['1'], value: 4, mode: 'c', hand: 1 },
  bb: { sound: ['t'], value: 8, mode: 'c', hand: 2 },
  bc: { sound: ['t'], value: 4, mode: 'c', hand: 1 },
  bd: { sound: ['4'], value: 8, mode: 'c', hand: 2 },
  be: { sound: ['5'], value: 4, mode: 'c', hand: 1 },
  bf: { sound: ['t'], value: 8, mode: 'c', hand: 2 },
  bg: { sound: ['3'], value: 4, mode: 'c', hand: 1 },
  bh: { sound: ['2'], value: 8, mode: 'c', hand: 2 },
  ca: { sound: ['T'], value: 4, mode: 'c', hand: 1 },
  cb: { sound: ['t'], value: 8, mode: 'c', hand: 2 },
  cc: { sound: ['7'], value: 4, mode: 'c', hand: 1 },
  cd: { sound: ['6'], value: 8, mode: 'c', hand: 2 },
  ce: { sound: ['5'], value: 4, mode: 'c', hand: 1 },
  cf: { sound: ['2'], value: 8, mode: 'c', hand: 2 },
  cg: { sound: ['0'], value: 4, mode: 'c', hand: 1 },
  ch: { sound: ['-'], value: 8, mode: 'c', hand: 2 },
};

export const infoState = {
  bpm: 100,
  difficulty: 1,
  metre: 's44',
  subdivision: 8,
  title: 'Is this a song',
};

export const uiState = {
  composer: null,
  isDeleting: false,
  isFetching: false,
  isSaving: false,
  isOwner: false,
  songId: null,
};
