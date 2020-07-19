exports.parseSearchResponse = (songObject, userId) => {
  const { _id, composer, scale, title, metre, difficulty } = songObject;

  return {
    isOwner: userId ? userId.equals(composer._id) : false,
    songId: _id,
    scale: scale.label,
    composer: composer.name,
    title,
    metre,
    difficulty,
  };
};

exports.parseSaveResponse = (songObject, userId) => {
  const { _id, composer, info } = songObject;

  return {
    isOwner: userId ? userId.equals(composer._id) : false,
    songId: _id,
    title: info.title,
  };
};
