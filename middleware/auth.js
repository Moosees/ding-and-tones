const User = require('../models/user');
const { isValidObjectId } = require('mongoose');
const { defaultErrorMsg } = require('../utils/assets');

exports.checkAuth = async (req, res, next) => {
  if (!req.session.user || !isValidObjectId(req.session.user)) {
    return res.status(403).json({ msg: 'No authorization' });
  }

  try {
    const user = await User.findById(req.session.user).select('_id').exec();

    if (!user) return res.status(403).json({ msg: 'User not found' });

    req.userId = user._id;
    next();
  } catch (error) {
    res.status(500).json({ msg: defaultErrorMsg });
  }
};

exports.getUserId = async (req, res, next) => {
  req.userId = null;

  if (!req.session.user || !isValidObjectId(req.session.user)) {
    return next();
  }

  try {
    const user = await User.findById(req.session.user).select('_id').exec();

    if (user) {
      req.userId = user._id;
    }

    next();
  } catch (error) {
    res.status(500).json({ msg: defaultErrorMsg });
  }
};
