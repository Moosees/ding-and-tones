const Song = require('../models/song');
const { parseSearchResponse, parseSaveResponse } = require('../utils/song');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getSongs = (req, res) => {
  Song.find()
    .populate('composer', '_id name')
    .select('_id scale info')
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
    .select('_id composer info')
    .exec((error, song) => {
      if (error || !song) return res.status(400).json();

      const data = parseSaveResponse(song, userId);
      res.status(200).json(data);
    });
};
