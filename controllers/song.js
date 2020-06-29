const Song = require('../models/song');

exports.getSongs = (req, res) => {
  Song.find()
    .select('_id title difficulty metre author')
    .then((songs) => res.json(songs))
    .catch((error) => res.status(400).json({ error }));
};

exports.saveSong = (req, res) => {
  const song = new Song(req.body);

  song.save((error) => {
    if (error) return res.status(400).json({ error });
    return res.status(200).json({ message: 'song saved', _id: song._id });
  });
};
