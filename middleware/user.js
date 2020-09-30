const User = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

exports.checkSongsLimit = async (req, res, next) => {
  if (!req.body.songId)
    await User.aggregate()
      .match({ _id: ObjectId(req.userId) })
      .project({
        numSavedSongs: { $size: '$songs' },
        // maxSavedSongs: '$maxSavedSongs',
      })
      .exec((error, user) => {
        console.log(user);
        if (error) return res.status(400).json();
        // if (user.numSavedSongs >= user.maxSavedSongs)
        if (user.numSavedSongs >= 20)
          return res.status(403).json({
            message:
              'Max number of saved songs reached, please delete a song before trying to save again',
          });
      });

  next();
};
