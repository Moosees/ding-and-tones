const Scale = require('../models/scale');
const User = require('../models/user');
const { parseScaleResponse } = require('../utils/scale');
const { isValidObjectId } = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

exports.deleteScale = (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  if (!isValidObjectId(scaleId)) return res.status(400).json();

  Scale.findOneAndDelete({ _id: scaleId, author: userId })
    .select('_id info.name info.rootName')
    .exec((error, scale) => {
      if (error || !scale) return res.status(400).json();

      res.status(200).json(scale);
    });
};

exports.getScaleById = (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  if (!isValidObjectId(scaleId)) return res.status(204).json();

  Scale.findById(scaleId)
    .select('_id info notes author')
    .exec((error, scale) => {
      if (error) return res.status(400).json();
      if (!scale) return res.status(204).json();

      const data = parseScaleResponse(scale, userId);
      res.status(200).json(data);
    });
};

exports.getScales = (req, res) => {
  Scale.find()
    .select('_id info notes author')
    .limit(20)
    .sort({ created: -1 })
    .exec((error, scales) => {
      if (error) return res.status(400).json();
      if (!scales.length) return res.status(204).json();

      const data = scales.map((scale) => parseScaleResponse(scale, req.userId));
      res.status(200).json({ scales: data });
    });
};

exports.getMyScales = (req, res) => {
  const userId = req.userId;

  User.findById(userId)
    .populate('scales', '_id info notes author')
    .limit(20)
    // .sort({ created: -1 })
    .exec((error, user) => {
      if (error) return res.status(400).json();
      if (!user.scales.length) return res.status(204).json();

      const data = user.scales.map((scale) =>
        parseScaleResponse(scale, req.userId)
      );
      res.status(200).json({ scales: data });
    });
};

exports.saveScale = (req, res) => {
  const userId = req.userId;
  req.body.author = userId;
  req.body.isNew = true;
  req.body._id = ObjectId();

  req.body.queryString = `${req.body.info.rootName.toLowerCase()} ${req.body.info.name.toLowerCase()}`;

  new Scale(req.body).save((error, scale) => {
    if (error || !scale) return res.status(400).json();

    User.findByIdAndUpdate(userId, {
      $push: { scales: req.body._id },
    })
      .setOptions({ new: true })
      .exec((error) => {
        if (error) return res.status(400).json();
      });

    const data = parseScaleResponse(scale, userId);
    res.status(200).json(data);
  });
};

exports.scaleSearch = (req, res) => {
  Scale.find({ queryString: { $regex: req.params.searchTerm.toLowerCase() } })
    .select('_id info notes author')
    .limit(20)
    .sort({ 'info.name': 1, 'info.rootName': 1 })
    .exec((error, scales) => {
      if (error) return res.status(400).json();
      if (!scales.length) return res.status(204).json();

      const data = scales.map((scale) => parseScaleResponse(scale, req.userId));
      res.status(200).json({ scales: data });
    });
};
