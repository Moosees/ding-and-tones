exports.parseScaleResponse = (scaleObject, userId) => {
  const { _id, name, label, layout, notes, author } = scaleObject;
  return {
    info: {
      name,
      label,
      layout,
    },
    isOwner: userId ? userId.equals(author) : false,
    notes,
    scaleId: _id,
  };
};
