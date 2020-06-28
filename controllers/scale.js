const Scale = require('../models/scale');

exports.getScaleById = (req, res) => {
  const data = Scale.findById(req.params.id)
    .select('_id name layout scale')
    .then((scale) => res.status(200).json(scale))
    .catch((error) => res.status(400).json({ error }));
};

exports.getScales = (req, res) => {
  Scale.find()
    .select('_id name layout scale')
    .limit(20)
    .sort({ createdAt: -1 })
    .then((scales) => res.status(200).json(scales))
    .catch((error) => res.status(400).json({ error }));
};

exports.saveScale = (req, res) => {
  const scale = new Scale(req.body);

  scale.save((error) => {
    if (error) return res.status(400).json({ error });
    return res.status(201).json({ message: 'scale saved' });
  });
};
