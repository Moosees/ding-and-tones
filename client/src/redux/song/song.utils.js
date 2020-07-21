export const moveBar = (arrangement, barIndex, targetIndex) => {
  const arrCopy = [...arrangement];

  arrCopy.splice(targetIndex, 0, arrCopy.splice(barIndex, 1)[0]);

  return arrCopy;
};

const parseBarsForSaving = (arrangement, bars, beats) => {
  return arrangement.map((bar) => {
    const { measure, subdivision } = bars[bar];
    const filteredMeasure = measure.filter(
      (beat) => beats[beat].value <= subdivision
    );
    return {
      ...bars[bar],
      measure: filteredMeasure,
      _id: bar,
    };
  });
};

const parseBeatsForSaving = (arrangement, bars, beats) => {
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
  const parsedBars = parseBarsForSaving(arrangement, bars, beats);
  const parsedBeats = parseBeatsForSaving(arrangement, bars, beats);

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

const parseArrayToObject = (array) => {
  return array.reduce((acc, { _id, ...rest }) => {
    acc[_id] = rest;
    return acc;
  }, {});
};

export const parseFetchedSong = (song) => {
  const {
    arrangement,
    bars,
    beats,
    composer,
    info,
    isOwner,
    scale,
    songId,
  } = song;

  const parsedBars = parseArrayToObject(bars);
  const parsedBeats = parseArrayToObject(beats);

  return {
    arrangement,
    bars: parsedBars,
    beats: parsedBeats,
    info,
    scale,
    ui: { composer, isOwner, songId },
  };
};
