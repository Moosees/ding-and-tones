const User = require('../models/user');
const { isValidObjectId } = require('mongoose');

exports.checkAuth = async (req, res, next) => {
  console.log(req.session.user);
  if (!req.session.user || !isValidObjectId(req.session.user)) {
    return res.status(403).json({ msg: 'No authorization' });
  }

  try {
    const user = await User.findById(req.session.user).select('_id').exec();

    console.log('checkAuth', user);
    if (!user) return res.status(403).json({ msg: 'User not found' });

    req.userId = user._id;
    next();
  } catch (error) {
    res.status(500).json({ msg: 'Error, please try again later' });
  }
};

exports.getUserId = (req, res, next) => {
  if (!req.session.user) {
    req.userId = null;
    return next();
  }

  User.findOne({ _id: req.session.user }, '_id', (error, user) => {
    if (error || !user) return res.status(400).json();

    req.userId = user._id;
    next();
  });
};
