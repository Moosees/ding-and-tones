const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const songSchema = new mongoose.Schema({
  arrangement: [
    {
      measure: [
        {
          sound: String,
          value: Number,
        },
      ],
      metre: String,
      repeats: String,
      subdivision: Number,
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
  difficulty: {
    type: Number,
    required: true,
  },
  metre: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  scale: {
    name: String,
    layout: Number,
    label: String,
    notes: { round: [String] },
  },
  subdivision: {
    type: Number,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Song', songSchema);
