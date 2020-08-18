exports.parseGetResponse = (songObject, userId) => {
  const { _id, arrangement, bars, beats, composer, info, scale } = songObject;

  return {
    isOwner: userId ? userId.equals(composer._id) : false,
    songId: _id,
    composer: composer.name,
    arrangement,
    bars,
    beats,
    info,
    scale,
  };
};

exports.parseSearchResponse = (songObject, userId) => {
  const {
    _id,
    composer,
    scale,
    info: { title, metre, difficulty },
  } = songObject;

  return {
    isOwner: userId && composer ? userId.equals(composer._id) : false,
    songId: _id,
    scaleLabel: scale.info.label,
    scaleName: `${scale.info.rootName} ${scale.info.name}`,
    composer: composer ? composer.name : 'Anonymous',
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
