const parseScaleForSongFetch = (
  { _id, author, info, notes: { dings = [], round = [], extra = [] } },
  userId
) => {
  const extraParsed = extra.map(({ note, pos }) => ({
    note,
    pos,
  }));

  return {
    info,
    notes: { dings, round, extra: extraParsed },
    scaleId: _id,
    isOwner: userId.equals(author),
  };
};

exports.parseGetResponse = (songObject, userId) => {
  const { _id, arrangement, bars, beats, composer, info, isPrivate, scale } =
    songObject;
  return {
    isOwner: userId && composer ? userId.equals(composer._id) : false,
    songId: _id,
    composer: composer && !composer.anonymous ? composer.name : 'Anonymous',
    arrangement,
    bars,
    beats,
    info,
    isPrivate,
    scale: scale && parseScaleForSongFetch(scale, userId),
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
