const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.checkAuth = (req, res, next) => {
  const authHeader = req.get('authorization');
  const idToken = authHeader ? authHeader.split(' ')[1] : 'undefined';

  if (idToken === 'undefined')
    return res.status(403).json({ msg: 'No authorization' });

  client
    .verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((ticket) => {
      const { sub } = ticket.getPayload();

      User.findOne({ sub }, '_id', (error, user) => {
        if (error || !user)
          return res.status(403).json({ msg: 'User not found' });

        req.userId = user._id;
        next();
      });
    })
    .catch((error) => res.status(403).json({ msg: 'No authorization' }));
};

exports.getUserId = (req, res, next) => {
  const authHeader = req.get('authorization');
  const idToken = authHeader ? authHeader.split(' ')[1] : 'undefined';

  if (idToken === 'undefined') return next();

  client
    .verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((ticket) => {
      const { sub } = ticket.getPayload();

      User.findOne({ sub }, '_id', (error, user) => {
        if (error || !user) return res.status(400).json();

        req.userId = user._id;
        next();
      });
    })
    .catch((error) => res.status(403).json({ msg: 'No authorization' }));
};
