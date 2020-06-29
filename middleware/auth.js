const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.checkAuth = async (req, res, next) => {
  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403).json({ error: 'Not signed in' });

  const idToken = authHeader.split(' ')[1];

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { sub } = ticket.getPayload();

  User.findOne({ userId: sub }, '_id', async (error, user) => {
    if (error || !user)
      return res.status(403).json({ error: 'User not found' });

    req.userId = user._id;
    next();
  });
};
