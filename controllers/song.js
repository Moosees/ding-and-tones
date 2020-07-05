const Song = require('../models/song');
const { parseSongObject, handleSaveResponse } = require('../utils/song');

// exports.getSongs = (req, res) => {
//   Song.find()
//     .select('_id title difficulty metre author')
//     .then((songs) => res.json(songs))
//     .catch((error) => res.status(400).json({ error }));
// };

exports.saveSong = (req, res) => {
  const userId = req.userId;
  const { songId, songUpdate, saveAs } = req.body;

  if (saveAs) {
    const newSong = new Song({
      ...songUpdate,
      author: userId,
      updated: Date().now,
    });

    newSong.save((error, song) => {
      if (error) {
        console.log(error);
        return res.status(400);
      }

      const data = parseSongObject(song, userId);
      return res.status(201).json(data);
    });
  } else
    Song.findByIdAndUpdate(songId, {
      ...songUpdate,
      updated: new Date(),
    }).exec((error, song) => handleSaveResponse(error, song, res));
};
