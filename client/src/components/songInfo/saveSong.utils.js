const parseArrangement = (arrangement, bars, beats) => {
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

export const parseSongForSaving = (song, scale, saveAs) => {
  const { arrangement, bars, beats, info } = song;
  const { difficulty, isOwner, metre, title, songId, subdivision } = info;
  const { notes, info: scaleInfo } = scale;

  const parsedArrangement = parseArrangement(arrangement, bars, beats);

  return {
    songId: isOwner && !saveAs ? songId : null,
    songUpdate: {
      scale: {
        notes,
        label: scaleInfo.label,
        layout: scaleInfo.layout,
        name: scaleInfo.name,
      },
      arrangement: parsedArrangement,
      difficulty,
      metre,
      title,
      subdivision,
    },
  };
};
