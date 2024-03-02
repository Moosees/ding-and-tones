const User = require('../models/user');
const { getClient } = require('../utils/auth');
const crypto = require('crypto');
const { defaultErrorMsg } = require('../utils/assets');

const day = 1000 * 60 * 60 * 24;

exports.checkSession = async (req, res) => {
  if (!req.userId) {
    return res.status(200).json({ user: null });
  }

  try {
    const { anonymous, name, songs, sound } = await User.findOne({
      _id: req.userId,
    })
      .select('anonymous name songs sound')
      .exec();

    const isOwner = songs.includes(req.songId);

    res.status(200).json({
      user: {
        anonymous,
        isOwner,
        name,
        sound,
      },
    });
  } catch (error) {
    res.status(200).json({ user: null });
    // res.status(500).json({ user: null });
  }
};

exports.updateUserSound = async (req, res) => {
  const userId = req.userId;
  const { audioOption, volume } = req.body;
  const updated = Date.now();

  try {
    const user = await User.findByIdAndUpdate(userId, {
      sound: { audioOption, volume },
      updated,
    })
      .setOptions({ new: true })
      .select('sound')
      .exec();

    if (!user) {
      return res.status(400).json({ msg: 'Could not update user settings' });
    }

    res.status(200).json({
      audioOption: user.sound.audioOption,
      volume: user.sound.volume,
    });
  } catch (error) {
    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.updateUserInfo = async (req, res) => {
  console.log(req.body, req.userId);
  const userId = req.userId;
  const { anonymous, name } = req.body;
  const updated = Date.now();

  try {
    const user = await User.findByIdAndUpdate(userId, {
      anonymous,
      name,
      updated,
    })
      .setOptions({
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      })
      .select('anonymous name')
      .exec();

    if (!user) {
      return res.status(400).json({ msg: 'Could not update user info' });
    }

    res.status(200).json({ isAnonymous: user.anonymous, name: user.name });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(200).json({ msg: 'Name is already in use' });
    }

    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.signInWithGoogle = async (req, res) => {
  try {
    const { code, songId, persistSession } = req.body;
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
      .select('_id anonymous name songs sound')
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
    const sessionTtl = persistSession ? day * 30 : day;
    req.session.cookie.maxAge = sessionTtl;

    res.status(200).json({
      anonymous: user.anonymous,
      isOwner,
      name: user.name,
      newUser,
      sound: user.sound,
    });
  } catch (error) {
    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.signOut = async (req, res) => {
  if (!req.session.user) {
    return res.status(400).json({ msg: 'Sign out failed' });
  }

  try {
    await req.session.destroy();

    res.clearCookie('connect.sid').status(200).json({ msg: 'Signed out' });
  } catch (error) {
    res.status(400).json({ msg: 'Sign out failed' });
  }
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
