const Song = require('../models/song');
const User = require('../models/user');
const Scale = require('../models/scale');
const { parseGetResponse, parseSearchResponse } = require('../utils/song');
const { isValidObjectId } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const getScalesForSongSearches = async (songs) => {
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
};

const getComposersForSongSearches = async (songs) => {
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
};

exports.deleteSong = (req, res) => {
  const songId = req.params.songId;
  const userId = req.userId;

  if (!isValidObjectId(songId)) return res.status(400).json();

  Song.findOneAndDelete({ _id: songId, composer: userId })
    .select('_id info.title')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();

      User.findByIdAndUpdate(userId, {
        $pull: { songs: song._id },
      })
        .setOptions({ new: true })
        .exec((error) => {
          if (error) return res.status(400).json();

          res.status(200).json(song);
        });
    });
};

exports.getMySongs = async (req, res) => {
  const userId = req.userId;

  // User.findById(userId)
  //   .populate({
  //     path: 'songs',
  //     select: '_id scale.info info',
  //     options: { limit: 20, sort: { updated: -1 } },
  //   })
  //   .select('_id name')
  //   .exec((error, user) => {
  //     if (error) return res.status(400).json();
  //     if (!user.songs.length) return res.status(204).json();

  //     const data = user.songs.map((song) =>
  //       parseSearchResponse(
  //         {
  //           _id: song._id,
  //           scale: song.scale,
  //           info: song.info,
  //           composer: { _id: user._id, anonymous: false, name: user.name },
  //         },
  //         userId
  //       )
  //     );
  //     res.status(200).json({ songs: data });
  //   });

  const user = await User.findById(userId).select('_id name songs').exec();

  const songs = await Song.find({ _id: { $in: user.songs } })
    .limit(20)
    .sort({ updated: -1 })
    .select('_id info scale')
    .exec();

  const scales = await getScalesForSongSearches(songs);
  console.log(scales);

  res.status(200).json({ songs: [] });
};

exports.getSongById = (req, res) => {
  const songId = req.params.songId;
  const userId = req.userId;

  if (!isValidObjectId(songId)) return res.status(404).json();

  Song.findById(songId)
    .populate('composer', '_id anonymous name')
    .select('_id arrangement bars beats info scale')
    .exec((error, song) => {
      if (error) return res.status(400).json();
      if (!song) return res.status(404).json();

      const data = parseGetResponse(song, userId);
      res.status(200).json(data);
    });
};

exports.getSongs = async (req, res) => {
  const userId = req.userId;

  const songs = await Song.find({ composer: { $ne: ObjectId(userId) } })
    .select('_id composer info scale')
    .limit(20)
    .sort({ updated: -1 })
    .exec();

  //   (error, songs) => {
  //   if (error) return res.status(400).json();
  //   if (!songs.length) return res.status(204).json();

  //   const data = songs.map((song) => parseSearchResponse(song, userId));
  //   res.status(200).json({ songs: data });
  // }

  const scales = await getScalesForSongSearches(songs);

  const composers = await getComposersForSongSearches(songs);

  const resData = songs.map(({ info, _id, composer, scale }, i) => ({
    songId: _id,
    scaleId: scale,
    composer: composers[composer],
    title: info.title,
    difficulty: info.difficulty,
    metre: info.metre,
    ...scales[scale ? scale : 'noScale'],
  }));
  console.log(resData[0]);

  res.status(200).json({ songs: resData });
};

exports.saveSong = (req, res) => {
  const userId = req.userId;
  const { songId, songUpdate, scaleName, scaleLabel } = req.body;

  if (songUpdate.arrangement.length < 1 || songUpdate.arrangement.length > 100)
    return res.status(400).json();

  songUpdate.composer = userId;
  songUpdate.updated = Date.now();
  let newSong = false;

  if (songId && !isValidObjectId(songId)) return res.status(400).json();
  if (!songId) newSong = true;

  songUpdate.queryString = `${songUpdate.info.title.toLowerCase()} ${scaleName.toLowerCase()}`;

  Song.findByIdAndUpdate(songId || ObjectId(), songUpdate)
    .setOptions({
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
      runValidators: true,
    })
    .populate('composer', '_id anonymous name')
    .select('_id scale.info info')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();
      const data = parseSearchResponse(song, userId, scaleName, scaleLabel);
      if (!newSong) return res.status(200).json(data);

      User.findByIdAndUpdate(userId, {
        $push: { songs: song._id },
      })
        .setOptions({ new: true })
        .exec((error) => {
          if (error) return res.status(400).json();
          res.status(200).json(data);
        });
    });
};

exports.songSearch = (req, res) => {
  const userId = req.userId;
  const searchTerm = req.params.searchTerm.toLowerCase();

  Song.find({ queryString: { $regex: searchTerm } })
    .populate('composer', '_id anonymous name')
    .select('_id scale.info info')
    .limit(20)
    .sort({ 'info.title': 1 })
    .exec((error, songs) => {
      if (error) return res.status(400).json();
      if (!songs.length) return res.status(204).json();

      const data = songs.map((song) => parseSearchResponse(song, userId));
      res.status(200).json({ songs: data });
    });
};
