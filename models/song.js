const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const songSchema = new mongoose.Schema({
  arrangement: [String],
  bars: [
    {
      _id: String,
      measure: [String],
      metre: String,
      repeats: { type: Number, default: 1 },
      subdivision: Number,
    },
  ],
  beats: [
    {
      _id: String,
      sound: String,
      value: Number,
      mode: String,
      hand: Number,
    },
  ],
  composer: {
    type: ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  info: {
    bpm: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    metre: {
      type: String,
      required: true,
    },
    subdivision: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 4,
      maxlength: 30,
    },
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: 0,
  },
  scale: { type: ObjectId, ref: 'Scale' },
  updated: {
    type: Date,
    default: Date.now,
  },
  queryString: String,
});

module.exports = mongoose.model('Song', songSchema);
