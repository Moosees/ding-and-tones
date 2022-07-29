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
      minlength: 3,
      maxlength: 20,
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
    rootIndex: Number,
    rotation: {
      type: Number,
      default: 180,
    },
    sharpNotes: {
      type: Boolean,
      default: false,
    },
  },
  notes: {
    dings: [String],
    round: [String],
    extra: [{ note: String, pos: Number }],
  },
  queryString: String,
  soundSet: { type: Number, default: 0 },
});

scaleSchema
  .virtual('nameLabel')
  .get(() => `${this.info.rootName} ${this.info.name}`);

module.exports = mongoose.model('Scale', scaleSchema);
