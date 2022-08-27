import { beatsList } from './beats';

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
    beatLengths: [1, 1, 1, 1],
    templates: { ...beatsList.base4.length1 }, // remove
    lengthInBeats: 4, // remove
    minSubdivision: 4, // rename to metreBase
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
