const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.signIn = async (req, res) => {
  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403).json({ error: 'Not authorized' });

  try {
    const idToken = authHeader.split(' ')[1];
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { sub } = ticket.getPayload();

    await User.findOne({ sub })
      .select('-_id name')
      .exec((error, user) => {
        if (user) return res.status(200).json(user);

        new User({ name: 'Anonymous', sub }).save((error, user) =>
          res.status(200).json({ name: user.name, newUser: true })
        );
      });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
