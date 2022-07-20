import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';

export const createKeyboardCbs = (beatId, soundCb, handCb, scale) => {
  const percussionCbs = {
    [beatOptionToKeyCode['t']]: () => soundCb(beatId, 't'),
    [beatOptionToKeyCode['T']]: () => soundCb(beatId, 'T'),
  };

  const handCbs = hands.reduce((acc, { short, value }) => {
    const key = beatOptionToKeyCode[short];
    return { ...acc, [key]: () => handCb(beatId, value) };
  }, {});

  const soundCbs = scale.reduce((acc, { option }) => {
    const key = beatOptionToKeyCode[option];
    return { ...acc, [key]: () => soundCb(beatId, option) };
  }, {});

  return { ...percussionCbs, ...handCbs, ...soundCbs };
};

export const createSoundLists = (scale, sharpNotes) => {
  const initialSounds = {
    round: [],
    extra: [],
    dings: [],
    percussive: [
      { howl: 't', label: 'Soft Tak', option: 't' },
      { howl: 'T', label: 'Loud Tak', option: 'T' },
    ],
  };

  return scale.reduce((acc, { type, note, noteSharp, option }) => {
    acc[type].push({
      howl: note,
      label: sharpNotes ? noteSharp : note,
      option,
    });
    return acc;
  }, initialSounds);
};
