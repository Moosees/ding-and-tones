export const getNonScaleNotes = (sound, scaleFull) => {
  // console.log({ sound, round, extra });
  if (sound.length === 0) return [];

  if (sound.length === 1 && ['-', 't', 'T'].includes(sound[0])) return [];

  const scale = ['t', 'T', '-', ...scaleFull.map((note) => `${note.option}`)];

  return sound.reduce((acc, hit) => {
    if (!scale.includes(hit)) {
      acc.push({
        label: `${hit} - ?`,
        labelSharp: `${hit} - ?`,
        value: hit,
        outsideScale: true,
      });
    }

    return acc;
  }, []);
};
