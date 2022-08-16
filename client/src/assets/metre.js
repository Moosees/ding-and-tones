const parseBeatTemplates = (beatTemplate, beatIndex) => {
  return beatTemplate.count.map((rawCount, i) => {
    const count = rawCount === 'X' ? `${beatIndex + 1}` : rawCount;

    return { count, value: beatTemplate.values[i] };
  });
};

export const createBarTemplate = (metre, subdivision) => {
  const barTemplates = metreList[metre].templates;

  return subdivision.reduce((acc, beatSubdivision, i) => {
    const beatTemplates = barTemplates[beatSubdivision];

    return [...acc, ...parseBeatTemplates(beatTemplates, i)];
  }, []);
};

export const metreList = {
  s24: {
    group: 'Simple metre',
    name: '2/4',
    nameShort: '2/4',
    template: [4, 16, 8, 16, 4, 16, 8, 16],
    count: ['1', 'e', '&', 'a', '2', 'e', '&', 'a'],
    lengthInBeats: 2,
    minSubdivision: 4,
    subdivisionCount: {
      4: 2,
      8: 4,
      16: 8,
    },
  },
  s34: {
    group: 'Simple metre',
    name: '3/4',
    nameShort: '3/4',
    template: [4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'e', '&', 'a', '2', 'e', '&', 'a', '3', 'e', '&', 'a'],
    lengthInBeats: 3,
    minSubdivision: 4,
    subdivisionCount: {
      4: 3,
      8: 6,
      16: 12,
    },
  },
  s44: {
    group: 'Simple metre',
    name: '4/4',
    nameShort: '4/4',
    template: [4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16],
    templates: {
      4: {
        values: [4],
        count: ['X'],
      },
      8: {
        values: [4, 8],
        count: ['X', '&'],
      },
      16: {
        values: [4, 16, 8, 16],
        count: ['X', 'e', '&', 'a'],
      },
    },
    // prettier-ignore
    count: ['1', 'e', '&', 'a', '2', 'e', '&', 'a', '3', 'e', '&', 'a','4', 'e', '&', 'a'],
    lengthInBeats: 4,
    minSubdivision: 4,
    subdivisionCount: {
      4: 4,
      8: 8,
      16: 16,
    },
  },
  s54: {
    group: 'Simple metre',
    name: '5/4',
    nameShort: '5/4',
    // prettier-ignore
    template: [ 4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'e', '&', 'a', '2', 'e', '&', 'a', '3', 'e', '&', 'a','4', 'e', '&', 'a', '5', 'e', '&', 'a'],
    lengthInBeats: 5,
    minSubdivision: 4,
    subdivisionCount: {
      4: 5,
      8: 10,
      16: 15,
    },
  },
  c68: {
    group: 'Compound metre',
    name: '6/8',
    nameShort: '6/8',
    template: [4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16],
    // prettier-ignore
    count: ['1','ta', 'la', 'ta', 'le', 'ta', '2','ta', 'la', 'ta', 'le', 'ta'],
    lengthInBeats: 3,
    minSubdivision: 8,
    subdivisionCount: {
      4: 2,
      8: 6,
      16: 12,
    },
  },
  c98: {
    group: 'Compound metre',
    name: '9/8',
    nameShort: '9/8',
    template: [4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16],
    // prettier-ignore
    count: ['1','ta', 'la', 'ta', 'le', 'ta', '2','ta', 'la', 'ta', 'le', 'ta', '3','ta', 'la', 'ta', 'le', 'ta'],
    lengthInBeats: 4.5,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 9,
      16: 18,
    },
  },
  c128: {
    group: 'Compound metre',
    name: '12/8',
    nameShort: '12/8',
    // prettier-ignore
    template: [ 4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16],
    // prettier-ignore
    count: ['1','ta', 'la', 'ta', 'le', 'ta', '2','ta', 'la', 'ta', 'le', 'ta', '3','ta', 'la', 'ta', 'le', 'ta', '4','ta', 'la', 'ta', 'le', 'ta'],
    lengthInBeats: 6,
    minSubdivision: 8,
    subdivisionCount: {
      4: 4,
      8: 12,
      16: 24,
    },
  },
  x223: {
    group: 'Complex metre',
    name: '7/8 - 2-2-3',
    nameShort: '7/8',
    template: [4, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'ta', 'la', 'ta', '2', 'ta', 'la', 'ta', '3', 'ta', 'la', 'ta', 'le', 'ta'],
    lengthInBeats: 3.5,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 7,
      16: 14,
    },
  },
  x232: {
    group: 'Complex metre',
    name: '7/8 - 2-3-2',
    nameShort: '7/8',
    template: [4, 16, 8, 16, 4, 16, 8, 16, 8, 16, 4, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'ta', 'la', 'ta', '2', 'ta', 'la', 'ta', 'le', 'ta', '3', 'ta', 'la', 'ta'],
    lengthInBeats: 3.5,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 7,
      16: 14,
    },
  },
  x322: {
    group: 'Complex metre',
    name: '7/8 - 3-2-2',
    nameShort: '7/8',
    template: [4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'ta', 'la', 'ta', 'le', 'ta', '2', 'ta', 'la', 'ta', '3', 'ta', 'la', 'ta'],
    lengthInBeats: 3.5,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 7,
      16: 14,
    },
  },
  x233: {
    group: 'Complex metre',
    name: '8/8 - 2-3-3',
    nameShort: '8/8',
    template: [4, 16, 8, 16, 4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'ta', 'la', 'ta', '2', 'ta', 'la', 'ta', 'le', 'ta', '3', 'ta', 'la', 'ta', 'le', 'ta'],
    lengthInBeats: 4,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 8,
      16: 16,
    },
  },
  x323: {
    group: 'Complex metre',
    name: '8/8 - 3-2-3',
    nameShort: '8/8',
    template: [4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 4, 16, 8, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'ta', 'la', 'ta', 'le', 'ta', '2', 'ta', 'la', 'ta', '3', 'ta', 'la', 'ta', 'le', 'ta'],
    lengthInBeats: 4,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 8,
      16: 16,
    },
  },
  x332: {
    group: 'Complex metre',
    name: '8/8 - 3-3-2',
    nameShort: '8/8',
    template: [4, 16, 8, 16, 8, 16, 4, 16, 8, 16, 8, 16, 4, 16, 8, 16],
    // prettier-ignore
    count: ['1', 'ta', 'la', 'ta', 'le', 'ta', '2', 'ta', 'la', 'ta', 'le', 'ta', '3', 'ta', 'la', 'ta'],
    lengthInBeats: 4,
    minSubdivision: 8,
    subdivisionCount: {
      4: 3,
      8: 8,
      16: 16,
    },
  },
};
