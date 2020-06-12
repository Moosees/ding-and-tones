export default {
  order: ['bar_a', 'bar_b', 'bar_c', 'bar_d'],
  data: {
    bar_a: {
      metre: 's44',
      subdivision: 4,
      lengthInBeats: 4,
      repeats: 1,
    },
    bar_b: {
      metre: 's34',
      subdivision: 8,
      lengthInBeats: 3,
      repeats: 1,
    },
    bar_c: {
      metre: 'x332',
      subdivision: 8,
      lengthInBeats: 4,
      repeats: 1,
    },
    bar_d: {
      metre: 'c68',
      subdivision: 8,
      lengthInBeats: 3,
      repeats: 1,
    },
  },
  measure: {
    bar_a: [
      { beatId: 'aa', sound: '0', value: 4 },
      { beatId: 'ab', sound: '0', value: 8 },
      { beatId: 'ac', sound: '0', value: 4 },
      { beatId: 'ad', sound: '0', value: 8 },
      { beatId: 'ae', sound: '0', value: 4 },
      { beatId: 'af', sound: '0', value: 8 },
      { beatId: 'ag', sound: '0', value: 4 },
      { beatId: 'ah', sound: '0', value: 8 },
    ],
    bar_b: [
      { beatId: 'ba', sound: 'P', value: 4 },
      { beatId: 'bb', sound: '0', value: 8 },
      { beatId: 'bc', sound: '0', value: 4 },
      { beatId: 'bd', sound: 'P', value: 8 },
      { beatId: 'be', sound: '0', value: 4 },
      { beatId: 'bf', sound: '0', value: 8 },
    ],
    bar_c: [
      { beatId: 'ca', sound: '0', value: 4 },
      { beatId: 'cb', sound: 'P', value: 8 },
      { beatId: 'cc', sound: 'P', value: 8 },
      { beatId: 'cd', sound: '0', value: 4 },
      { beatId: 'ce', sound: 'P', value: 8 },
      { beatId: 'cf', sound: 'P', value: 8 },
      { beatId: 'cg', sound: '0', value: 4 },
      { beatId: 'ch', sound: 'P', value: 8 },
    ],
    bar_d: [
      { beatId: 'da', sound: '0', value: 4 },
      { beatId: 'db', sound: 'P', value: 8 },
      { beatId: 'dc', sound: 'P', value: 8 },
      { beatId: 'dd', sound: '0', value: 4 },
      { beatId: 'de', sound: 'P', value: 8 },
      { beatId: 'df', sound: 'P', value: 8 },
    ],
  },
};
