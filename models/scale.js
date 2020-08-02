const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const scaleSchema = new mongoose.Schema({
  author: {
    type: ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  info: {
    label: { type: String, required: true },
    layout: { type: Number, required: true },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    rootName: {
      type: String,
      trim: true,
      required: true,
    },
    rootValue: {
      type: Number,
      required: true,
    },
  },
  notes: {
    round: [String],
  },
});

module.exports = mongoose.model('Scale', scaleSchema);
