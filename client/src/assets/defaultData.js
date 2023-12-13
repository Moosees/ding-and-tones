import { v4 as uuid } from 'uuid';

export const defaultScale = {
  info: {
    label: '(A2) C3 D3 E3 G3 A3 C4 D4 E4',
    layout: 1,
    name: 'minor pentatonic',
    rootName: 'A',
    rootValue: 33,
    rootIndex: 0,
    sharpNotes: true,
  },
  isOwner: false,
  notes: {
    dings: ['A2'],
    round: ['C3', 'D3', 'E3', 'G3', 'A3', 'C4', 'D4', 'E4'],
    extra: [],
  },
  scaleId: null,
};

export const createDefaultSong = () => {
  const getId = ({ _id }) => _id;

  const barBeatsA = [
    {
      _id: uuid(),
      sound: '0',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '1',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '5',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '7',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: '6',
      mode: 'c',
      hand: 2,
    },
  ];

  const barBeatsB = [
    {
      _id: uuid(),
      sound: '1',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: '4',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '5',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '3',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: '2',
      mode: 'c',
      hand: 2,
    },
  ];

  const barBeatsC = [
    {
      _id: uuid(),
      sound: 'T',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: 't',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '7',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: '6',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '5',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: '2',
      mode: 'c',
      hand: 2,
    },
    {
      _id: uuid(),
      sound: '0',
      mode: 'c',
      hand: 1,
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
    {
      _id: uuid(),
      sound: '-',
      mode: 'c',
    },
  ];

  const bars = [
    {
      _id: uuid(),
      measure: barBeatsA.map(getId),
      metre: 's44',
      repeats: 1,
      subdivisions: [9, 9, 9, 9],
    },
    {
      _id: uuid(),
      measure: barBeatsB.map(getId),
      metre: 's44',
      repeats: 1,
      subdivisions: [9, 9, 9, 9],
    },
    {
      _id: uuid(),
      measure: barBeatsC.map(getId),
      metre: 's44',
      repeats: 1,
      subdivisions: [9, 9, 9, 9],
    },
  ];

  return {
    isOwner: false,
    songId: null,
    composer: null,
    arrangement: bars.map(getId),
    isPrivate: false,
    scale: null,
    info: {
      bpm: 80,
      difficulty: 1,
      metre: 's44',
      subdivision: 9,
      title: 'Is this a shuffle',
    },
    bars,
    beats: [...barBeatsA, ...barBeatsB, ...barBeatsC],
  };
};
