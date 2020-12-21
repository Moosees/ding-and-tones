const User = require('../models/user');
const { getClient } = require('../utils/auth');
const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
  const authHeader = req.get('authorization');
  const idToken = authHeader ? authHeader.split(' ')[1] : 'undefined';

  if (idToken === 'undefined')
    return res.status(403).json({ msg: 'No authorization' });

  jwt.verify(idToken, process.env.JWT_SECRET, (error, sub) => {
    if (error) res.status(403).json({ msg: 'No authorization' });

    User.findOne({ sub }, '_id', (error, user) => {
      if (error || !user)
        return res.status(403).json({ msg: 'User not found' });

      req.userId = user._id;
      next();
    });
  });
};

exports.getUserId = (req, res, next) => {
  const authHeader = req.get('authorization');
  const idToken = authHeader ? authHeader.split(' ')[1] : 'undefined';

  if (idToken === 'undefined') return next();

  jwt.verify(idToken, process.env.JWT_SECRET, (error, sub) => {
    if (error) res.status(403).json({ msg: 'No authorization' });

    User.findOne({ sub }, '_id', (error, user) => {
      if (error || !user) return res.status(400).json();

      req.userId = user._id;
      next();
    });
  });
};
