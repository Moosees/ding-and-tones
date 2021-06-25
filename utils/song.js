const parseScaleForSongFetch = ({
  _id,
  info,
  notes: { dings = [], round = [], extra = [] },
}) => {
  const extraParsed = extra.map(({ note, pos }) => ({
    note,
    pos,
  }));

  return {
    info,
    notes: { dings, round, extra: extraParsed },
    ui: { scaleId: _id },
  };
};

exports.parseGetResponse = (songObject, userId) => {
  const { _id, arrangement, bars, beats, composer, info, scale } = songObject;
  return {
    isOwner: userId && composer ? userId.equals(composer._id) : false,
    songId: _id,
    composer: composer && !composer.anonymous ? composer.name : 'Anonymous',
    arrangement,
    bars,
    beats,
    info,
    scale: scale && parseScaleForSongFetch(scale),
  };
};

exports.parseSearchResponse = (songObject, userId, scaleName, scaleLabel) => {
  const {
    _id,
    composer,
    scale,
    info: { title, metre, difficulty },
  } = songObject;

  const isOwner = userId && composer ? userId.equals(composer._id) : false;

  return {
    isOwner,
    scaleId: scale,
    songId: _id,
    scaleLabel: scale ? scaleLabel : '',
    scaleName: scale ? scaleName : 'N/A',
    composer:
      isOwner || (composer && !composer.anonymous)
        ? composer.name
        : 'Anonymous',
    title,
    metre,
    difficulty,
  };
};

// exports.parseSaveResponse = (songObject, userId) => {
//   const { _id, composer, info } = songObject;

//   return {
//     isOwner: userId ? userId.equals(composer._id) : false,
//     songId: _id,
//     title: info.title,
//   };
// };
