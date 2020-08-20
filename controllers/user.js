const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

exports.saveUser = (req, res) => {
  const userId = req.userId;
  const { name } = req.body;
  const updated = Date.now();

  User.findByIdAndUpdate(userId, { name, updated })
    .setOptions({ new: true, upsert: true, setDefaultsOnInsert: true })
    .select('name')
    .exec((error, user) => {
      if (error || !user) return res.status(400).json();

      res.status(200).json({ name: user.name });
    });
};

exports.signIn = async (req, res) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403).json({ error: 'Not authorized' });

  try {
    const idToken = authHeader.split(' ')[1];
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, sub } = ticket.getPayload();

    await User.findOne({ sub })
      .select('-_id name')
      .exec((error, user) => {
        if (user) return res.status(200).json(user);

        new User({ email, name: 'Anonymous', sub }).save((error, user) =>
          res.status(200).json({ name: user.name, newUser: true })
        );
      });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
