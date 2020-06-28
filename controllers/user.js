const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.signIn = async (req, res) => {
  const { idToken } = req.body;
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  const { name, sub } = ticket.getPayload();

  User.findOne({ googleId: sub }, 'name', async (error, user) => {
    if (error || !user) {
      const newUser = new User({ googleId: sub, name });

      await newUser.save((error) => {
        if (error) return res.status(400).json({ error: 'Sign in failed' });
      });
      return res.status(201).json({ user: newUser });
    }
    return res.status(200).json({ user });
  });

  // send back account, if new send back newAccount=true
};
