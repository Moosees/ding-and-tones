const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');

exports.saveUser = (req, res) => {
  const userId = req.userId;
  const { anonymous, name } = req.body;
  const updated = Date.now();

  User.findByIdAndUpdate(userId, { anonymous, name, updated })
    .setOptions({
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
      runValidators: true,
    })
    .select('anonymous name')
    .exec((error, user) => {
      if (error || !user) return res.status(400).json();

      res.status(200).json({ isAnonymous: user.anonymous, name: user.name });
    });
};

exports.signIn = (req, res) => {
  const authHeader = req.get('authorization');
  if (!authHeader) return res.status(403).json({ msg: 'No authorization' });

  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  const idToken = authHeader.split(' ')[1];

  client
    .verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then((ticket) => {
      const { email, sub } = ticket.getPayload();

      User.findOne({ sub })
        .select('-_id anonymous name')
        .exec((error, user) => {
          if (error) return res.status(400).json();
          if (user) return res.status(200).json(user);

          new User({ email, sub }).save((error, user) =>
            res.status(200).json({ anonymous: user.anonymous, newUser: true })
          );
        });
    })
    .catch((error) => res.status(400).json());
};
