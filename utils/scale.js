exports.parseScaleResponse = (scaleObject, userId) => {
  const { _id, info, notes, author } = scaleObject;
  return {
    info,
    isOwner: userId ? userId.equals(author) : false,
    notes,
    scaleId: _id,
  };
};
