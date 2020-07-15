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
  songUpdate.composer = userId;
  songUpdate.updated = Date.now();

  Song.findByIdAndUpdate(songId || ObjectId(), songUpdate)
    .setOptions({ new: true, upsert: true, setDefaultsOnInsert: true })
    .select('_id composer title')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();

      const data = parseSaveResponse(song, userId);
      res.status(200).json(data);
    });
};
