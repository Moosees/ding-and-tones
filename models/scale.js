const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const scaleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  layout: {
    type: String,
    required: true,
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
