const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  anonymous: {
    type: Boolean,
    required: true,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  maxSavedScales: {
    type: Number,
    default: 10,
  },
  maxSavedSongs: {
    type: Number,
    default: 20,
  },
  name: {
    type: String,
    trim: true,
    unique: true,
    minlength: 4,
    maxlength: 20,
  },
  scales: [{ type: ObjectId, ref: 'Scale' }],
  songs: [{ type: ObjectId, ref: 'Song' }],
  sound: {
    audioOption: {
      type: Number,
      default: 1,
    },
    volume: { type: Number, default: 0.8 },
  },
  sub: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
