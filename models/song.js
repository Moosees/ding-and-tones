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
  private: {
    type: Boolean,
    default: false,
  },
  scale: {
    info: {
      label: { type: String, required: true },
      layout: { type: Number, required: true },
      name: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
        maxlength: 20,
      },
      rootName: {
        type: String,
        trim: true,
        required: true,
      },
      rootValue: {
        type: Number,
        required: true,
      },
    },
    notes: {
      dings: [String],
      round: [String],
      extra: [{ note: String, pos: Number }],
    },
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  queryString: String,
});

module.exports = mongoose.model('Song', songSchema);
