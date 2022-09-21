export const subdivisionOptions = {
  s: [
    {
      label: '4ths',
      value: 4,
      subdivisionByLength: {
        1: 4,
      },
    },
    {
      label: '8ths',
      value: 8,
      subdivisionByLength: {
        1: 8,
      },
    },
    {
      label: 'Trip8',
      value: 9,
      subdivisionByLength: {
        1: 9,
      },
    },
    {
      label: '16ths',
      value: 16,
      subdivisionByLength: {
        1: 16,
      },
    },
    {
      label: 'Trip16',
      value: 17,
      subdivisionByLength: {
        1: 17,
      },
    },
  ],
  c: [
    {
      label: '8ths',
      value: 8,
      subdivisionByLength: {
        3: 8,
      },
    },
    {
      label: '16ths',
      value: 16,
      subdivisionByLength: {
        3: 16,
      },
    },
    {
      label: 'Trip16',
      value: 17,
      subdivisionByLength: {
        3: 17,
      },
    },
  ],
  x: [
    {
      label: '8ths',
      value: 8,
      subdivisionByLength: {
        2: 8,
        3: 8,
      },
    },
    {
      label: 'Trip8',
      value: 9,
      subdivisionByLength: {
        2: 9,
        3: 8,
      },
    },
    {
      label: '16ths',
      value: 16,
      subdivisionByLength: {
        2: 16,
        3: 16,
      },
    },
    {
      label: 'Trip16',
      value: 17,
      subdivisionByLength: {
        2: 17,
        3: 16,
      },
    },
  ],
};

