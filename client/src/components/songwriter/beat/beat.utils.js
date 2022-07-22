export const getNonScaleNotes = (sound, scale) => {
  if (sound.length === 0) return [];

  if (sound.length === 1 && ['-', 't', 'T'].includes(sound[0])) return [];

  const scaleParsed = ['t', 'T', '-', ...scale.map((note) => `${note.option}`)];

  return sound.reduce((acc, hit) => {
    if (!scaleParsed.includes(hit)) {
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
