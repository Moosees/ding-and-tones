const parseBars = (arrangement, bars) => {
  return arrangement.map((bar) => ({
    ...bars[bar],
    _id: bar,
  }));
};

const parseBeats = (arrangement, bars, beats) => {
  return arrangement.reduce((acc, bar) => {
    const { measure, subdivision } = bars[bar];

    measure.forEach((beat) => {
      const { value } = beats[beat];
      if (value <= subdivision) acc.push({ ...beats[beat], _id: beat });
    });

    return acc;
  }, []);
};

export const parseSongForSaving = (song, scale, saveAs) => {
  const { arrangement, bars, beats, info } = song;
  const { isOwner, songId, ...otherInfo } = info;
  const { notes, info: scaleInfo } = scale;
  const parsedBars = parseBars(arrangement, bars);
  const parsedBeats = parseBeats(arrangement, bars, beats);

  console.log({ parsedBars });

  return {
    songId: isOwner && !saveAs ? songId : null,
    songUpdate: {
      arrangement,
      bars: parsedBars,
      beats: parsedBeats,
      info: otherInfo,
      scale: {
        notes,
        label: scaleInfo.label,
        layout: scaleInfo.layout,
        name: scaleInfo.name,
      },
    },
  };
};
