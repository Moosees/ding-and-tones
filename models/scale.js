const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const scaleSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  layout: Number,
  label: String,
  scale: {
    round: [String],
  },
  author: {
    type: ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Scale', scaleSchema);
