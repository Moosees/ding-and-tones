exports.parseSaveResponse = (songObject, userId) => {
  const { _id, composer, title } = songObject;

  console.log('Id: ', songObject._id);
  console.log('Created: ', songObject.created);
  console.log('Updated:', songObject.updated);

  return {
    isOwner: userId ? userId.equals(composer) : false,
    songId: _id,
    title,
  };
};
