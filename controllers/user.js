const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const { getClient, getAuthUrl } = require('../utils/auth');
const crypto = require('crypto');

exports.checkSession = async (req, res) => {
  if (!req.userId) return res.status(200).json({ user: null });

  try {
    const { anonymous, name, songs } = await User.findOne({
      _id: req.userId,
    })
      .select('anonymous name songs')
      .exec();

    const isOwner = songs.includes(req.songId);

    res.status(200).json({
      user: {
        anonymous,
        isOwner,
        name,
      },
    });
  } catch (error) {
    res.status(500).json();
  }
};

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
    const { code, songId } = req.body;
    const client = getClient();

    const {
      tokens: { id_token },
    } = await client.getToken(decodeURIComponent(code));

    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub } = ticket.getPayload();

    let user = await User.findOne({ sub })
      .select('_id anonymous name songs')
      .exec();

    const newUser = !user;
    if (newUser) {
      const randomId = crypto.randomBytes(3).toString('hex');
      user = await new User({
        sub,
        name: `user_${randomId}`,
      }).save();
    }

    let isOwner = false;
    if (!newUser) {
      isOwner = user.songs.includes(songId);
    }

    req.session.user = user._id;

    return res.status(200).json({
      anonymous: user.anonymous,
      isOwner,
      name: user.name,
      newUser,
    });
  } catch (error) {
    res.status(400).json();
  }
};

exports.signOut = (req, res) => {
  req.session.user &&
    req.session.destroy((error) => {
      if (error) {
        res.status(200).json({ msg: 'Sign out failed' });
      }
      res.clearCookie('connect.sid').status(200).json();
    });
};

exports.getGoogleURL = (req, res) => {
  const authUrl = getClient().generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: 'profile',
    state: 'google',
  });

  res.json(authUrl);
};
