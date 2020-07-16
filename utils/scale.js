exports.parseScaleResponse = (scaleObject, userId) => {
  const { _id, name, label, layout, notes, author } = scaleObject;
  return {
    info: {
      scaleId: _id,
      name,
      label,
      layout,
      isOwner: userId ? userId.equals(author) : false,
    },
    notes,
  };
};
