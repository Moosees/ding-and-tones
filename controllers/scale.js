const Scale = require('../models/scale');
const User = require('../models/user');
const { defaultErrorMsg } = require('../utils/assets');
const { parseScaleResponse } = require('../utils/scale');
const { isValidObjectId } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const scaleSelect =
  '_id info notes.round notes.extra.pos notes.extra.note notes.dings author';

exports.deleteScale = async (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  if (!isValidObjectId(scaleId)) {
    return res.status(400).json({ msg: 'Scale not found' });
  }

  try {
    const scale = await Scale.findOneAndDelete({ _id: scaleId, author: userId })
      .select('_id info.name info.rootName')
      .exec();

    if (!scale) {
      return res.status(400).json({ msg: 'Scale not found' });
    }

    await User.findByIdAndUpdate(userId, {
      $pull: { scales: scale._id },
    })
      .setOptions({ new: true })
      .exec();

    res.status(200).json(scale);
  } catch (error) {
    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.getScaleById = async (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  if (!isValidObjectId(scaleId)) {
    return res.status(404).json({ msg: 'Scale not found' });
  }

  try {
    const scale = await Scale.findById(scaleId).select(scaleSelect).exec();

    if (!scale) {
      return res.status(404).json({ msg: 'Scale not found' });
    }

    res.status(200).json(parseScaleResponse(scale, userId));
  } catch (error) {
    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.getScales = async (req, res) => {
  const userId = req.userId;

  try {
    const scales = await Scale.find({ author: { $ne: new ObjectId(userId) } })
      .select(scaleSelect)
      .limit(20)
      .sort({ created: -1 })
      .exec();

    if (!scales.length) {
      return res.status(204).json({ msg: 'No scales found' });
    }

    const data = scales.map((scale) => parseScaleResponse(scale, userId));
    res.status(200).json({ scales: data });
  } catch (error) {
    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.getMyScales = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId)
      .populate({
        path: 'scales',
        select: scaleSelect,
        options: { limit: 100, sort: { created: -1 } },
      })
      .select('_id')
      .exec();

    if (!user.scales.length) {
      return res.status(204).json({ msg: 'No saved scales found' });
    }

    const data = user.scales.map((scale) => parseScaleResponse(scale, userId));
    res.status(200).json({ scales: data });
  } catch (error) {
    res.status(400).json({ msg: defaultErrorMsg });
  }
};

exports.saveScale = (req, res) => {
  const userId = req.userId;
  req.body.author = userId;
  req.body.isNew = true;
  req.body._id = ObjectId();

  req.body.queryString = `${req.body.info.rootName.toLowerCase()} ${req.body.info.name.toLowerCase()}`;

  if (req.body.info.rotation < 1 || req.body.info.rotation > 360) {
    req.body.info.rotation = 360;
  }

  new Scale(req.body).save((error, scale) => {
    if (error || !scale) return res.status(400).json();

    User.findByIdAndUpdate(userId, {
      $push: { scales: scale._id },
    })
      .setOptions({ new: true })
      .exec((error) => {
        if (error) return res.status(400).json();

        const data = parseScaleResponse(scale, userId);
        res.status(200).json(data);
      });
  });
};

exports.scaleSearch = (req, res) => {
  const userId = req.userId;
  const searchTerm = req.params.searchTerm.toLowerCase();

  Scale.find({ queryString: { $regex: searchTerm } })
    .select(scaleSelect)
    .limit(20)
    .sort({ 'info.name': 1, 'info.rootName': 1 })
    .exec((error, scales) => {
      if (error) return res.status(400).json();
      if (!scales.length) return res.status(204).json();

      const data = scales.map((scale) => parseScaleResponse(scale, userId));
      res.status(200).json({ scales: data });
    });
};
