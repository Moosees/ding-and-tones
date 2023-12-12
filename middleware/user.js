const User = require('../models/user');
const { defaultErrorMsg } = require('../utils/assets');
const ObjectId = require('mongoose').Types.ObjectId;

const checkNumVsMaxSavesFor = (type) => {
  const projection = {
    num: { $size: `$${type.toLowerCase()}` },
    max: `$maxSaved${type}`,
  };

  return async (req, res, next) => {
    if (req.body.songId) {
      return next();
    }

    try {
      const user = await User.aggregate()
        .match({ _id: new ObjectId(req.userId) })
        .project(projection)
        .exec();

      const { num, max } = user[0];

      if (num >= max) {
        return res.status(200).json({
          msg: `${type} limit reached. 
          You are only allowed to save ${max} ${type.toLowerCase()}`,
        });
      }

      next();
    } catch (error) {
      res.status(400).json({ msg: defaultErrorMsg });
    }
  };
};

exports.checkNumVsMaxScales = checkNumVsMaxSavesFor('Scales');
exports.checkNumVsMaxSongs = checkNumVsMaxSavesFor('Songs');