export const beatSubdivisionTemplates = {
  base4: {
    length1: {
      4: {
        label: '4ths',
        values: [4],
        count: ['X'],
        beatLength: [12],
        triplets: [0],
        groupEnd: [0],
      },
      8: {
        label: '8ths',
        values: [4, 8],
        count: ['X', '&'],
        beatLength: [6, 6],
        triplets: [0, 0],
        groupEnd: [1],
      },
      9: {
        label: 'Trip8',
        values: [4, 9, 9],
        count: ['X', 'trip', 'let'],
        beatLength: [4, 4, 4],
        triplets: [1, 2, 3],
        groupEnd: [2],
      },
      16: {
        label: '16ths',
        values: [4, 16, 8, 16],
        count: ['X', 'e', '&', 'a'],
        beatLength: [3, 3, 3, 3],
        triplets: [0, 0, 0, 0],
        groupEnd: [3],
      },
      17: {
        label: 'Trip16',
        values: [4, 17, 17, 8, 17, 17],
        count: ['X', 'trip', 'let', '&', 'trip', 'let'],
        beatLength: [2, 2, 2, 2, 2, 2],
        triplets: [1, 2, 3, 1, 2, 3],
        groupEnd: [5],
      },
      18: {
        label: '4-333',
        values: [4, 8, 17, 17],
        count: ['X', '&', 'trip', 'let'],
        beatLength: [6, 2, 2, 2],
        triplets: [0, 1, 2, 3],
        groupEnd: [3],
      },
      19: {
        label: '88-333',
        values: [4, 16, 8, 17, 17],
        count: ['X', 'e', '&', 'trip', 'let'],
        beatLength: [3, 3, 2, 2, 2],
        triplets: [0, 0, 1, 2, 3],
        groupEnd: [4],
      },
      20: {
        label: '333-4',
        values: [4, 17, 17, 8],
        count: ['X', 'trip', 'let', '&'],
        beatLength: [2, 2, 2, 6],
        triplets: [1, 2, 3, 0],
        groupEnd: [3],
      },
      21: {
        label: '333-88',
        values: [4, 17, 17, 8, 16],
        count: ['X', 'trip', 'let', '&', 'a'],
        beatLength: [2, 2, 2, 3, 3],
        triplets: [1, 2, 3, 0, 0],
        groupEnd: [4],
      },
    },
  },
  base8: {
    length2: {
      8: {
        label: '8ths',
        values: [4, 8],
        count: ['X', 'la'],
        beatLength: [6, 6],
        triplets: [0, 0],
        groupEnd: [1],
      },
      9: {
        label: 'Trip8',
        values: [4, 9, 9],
        count: ['X', 'trip', 'let'],
        beatLength: [4, 4, 4],
        triplets: [1, 2, 3],
        groupEnd: [2],
      },
      16: {
        label: '16ths',
        values: [4, 16, 8, 16],
        count: ['X', 'ta', 'la', 'ta'],
        beatLength: [3, 3, 3, 3],
        triplets: [0, 0, 0, 0],
        groupEnd: [3],
      },
      17: {
        label: 'Trip16',
        values: [4, 17, 17, 8, 17, 17],
        count: ['X', 'trip', 'let', 'la', 'trip', 'let'],
        beatLength: [2, 2, 2, 2, 2, 2],
        triplets: [1, 2, 3, 1, 2, 3],
        groupEnd: [5],
      },
      19: {
        label: '88-333',
        values: [4, 16, 8, 17, 17],
        count: ['X', 'ta', 'la', 'trip', 'let'],
        beatLength: [3, 3, 2, 2, 2],
        triplets: [0, 0, 1, 2, 3],
        groupEnd: [4],
      },
      21: {
        label: '333-88',
        values: [4, 17, 17, 8, 16],
        count: ['X', 'trip', 'let', 'la', 'ta'],
        beatLength: [2, 2, 2, 3, 3],
        triplets: [1, 2, 3, 0, 0],
        groupEnd: [4],
      },
    },
    length3: {
      8: {
        label: '8ths',
        values: [4, 8, 8],
        count: ['X', 'la', 'le'],
        beatLength: [6, 6, 6],
        triplets: [0, 0, 0],
        groupEnd: [2],
      },
      10: {
        label: '8-333',
        values: [4, 8, 9, 9],
        count: ['X', 'la', 'trip', 'let'],
        beatLength: [6, 4, 4, 4],
        triplets: [0, 1, 2, 3],
        groupEnd: [3],
      },
      11: {
        label: '333-8',
        values: [4, 9, 9, 8],
        count: ['X', 'trip', 'let', 'le'],
        beatLength: [4, 4, 4, 6],
        triplets: [1, 2, 3, 0],
        groupEnd: [3],
      },
      16: {
        label: '16ths',
        values: [4, 16, 8, 16, 8, 16],
        count: ['X', 'ta', 'la', 'ta', 'le', 'ta'],
        beatLength: [3, 3, 3, 3, 3, 3],
        triplets: [0, 0, 0, 0, 0, 0],
        groupEnd: [5],
      },
      17: {
        label: 'Trip16',
        values: [4, 17, 17, 8, 17, 17, 8, 17, 17],
        count: ['X', 'trip', 'let', 'la', 'trip', 'let', 'le', 'trip', 'let'],
        beatLength: [2, 2, 2, 2, 2, 2, 2, 2, 2],
        triplets: [1, 2, 3, 1, 2, 3, 1, 2, 3],
        groupEnd: [8],
      },
      18: {
        label: '333-16-16',
        values: [4, 17, 17, 8, 16, 8, 16],
        count: ['X', 'trip', 'let', 'la', 'ta', 'le', 'ta'],
        beatLength: [2, 2, 2, 3, 3, 3, 3],
        triplets: [1, 2, 3, 0, 0, 0, 0],
        groupEnd: [6],
      },
      19: {
        label: '16-333-16',
        values: [4, 16, 8, 17, 17, 8, 16],
        count: ['X', 'ta', 'la', 'trip', 'let', 'le', 'ta'],
        beatLength: [3, 3, 2, 2, 2, 3, 3],
        triplets: [0, 0, 1, 2, 3, 0, 0],
        groupEnd: [6],
      },
      20: {
        label: '16-16-333',
        values: [4, 16, 8, 16, 8, 17, 17],
        count: ['X', 'ta', 'la', 'ta', 'le', 'trip', 'let'],
        beatLength: [3, 3, 3, 3, 2, 2, 2],
        triplets: [0, 0, 0, 0, 1, 2, 3],
        groupEnd: [6],
      },
    },
  },
};
