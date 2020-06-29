const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const scaleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  layout: {
    type: Number,
    default: 1,
  },
  scale: {
    label: String,
    simple: [String],
  },
  author: {
    type: ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Scale', scaleSchema);
