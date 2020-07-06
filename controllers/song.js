const Song = require('../models/song');
const { parseSaveResponse } = require('../utils/song');

// exports.getSongs = (req, res) => {
//   Song.find()
//     .select('_id title difficulty metre author')
//     .then((songs) => res.json(songs))
//     .catch((error) => res.status(400).json({ error }));
// };

exports.saveSong = (req, res) => {
  const userId = req.userId;
  const { songId, songUpdate } = req.body;

  if (!songId)
    new Song({
      ...songUpdate,
      composer: userId,
      updated: Date().now,
    }).save((error, song) => {
      if (error) {
        console.log(error);
        return res.status(400);
      }

      const data = parseSaveResponse(song, userId);
      return res.status(200).json(data);
    });
  else
    Song.findByIdAndUpdate(songId, {
      ...songUpdate,
      updated: new Date(),
    }).exec((error, song) => {
      if (error) return res.status(400);

      const data = parseSaveResponse(song, userId);
      return res.status(200).json(data);
    });
};
