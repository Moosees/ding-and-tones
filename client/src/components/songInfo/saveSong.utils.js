const parseArrangement = (barState) => {
  const { arrangement, bars, beats } = barState;

  return arrangement.map((bar) => {
    const { measure, metre, repeats, subdivision } = bars[bar];
    const measureWithBeats = measure
      .map((beat) => {
        const { value } = beats[beat];
        return value <= subdivision ? beats[beat] : null;
      })
      .filter((beat) => beat);

    return {
      metre,
      repeats,
      subdivision,
      measure: measureWithBeats,
    };
  });
};

export const parseSongForSaving = (bars, song, scale, saveAs) => {
  const { difficulty, metre, title, subdivision } = song;
  const { name, layout, label, scaleSimple } = scale;

  const arrangement = parseArrangement(bars);

  return {
    saveAs,
    songId: undefined,
    songUpdate: {
      title,
      metre,
      subdivision,
      difficulty,
      arrangement,
      scale: { name, layout, label, scale: { round: scaleSimple } },
    },
  };
};
