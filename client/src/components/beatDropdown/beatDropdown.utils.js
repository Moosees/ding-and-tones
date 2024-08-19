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
