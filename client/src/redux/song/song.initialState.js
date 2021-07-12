export const arrangementState = ['bar_a', 'bar_b', 'bar_c'];

export const barsState = {
  bar_a: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    //prettier-ignore
    measure: [{ beatId: 'aa', count: '1', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'ab', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'ac', count: '2', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'ad', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'ae', count: '3', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'af', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'ag', count: '4', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'ah', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }],
  },
  bar_b: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    //prettier-ignore
    measure: [{ beatId: 'ba', count: '1', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'bb', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'bc', count: '2', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'bd', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'be', count: '3', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'bf', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'bg', count: '4', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'bh', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }],
  },
  bar_c: {
    metre: 's44',
    subdivision: 8,
    repeats: 1,
    //prettier-ignore
    measure: [{ beatId: 'ca', count: '1', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'cb', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'cc', count: '2', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'cd', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'ce', count: '3', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'cf', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }, { beatId: 'cg', count: '4', value: 4 },{ beatId: null, count: 'e', value: 16 },{ beatId: 'ch', count: '&', value: 8 },{ beatId: null, count: 'a', value: 16 }],
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
  scaleId: null,
  scaleName: '',
  scaleLabel: '',
};
