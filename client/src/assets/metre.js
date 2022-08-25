import { base4 } from './metreTemplates';

const parseBeatTemplates = (beatTemplate, beatIndex) => {
  const { count, values, beatLength } = beatTemplate;

  return count.map((rawCount, i) => {
    const parsedCount = rawCount === 'X' ? `${beatIndex + 1}` : rawCount;

    return {
      count: parsedCount,
      value: values[i],
      beatLength: beatLength[i],
    };
  });
};

export const createBarTemplate = (metre, subdivision) => {
  console.log('createBarTemplate', { metre, subdivision });
  const barTemplates = metreList[metre].templates;

  const template = subdivision.reduce((acc, beatSubdivision, i) => {
    const beatTemplates = barTemplates[beatSubdivision];

    return [...acc, ...parseBeatTemplates(beatTemplates, i)];
  }, []);

  console.log({ template });
  return template;
};

export const getSubdivisionLength = (subdivision, metre) => {
  let length = 0;

  subdivision.forEach((beat) => {
    length += metreList[metre].templates[beat].values.length;
  });

  return length;
};

export const compareSubdivisionLength = (a, b, metre) => {
  console.log({ a, b, metre });
  return getSubdivisionLength(b, metre) - getSubdivisionLength(a, metre);
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
  },
  s44: {
    group: 'Simple metre',
    name: '4/4',
    nameShort: '4/4',
    // templates: ['length1', 'length1', 'length1']
    templates: { ...base4.length1 },
    lengthInBeats: 4, // to be removed
    // metreBase: 4,
    minSubdivision: 4,
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
  },
};
