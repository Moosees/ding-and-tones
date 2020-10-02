const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.checkAuth = async (req, res, next) => {
  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403).json({ msg: 'No authorization' });

  const idToken = authHeader.split(' ')[1];
  if (idToken === 'undefined')
    return res.status(403).json({ msg: 'No authorization' });

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { sub } = ticket.getPayload();

  User.findOne({ sub }, '_id', (error, user) => {
    if (error || !user) return res.status(403).json({ msg: 'User not found' });

    req.userId = user._id;
    next();
  });
};

exports.getUserId = async (req, res, next) => {
  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403).json({ msg: 'No authorization' });

  const idToken = authHeader.split(' ')[1];
  if (idToken !== 'undefined') {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub } = ticket.getPayload();

    await User.findOne({ sub }, '_id', (error, user) => {
      if (error) return res.status(400).json();
      if (user) req.userId = user._id;
    });
  }

  next();
};
