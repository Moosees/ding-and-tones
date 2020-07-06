const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.signIn = async (req, res) => {
  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403);

  const idToken = authHeader.split(' ')[1];

  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { name, sub } = ticket.getPayload();

  User.findOne({ sub }, 'name').exec((error, user) => {
    if (error || !user)
      new User({ sub, name }).save((error, newUser) => {
        if (error) return res.status(400);

        return res.status(200).json({ newUser });
      });

    return res.status(200).json({ user });
  });
};
