const Song = require('../models/song');
const { parseSaveResponse } = require('../utils/song');
const ObjectId = require('mongoose').Types.ObjectId;

// exports.getSongs = (req, res) => {
//   Song.find()
//     .select('_id title difficulty metre author')
//     .then((songs) => res.json(songs))
//     .catch((error) => res.status(400).json({ error }));
// };

exports.saveSong = (req, res) => {
  const userId = req.userId;
  const { songId, songUpdate } = req.body;

  console.log(songUpdate);

  Song.findByIdAndUpdate(
    songId || ObjectId(),
    {
      ...songUpdate,
      composer: userId,
      updated: new Date(),
    },
    { new: true, upsert: true }
  ).exec((error, song) => {
    if (error) return res.status(400).json(error);

    const data = parseSaveResponse(song, userId);
    res.status(200).json(data);
  });
};
