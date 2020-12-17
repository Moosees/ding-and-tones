const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const { getClient, getAuthUrl } = require('../utils/auth');

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
      if (error && error.code === 11000)
        return res.status(200).json({ msg: 'Name is already in use' });
      if (!user || error) return res.status(400).json();

      res.status(200).json({ isAnonymous: user.anonymous, name: user.name });
    });
};

exports.signIn = (req, res) => {
  const { code } = req.body;

  getClient()
    .getToken(decodeURIComponent(code))
    .then((token) => {
      console.log(token);
      res.status(200).json();
      // const { email, sub } = token.getPayload();

      // User.findOne({ sub })
      //   .select('-_id anonymous name')
      //   .exec((error, user) => {
      //     if (error) return res.status(400).json();
      //     if (user) return res.status(200).json(user);

      //     new User({
      //       email,
      //       sub,
      //       name: email.split('@')[0],
      //     }).save((error, user) =>
      //       res.status(200).json({
      //         anonymous: user.anonymous,
      //         name: user.name,
      //         newUser: true,
      //       })
      //     );
      //   });
    })
    // .catch((error) => res.status(400).json());
    .catch((error) => {
      console.log(error);
      res.status(400).json();
    });
};

exports.getGoogleURL = (req, res) => {
  const authUrl = getClient().generateAuthUrl({
    access_type: 'offline',
    prompt: 'select_account',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    state: 'google',
  });

  res.json(authUrl);
};
