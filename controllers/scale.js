const Scale = require('../models/scale');

exports.deleteScale = (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  Scale.deleteOne({ _id: scaleId, author: userId })
    .then(() => res.status(200).json({ message: 'Scale deleted' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getScaleById = (req, res) => {
  const data = Scale.findById(req.params.id)
    .select('_id name label layout scale')
    .then((scale) => res.status(200).json(scale))
    .catch((error) => res.status(400).json({ error }));
};

exports.getScales = (req, res) => {
  Scale.find()
    .select('_id name label layout scale author')
    .limit(20)
    .sort({ created: -1 })
    .then((scales) => {
      const responseData = scales.map((scaleData) => {
        const { _id, name, label, layout, scale, author } = scaleData;
        return {
          scaleId: _id,
          name,
          label,
          layout,
          scale,
          isOwner: req.userId ? req.userId.equals(author) : false,
        };
      });
      res.status(200).json(responseData);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.saveScale = (req, res) => {
  const userId = req.userId;
  const scale = new Scale({ ...req.body, author: userId });

  scale.save((error) => {
    if (error) return res.status(400).json({ error: 'Could not save scale' });
    return res.status(201).json({ message: 'Scale saved' });
  });
};
