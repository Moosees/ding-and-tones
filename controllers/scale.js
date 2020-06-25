const Scale = require('../models/scale');

// exports.getScaleById = (req, res, id) => {
//   const data = Scale.findById(req.params.id).select(
//     '_id name layout scale'
//   );

//   res.json(data);
// };

exports.getScales = (req, res) => {
  Scale.find()
    .select('_id name layout scale')
    .then((scales) => res.json(scales))
    .catch((error) => console.log(error));
};

exports.saveScale = (req, res) => {
  const scale = new Scale(req.body);

  scale.save((error) => {
    if (error) return res.status(400).json({ error });
    return res.json({ message: 'scale saved' });
  });
};
