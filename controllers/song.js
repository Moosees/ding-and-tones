const Song = require('../models/song');
const { parseGetResponse, parseSearchResponse } = require('../utils/song');
const ObjectId = require('mongoose').Types.ObjectId;

exports.deleteSong = (req, res) => {
  const songId = req.params.songId;
  const userId = req.userId;

  Song.findOneAndDelete({ _id: songId, composer: userId })
    .select('_id info.title')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();

      res.status(200).json(song);
    });
};

exports.getSongById = (req, res) => {
  Song.findById(req.params.songId)
    .populate('composer', '_id name')
    .select('_id arrangement bars beats composer info scale')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();

      const data = parseGetResponse(song, req.userId);
      res.status(200).json(data);
    });
};

exports.getSongs = (req, res) => {
  Song.find()
    .populate('composer', '_id name')
    .select('_id scale.info info')
    .limit(20)
    .sort({ updated: -1 })
    .exec((error, songs) => {
      if (error) return res.status(400).json();

      const data = songs.map((song) => parseSearchResponse(song, req.userId));
      res.status(200).json({ songs: data });
    });
};

exports.saveSong = (req, res) => {
  const userId = req.userId;
  const { songId, songUpdate } = req.body;
  songUpdate.composer = userId;
  songUpdate.updated = Date.now();

  Song.findByIdAndUpdate(songId || ObjectId(), songUpdate)
    .setOptions({ new: true, upsert: true, setDefaultsOnInsert: true })
    .populate('composer', '_id name')
    .select('_id scale.info info')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();

      const data = parseSearchResponse(song, userId);
      res.status(200).json(data);
    });
};
