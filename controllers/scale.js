const Scale = require('../models/scale');
const { parseScaleObject } = require('../utils/scale');

exports.deleteScale = (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  Scale.deleteOne({ _id: scaleId, author: userId })
    .then(() => res.status(200).json({ message: 'Scale deleted' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getScaleById = (req, res) => {
  Scale.findById(req.params.scaleId)
    .select('_id name label layout scale author')
    .then((scale) => {
      const data = parseScaleObject(scale, req.userId);
      res.status(200).json(data);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.getScales = (req, res) => {
  Scale.find()
    .select('_id name label layout scale author')
    .limit(20)
    .sort({ created: -1 })
    .then((scales) => {
      const data = scales.map((scale) => parseScaleObject(scale, req.userId));

      res.status(200).json(data);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.saveScale = (req, res) => {
  const userId = req.userId;
  const newScale = new Scale({ ...req.body, author: userId });

  newScale.save((error, scale) => {
    if (error) return res.status(400).json({ error: 'Could not save scale' });

    const data = parseScaleObject(scale, userId);
    return res.status(201).json(data);
  });
};
