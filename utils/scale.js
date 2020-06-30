exports.parseScaleObject = (scaleObject, userId) => {
  const { _id, name, label, layout, scale, author } = scaleObject;
  return {
    scaleId: _id,
    name,
    label,
    layout,
    scale,
    isOwner: userId ? userId.equals(author) : false,
  };
};
