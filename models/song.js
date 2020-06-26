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
  bars: [
    {
      metre: String,
      subdivision: Number,
      beats: [
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
  defaultScale: {
    type: ObjectId,
    ref: 'Scale',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model('Song', songSchema);
