const User = require('../models/user');
const { getClient } = require('../utils/auth');
const crypto = require('crypto');
const { defaultErrorMsg } = require('../utils/assets');

const day = 1000 * 60 * 60 * 24;

exports.checkSession = async (req, res) => {
  console.log(req.body);
  if (!req.userId) {
    return res.status(200).json({
      song: { isOwner: false },
      scale: { isOwner: false },
      user: null,
    });
  }

  try {
    const { anonymous, name, songs, scales, sound } = await User.findOne({
      _id: req.userId,
    })
      .select('anonymous name songs scales sound')
      .exec();

    const isSongOwner = songs.includes(req.body.songId);
    const isScaleOwner = scales.includes(req.body.scaleId);

    res.status(200).json({
      alert: `Welcome back, ${name}`,
      sound,
      song: { isOwner: isSongOwner },
      scale: { isOwner: isScaleOwner },
      user: {
        anonymous,
        isSongOwner,
        name,
      },
    });
  } catch (error) {
    res.status(200).json({
      song: { isOwner: false },
      scale: { isOwner: false },
      user: null,
    });
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
      return res.status(400).json({ error: 'Could not update user settings' });
    }

    res.status(200).json({
      alert: 'Sound setup saved',
      // sound: {
      //   audioOption: user.sound.audioOption,
      //   volume: user.sound.volume,
      // },
    });
  } catch (error) {
    res.status(400).json({ error: defaultErrorMsg });
  }
};

exports.updateUserInfo = async (req, res) => {
  // console.log(req.body, req.userId);
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
      return res.status(400).json({ error: 'Could not update user info' });
    }

    console.log('Save user info success', { user });
    res.status(200).json({
      alert: 'Account info updated',
      // user: {
      //   anonymous: user.anonymous,
      //   name: user.name,
      // },
    });
  } catch (error) {
    console.log('Save user info error', { error });
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Name is already in use' });
    }

    res.status(400).json({ error: defaultErrorMsg });
  }
};

exports.signInWithGoogle = async (req, res) => {
  try {
    const { code, songId, scaleId, persistSession } = req.body;
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
      .select('_id anonymous name songs scales sound')
      .exec();

    const newUser = !user;
    if (newUser) {
      const randomId = crypto.randomBytes(3).toString('hex');
      user = await new User({
        sub,
        name: `user_${randomId}`,
      }).save();
    }

    let isSongOwner = false;
    let isScaleOwner = false;
    if (!newUser) {
      isSongOwner = user.songs.includes(songId);
      isScaleOwner = user.scales.includes(scaleId);
    }

    req.session.user = user._id;
    const sessionTtl = persistSession ? day * 30 : day;
    req.session.cookie.maxAge = sessionTtl;

    res.status(newUser ? 201 : 200).json({
      alert: 'Signed in successfully!',
      sound: user.sound,
      song: {
        isOwner: isSongOwner,
      },
      scale: {
        isOwner: isScaleOwner,
      },
      user: {
        anonymous: user.anonymous,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(400).json({ error: defaultErrorMsg });
  }
};

exports.signOut = async (req, res) => {
  if (!req.session.user) {
    return res.status(400).json({ error: 'Sign out failed' });
  }

  try {
    await req.session.destroy();

    res
      .clearCookie('connect.sid')
      .status(200)
      .json({ alert: 'Signed out successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Sign out failed' });
  }
};

exports.getGoogleURL = (_req, res) => {
  const authUrl = getClient().generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: 'profile',
    state: 'google',
  });

  res.json(authUrl);
};
