const Song = require('../models/song');
const User = require('../models/user');
const { parseGetResponse, parseSearchResponse } = require('../utils/song');
const { isValidObjectId } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

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

exports.getMySongs = (req, res) => {
  const userId = req.userId;

  User.findById(userId)
    .populate({
      path: 'songs',
      select: '_id scale.info info',
      options: { limit: 20, sort: { updated: -1 } },
    })
    .select('_id name')
    .exec((error, user) => {
      if (error) return res.status(400).json();
      if (!user.songs.length) return res.status(204).json();

      const data = user.songs.map((song) =>
        parseSearchResponse(
          {
            _id: song._id,
            scale: song.scale,
            info: song.info,
            composer: { _id: user._id, name: user.name },
          },
          userId
        )
      );
      res.status(200).json({ songs: data });
    });
};

exports.getSongById = (req, res) => {
  const songId = req.params.songId;
  const userId = req.userId;

  if (!isValidObjectId(songId)) return res.status(204).json();

  Song.findById(songId)
    .populate('composer', '_id name')
    .select('_id arrangement bars beats info scale')
    .exec((error, song) => {
      if (error) return res.status(400).json();
      if (!song) return res.status(204).json();

      const data = parseGetResponse(song, userId);
      res.status(200).json(data);
    });
};

exports.getSongs = (req, res) => {
  const userId = req.userId;

  Song.find()
    .populate('composer', '_id name')
    .select('_id scale.info info')
    .limit(20)
    .sort({ updated: -1 })
    .exec((error, songs) => {
      if (error) return res.status(400).json();
      if (!songs.length) return res.status(204).json();

      const data = songs.map((song) => parseSearchResponse(song, userId));
      res.status(200).json({ songs: data });
    });
};

exports.saveSong = (req, res) => {
  const userId = req.userId;
  const { songId, songUpdate } = req.body;
  songUpdate.composer = userId;
  songUpdate.updated = Date.now();
  let newSong = false;

  if (songId && !isValidObjectId(songId)) return res.status(400).json();
  if (!songId) newSong = true;

  songUpdate.queryString = `${songUpdate.info.title.toLowerCase()} ${songUpdate.scale.info.rootName.toLowerCase()} ${songUpdate.scale.info.name.toLowerCase()}`;

  Song.findByIdAndUpdate(songId || ObjectId(), songUpdate)
    .setOptions({ new: true, upsert: true, setDefaultsOnInsert: true })
    .populate('composer', '_id name')
    .select('_id scale.info info')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();
      const data = parseSearchResponse(song, userId);
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

  Song.find({ queryString: { $regex: req.params.searchTerm.toLowerCase() } })
    .populate('composer', '_id name')
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
