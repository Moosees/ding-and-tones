const Scale = require('../models/scale');
const { parseScaleResponse } = require('../utils/scale');

exports.deleteScale = (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  Scale.findOneAndDelete({ _id: scaleId, author: userId })
    .select('_id info.name')
    .exec((error, scale) => {
      if (error || !scale) return res.status(400).json();

      res.status(200).json(scale);
    });
};

exports.getScaleById = (req, res) => {
  Scale.findById(req.params.scaleId)
    .select('_id info notes author')
    .exec((error, scale) => {
      if (error || !scale) return res.status(400).json();

      const data = parseScaleResponse(scale, req.userId);
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

      const data = scales.map((scale) => parseScaleResponse(scale, req.userId));
      res.status(200).json({ scales: data });
    });
};

exports.saveScale = (req, res) => {
  const userId = req.userId;
  req.body.author = userId;
  req.body.isNew = true;

  new Scale(req.body).save((error, scale) => {
    if (error || !scale) return res.status(400).json();

    const data = parseScaleResponse(scale, userId);
    res.status(200).json(data);
  });
};
