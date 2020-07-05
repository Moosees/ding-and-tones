const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
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
  difficulty: {
    type: Number,
    required: true,
  },
  arrangement: [
    {
      metre: String,
      subdivision: Number,
      repeats: String,
      measure: [
        {
          sound: String,
          value: Number,
        },
      ],
    },
  ],
  author: {
    type: ObjectId,
    ref: 'User',
  },
  scale: {
    name: String,
    layout: Number,
    label: String,
    scale: { round: [String] },
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});

module.exports = mongoose.model('Song', songSchema);
