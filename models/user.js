const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    trim: true,
    required: true,
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
    required: true,
  },
  scales: [{ type: ObjectId, ref: 'Scale' }],
  songs: [{ type: ObjectId, ref: 'Song' }],
  sub: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
