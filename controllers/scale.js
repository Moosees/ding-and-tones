const Scale = require('../models/scale');
const { parseScaleObject } = require('../utils/scale');

exports.deleteScale = (req, res) => {
  const scaleId = req.params.scaleId;
  const userId = req.userId;

  Scale.findOneAndDelete({ _id: scaleId, author: userId }).exec(
    (error, scale) => {
      if (error) return res.status(400).json({ error });

      res.status(200).json();
    }
  );
};

exports.getScaleById = (req, res) => {
  Scale.findById(req.params.scaleId)
    .select('_id name label layout scale author')
    .exec((error, scale) => {
      if (error) return res.status(400).json({ error });

      const data = parseScaleObject(scale, req.userId);
      res.status(200).json(data);
    });
};

exports.getScales = (req, res) => {
  Scale.find()
    .select('_id name label layout scale author')
    .limit(20)
    .sort({ created: -1 })
    .exec((error, scales) => {
      if (error) return res.status(400).json({ error });

      const data = scales.map((scale) => parseScaleObject(scale, req.userId));
      res.status(200).json({ scales: data });
    });
};

exports.saveScale = (req, res) => {
  const userId = req.userId;
  req.body.author = userId;
  req.body.isNew = true;

  new Scale(req.body).save((error, scale) => {
    if (error) return res.status(400).json({ error });

    const data = parseScaleObject(scale, userId);
    res.status(200).json(data);
  });
};
