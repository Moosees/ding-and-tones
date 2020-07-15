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
      measure: measureWithBeats,
      metre,
      repeats,
      subdivision,
    };
  });
};

export const parseSongForSaving = (bars, song, scale, saveAs) => {
  const { difficulty, isOwner, metre, title, songId, subdivision } = song;

  const arrangement = parseArrangement(bars);

  return {
    songId: isOwner && !saveAs ? songId : null,
    songUpdate: {
      arrangement,
      scale,
      difficulty,
      metre,
      title,
      subdivision,
    },
  };
};
