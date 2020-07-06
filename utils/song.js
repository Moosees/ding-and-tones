exports.parseSaveResponse = (songObject, userId) => {
  const { _id, composer, title } = songObject;

  return {
    isOwner: userId ? userId.equals(composer) : false,
    songId: _id,
    title,
  };
};
