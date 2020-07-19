export const moveBar = (arrangement, barIndex, targetIndex) => {
  const arrCopy = [...arrangement];

  arrCopy.splice(targetIndex, 0, arrCopy.splice(barIndex, 1)[0]);

  return arrCopy;
};

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
  const { arrangement, bars, beats, info, ui } = song;
  const { isOwner, songId } = ui;
  const { notes, info: scaleInfo } = scale;
  const parsedBars = parseBars(arrangement, bars);
  const parsedBeats = parseBeats(arrangement, bars, beats);

  return {
    songId: isOwner && !saveAs ? songId : null,
    songUpdate: {
      arrangement,
      bars: parsedBars,
      beats: parsedBeats,
      info,
      scale: {
        notes,
        label: scaleInfo.label,
        layout: scaleInfo.layout,
        name: scaleInfo.name,
      },
    },
  };
};
