const mongoose = require('mongoose');

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
  name: {
    type: String,
    trim: true,
    required: true,
  },
  sub: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
