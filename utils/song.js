exports.handleSaveResponse = (error, song, res) => {
  if (error) return res.status(400).json({ error: 'Could not save song' });

  const data = parseSongObject(song, userId);
  return res.status(201).json(data);
};

exports.parseSongObject = (songObject, userId) => {
  const { _id, title, author, arrangement } = songObject;

  return {
    songId: _id,
    title,
    arrangement,
    isOwner: userId ? userId.equals(author) : false,
  };
};
