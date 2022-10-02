const User = require('../models/user');

exports.checkAuth = (req, res, next) => {
  if (!req.session.user)
    return res.status(403).json({ msg: 'No authorization' });

  User.findOne({ _id: req.session.user }, '_id', (error, user) => {
    if (error || !user) return res.status(403).json({ msg: 'User not found' });

    req.userId = user._id;
    next();
  });
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
