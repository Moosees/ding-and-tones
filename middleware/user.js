const User = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

const checkNumVsMaxSavesFor = (type) => {
  const projection = {
    num: { $size: `$${type.toLowerCase()}` },
    max: `$maxSaved${type}`,
  };

  return (req, res, next) => {
    if (req.body.songId) return next();

    User.aggregate()
      .match({ _id: ObjectId(req.userId) })
      .project(projection)
      .exec((error, user) => {
        const { num, max } = user[0];

        if (error) return res.status(400).json();

        if (num >= max)
          return res.status(403).json({
            msg: `${type} limit reached. 
          You are only allowed to save ${max} ${type.toLowerCase()}`,
          });

        next();
      });
  };
};

exports.checkNumVsMaxScales = checkNumVsMaxSavesFor('Scales');
exports.checkNumVsMaxSongs = checkNumVsMaxSavesFor('Songs');
