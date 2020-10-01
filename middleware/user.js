const User = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

exports.checkSongsLimit = (req, res, next) => {
  if (req.body.songId) return next();

  User.aggregate()
    .match({ _id: ObjectId(req.userId) })
    .project({
      numSavedSongs: { $size: '$songs' },
      maxSavedSongs: '$maxSavedSongs',
    })
    .exec((error, user) => {
      const { numSavedSongs, maxSavedSongs } = user[0];

      if (error) return res.status(400).json();

      if (numSavedSongs >= maxSavedSongs)
        return res.status(403).json({
          message:
            'Max number of saved songs reached, please delete a song before trying to save again',
        });

      next();
    });
};
