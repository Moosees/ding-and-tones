const Song = require('../models/song');
const User = require('../models/user');
const Scale = require('../models/scale');
const { parseGetResponse, parseSearchResponse } = require('../utils/song');
const { isValidObjectId } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

// Song searches
const getScalesForSongSearches = async (songs) => {
  try {
    const scaleIds = Object.values(
      songs.reduce((acc, song) => {
        if (song.scale && !acc[song.scale.toString()]) {
          acc[song.scale.toString()] = song.scale;
        }
        return acc;
      }, {})
    );

    const scales = await Scale.find({ _id: { $in: scaleIds } })
      .select('_id info')
      .exec();

    return scales.reduce(
      (acc, scale) => {
        acc[scale._id] = {
          scaleLabel: scale.info.label,
          scaleName: `${scale.info.rootName} ${scale.info.name}`,
        };
        return acc;
      },
      { noScale: { scaleLabel: '', scaleName: 'N/A' } }
    );
  } catch (error) {
    throw error;
  }
};

const getComposersForSongSearches = async (songs) => {
  try {
    const userIds = Object.values(
      songs.reduce((acc, song) => {
        if (song.composer && !acc[song.composer.toString()]) {
          acc[song.composer.toString()] = song.composer;
        }
        return acc;
      }, {})
    );

    const composers = await User.find({ _id: { $in: userIds } })
      .select('_id anonymous name')
      .exec();

    return composers.reduce((acc, user) => {
      acc[user._id] = user.anonymous ? 'Anonymous' : user.name;
      return acc;
    }, {});
  } catch (error) {
    throw error;
  }
};

exports.songSearch = async (req, res) => {
  try {
    const userId = req.userId;
    const searchTerm = req.params.searchTerm.toLowerCase();

    const songs = await Song.find({
      $and: [{ private: false }, { queryString: { $regex: searchTerm } }],
    })
      .limit(20)
      .sort({ 'info.title': 1 })
      .select('_id info composer scale')
      .exec();

    if (!songs.length) return res.status(204).json();

    const scales = await getScalesForSongSearches(songs);

    const composers = await getComposersForSongSearches(songs);

    const resData = songs.map(({ info, _id, composer, scale }) => {
      const isOwner = composer.equals(userId);
      const hasScale = !!scales[scale];

      return {
        songId: _id,
        scaleId: hasScale && scale,
        composer: isOwner ? 'You' : composers[composer],
        isOwner,
        title: info.title,
        difficulty: info.difficulty,
        metre: info.metre,
        ...scales[hasScale ? scale : 'noScale'],
      };
    });

    res.status(200).json({ songs: resData });
  } catch (error) {
    res.status(500).json();
  }
};

exports.getMySongs = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId).select('_id name songs').exec();

    if (!user.songs.length) return res.status(204).json();

    const songs = await Song.find({ _id: { $in: user.songs } })
      .limit(20)
      .sort({ updated: -1 })
      .select('_id info scale')
      .exec();

    const scales = await getScalesForSongSearches(songs);

    const resData = songs.map(({ info, _id, scale }) => {
      const hasScale = !!scales[scale];
      return {
        songId: _id,
        scaleId: hasScale && scale,
        composer: 'You',
        isOwner: true,
        title: info.title,
        difficulty: info.difficulty,
        metre: info.metre,
        ...scales[hasScale ? scale : 'noScale'],
      };
    });

    res.status(200).json({ songs: resData });
  } catch (error) {
    res.status(500).json();
  }
};

exports.getNewSongs = async (req, res) => {
  try {
    const userId = req.userId;

    const songs = await Song.find({
      $and: [{ private: false }, { composer: { $ne: ObjectId(userId) } }],
    })
      .select('_id composer info scale')
      .limit(20)
      .sort({ updated: -1 })
      .exec();

    if (!songs.length) return res.status(204).json();

    const scales = await getScalesForSongSearches(songs);

    const composers = await getComposersForSongSearches(songs);

    const resData = songs.map(({ info, _id, composer, scale }, i) => {
      const hasScale = !!scales[scale];

      return {
        songId: _id,
        scaleId: hasScale && scale,
        composer: composers[composer],
        isOwner: false,
        title: info.title,
        difficulty: info.difficulty,
        metre: info.metre,
        ...scales[hasScale ? scale : 'noScale'],
      };
    });

    res.status(200).json({ songs: resData });
  } catch (error) {
    res.status(500).json();
  }
};

// Song save, load and delete
exports.saveSong = async (req, res) => {
  try {
    const userId = req.userId;
    const { songId, songUpdate } = req.body;
    songUpdate.composer = userId;
    songUpdate.updated = Date.now();
    let newSong = false;

    if (songUpdate.arrangement.length > 100)
      return res.status(400).json({ msg: 'Song is too long' });
    if (songUpdate.arrangement.length < 1)
      return res.status(400).json({ msg: 'Song needs at least one bar' });
    if (songId && !isValidObjectId(songId)) return res.status(404).json();

    if (!songId) newSong = true;

    const scale =
      songUpdate.scale &&
      isValidObjectId(songUpdate.scale) &&
      (await Scale.findById(songUpdate.scale).select('_id info').exec());

    songUpdate.queryString = scale
      ? `${songUpdate.info.title.toLowerCase()} ${scale.info.rootName.toLowerCase()} ${scale.info.name.toLowerCase()}`
      : songUpdate.info.title.toLowerCase();

    const song = await Song.findByIdAndUpdate(songId || ObjectId(), songUpdate)
      .setOptions({
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      })
      .select('_id info')
      .exec();

    if (!song) return res.status(404).json();

    newSong &&
      (await User.findByIdAndUpdate(userId, {
        $push: { songs: song._id },
      })
        .setOptions({ new: true })
        .exec());

    const resData = {
      songId: song._id,
      scaleId: scale ? scale._id : null,
      composer: 'You',
      isOwner: true,
      title: song.info.title,
      difficulty: song.info.difficulty,
      metre: song.info.metre,
      scaleName: scale ? `${scale.info.rootName} ${scale.info.name}` : 'N/A',
      scaleLabel: scale ? scale.info.label : '',
    };

    res.status(200).json({ song: resData });
  } catch (error) {
    res.status(500).json();
  }
};

exports.getSongById = (req, res) => {
  const songId = req.params.songId;
  const userId = req.userId;

  if (!isValidObjectId(songId)) return res.status(404).json();

  Song.findById(songId)
    .populate('composer', '_id anonymous name')
    .populate('scale', '_id info notes')
    .select('_id arrangement bars beats info private')
    .exec((error, song) => {
      if (error) return res.status(500).json();
      if (!song) return res.status(404).json();

      const data = parseGetResponse(song, userId);

      if (data.private && !userId) return res.status(401).json();
      if (data.private && !data.isOwner) return res.status(403).json();

      res.status(200).json(data);
    });
};

exports.deleteSong = (req, res) => {
  const songId = req.params.songId;
  const userId = req.userId;

  if (!isValidObjectId(songId)) return res.status(404).json();

  Song.findOneAndDelete({ _id: songId, composer: userId })
    .select('_id info.title')
    .exec((error, song) => {
      if (error) return res.status(500).json();
      if (!song) return res.status(404).json();

      User.findByIdAndUpdate(userId, {
        $pull: { songs: song._id },
      })
        .setOptions({ new: true })
        .exec((error) => {
          if (error) return res.status(500).json();

          res.status(200).json(song);
        });
    });
};
