const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const scaleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  layout: {
    type: String,
  },
  scale: {
    simple: [String],
  },
  author: {
    type: ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Scale', scaleSchema);
