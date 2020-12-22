const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const { getClient, getAuthUrl, generateJWT } = require('../utils/auth');

exports.updateUserInfo = (req, res) => {
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

exports.signInWithGoogle = async (req, res) => {
  try {
    const { code } = req.body;
    const client = getClient();

    const {
      tokens: { id_token },
    } = await client.getToken(decodeURIComponent(code));

    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, sub } = ticket.getPayload();

    let user = await User.findOne({ sub }).select('_id anonymous name').exec();

    const newUser = !user;
    if (!user) {
      user = await new User({
        email,
        sub,
        name: email.split('@')[0],
      }).save();
    }

    const idToken = generateJWT(user._id.toString());

    return res.status(200).json({
      anonymous: user.anonymous,
      idToken,
      name: user.name,
      newUser,
    });
  } catch (error) {
    res.status(400).json();
  }
};

exports.getGoogleURL = (req, res) => {
  const authUrl = getClient().generateAuthUrl({
    access_type: 'offline',
    prompt: 'select_account',
    scope: 'email profile',
    state: 'google',
  });

  res.json(authUrl);
};
