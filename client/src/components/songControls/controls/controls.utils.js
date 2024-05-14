const parseBarsForSaving = (arrangement, bars) => {
  return arrangement.map((bar) => ({
    ...bars[bar],
    _id: bar,
  }));
};

const parseBeatsForSaving = (arrangement, bars, beats) => {
  const allBeatIds = arrangement.reduce((acc, barId) => {
    return [...acc, ...bars[barId].measure];
  }, []);

  return allBeatIds.map((beatId) => {
    const { sound, mode, hand } = beats[beatId];

    return {
      sound: sound.join('+'),
      hand,
      mode,
      _id: beatId,
    };
  });
};

export const parseSongForSaving = (song, saveAs, title, scaleId) => {
  const {
    arrangement,
    bars,
    beats,
    info,
    ui: { isOwner, isPrivate, songId },
  } = song;
  const parsedBars = parseBarsForSaving(arrangement, bars, beats);
  const parsedBeats = parseBeatsForSaving(arrangement, bars, beats);
  const songUpdate = {
    arrangement: [...arrangement],
    bars: parsedBars,
    beats: parsedBeats,
    scale: scaleId,
    info: { ...info },
    isPrivate,
  };
  if (title) songUpdate.info.title = title;

  return {
    songId: isOwner && !saveAs ? songId : null,
    songUpdate,
  };
};
