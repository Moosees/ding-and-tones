export const barSubdivisionOptions = {
  base4: [
    {
      label: '4ths',
      subdivisionByLength: {
        1: 4,
      },
    },
    {
      label: '8ths',
      subdivisionByLength: {
        1: 8,
      },
    },
    {
      label: 'Trip8',
      subdivisionByLength: {
        1: 9,
      },
    },
    {
      label: '16ths',
      subdivisionByLength: {
        1: 16,
      },
    },
    {
      label: 'Trip16',
      subdivisionByLength: {
        1: 17,
      },
    },
  ],
  base8: [
    {
      label: '8ths',
      subdivisionByLength: {
        2: 8,
        3: 8,
      },
    },
    {
      label: 'Trip8',
      subdivisionByLength: {
        2: 9,
        3: 8,
      },
    },
    {
      label: '16ths',
      subdivisionByLength: {
        2: 16,
        3: 16,
      },
    },
    {
      label: 'Trip16',
      subdivisionByLength: {
        2: 17,
        3: 16,
      },
    },
  ],
};

export const subdivisions = {
  base4: {
    length1: {
      4: {
        label: '4ths',
        values: [4],
        count: ['X'],
        beatLength: [12],
      },
      8: {
        label: '8ths',
        values: [4, 8],
        count: ['X', '&'],
        beatLength: [6, 6],
      },
      9: {
        label: 'Trip8',
        values: [8, 8, 8],
        count: ['X', 'trip', 'let'],
        beatLength: [4, 4, 4],
      },
      16: {
        label: '16ths',
        values: [4, 16, 8, 16],
        count: ['X', 'e', '&', 'a'],
        beatLength: [3, 3, 3, 3],
      },
      17: {
        label: 'Trip16',
        values: [16, 16, 16, 16, 16, 16],
        count: ['X', 'trip', 'let', '&', 'trip', 'let'],
        beatLength: [2, 2, 2, 2, 2, 2],
      },
      18: {
        label: '4-333',
        values: [4, 16, 16, 16],
        count: ['X', '&', 'trip', 'let'],
        beatLength: [6, 2, 2, 2],
      },
      19: {
        label: '88-333',
        values: [4, 16, 16, 16, 16],
        count: ['X', 'e', '&', 'trip', 'let'],
        beatLength: [3, 3, 2, 2, 2],
      },
      20: {
        label: '333-4',
        values: [16, 16, 16, 8],
        count: ['X', 'trip', 'let', '&'],
        beatLength: [2, 2, 2, 6],
      },
      21: {
        label: '333-88',
        values: [16, 16, 16, 8, 16],
        count: ['X', 'trip', 'let', '&', 'a'],
        beatLength: [2, 2, 2, 3, 3],
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
      },
      9: {
        label: 'Trip8',
        values: [8, 8, 8],
        count: ['X', 'trip', 'let'],
        beatLength: [4, 4, 4],
      },
      16: {
        label: '16ths',
        values: [4, 16, 8, 16],
        count: ['X', 'ta', 'la', 'ta'],
        beatLength: [3, 3, 3, 3],
      },
      17: {
        label: 'Trip16',
        values: [16, 16, 16, 16, 16, 16],
        count: ['X', 'trip', 'let', 'la', 'trip', 'let'],
        beatLength: [2, 2, 2, 2, 2, 2],
      },
      19: {
        label: '88-333',
        values: [4, 16, 16, 16, 16],
        count: ['X', 'ta', 'la', 'trip', 'let'],
        beatLength: [3, 3, 2, 2, 2],
      },
      21: {
        label: '333-88',
        values: [16, 16, 16, 8, 16],
        count: ['X', 'trip', 'let', 'la', 'ta'],
        beatLength: [2, 2, 2, 3, 3],
      },
    },
    length3: {
      8: {
        label: '8ths',
        values: [4, 8, 8],
        count: ['X', 'la', 'le'],
        beatLength: [6, 6, 6],
      },
      10: {
        label: '8-333',
        values: [4, 16, 16, 16],
        count: ['X', 'la', 'trip', 'let'],
        beatLength: [6, 4, 4, 4],
      },
      11: {
        label: '333-8',
        values: [16, 16, 16, 8],
        count: ['X', 'trip', 'let', 'le'],
        beatLength: [4, 4, 4, 6],
      },
      16: {
        label: '16ths',
        values: [4, 16, 8, 16, 8, 16],
        count: ['X', 'ta', 'la', 'ta', 'le', 'ta'],
        beatLength: [3, 3, 3, 3, 3, 3],
      },
      17: {
        label: 'Trip16',
        values: [16, 16, 16, 16, 16, 16, 16, 16, 16],
        count: ['X', 'trip', 'let', 'la', 'trip', 'let', 'le', 'trip', 'let'],
        beatLength: [2, 2, 2, 2, 2, 2, 2, 2, 2],
      },
      18: {
        label: '333-16-16',
        values: [16, 16, 16, 8, 16, 8, 16],
        count: ['X', 'trip', 'let', 'la', 'ta', 'le', 'ta'],
        beatLength: [2, 2, 2, 3, 3, 3, 3],
      },
      19: {
        label: '16-333-16',
        values: [4, 16, 16, 16, 16, 8, 16],
        count: ['X', 'ta', 'la', 'trip', 'let', 'le', 'ta'],
        beatLength: [3, 3, 2, 2, 2, 3, 3],
      },
      20: {
        label: '16-16-333',
        values: [4, 16, 8, 16, 16, 16, 16],
        count: ['X', 'ta', 'la', 'ta', 'le', 'trip', 'let'],
        beatLength: [3, 3, 3, 3, 2, 2, 2],
      },
    },
  },
};
