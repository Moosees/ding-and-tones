exports.parseScaleResponse = (scaleObject, userId) => {
  const {
    _id,
    info,
    notes: { dings, round, extra },
    author,
  } = scaleObject;
  return {
    info,
    isOwner: userId ? userId.equals(author) : false,
    notes: { dings: dings || [], round: round || [], extra: extra || [] },
    scaleId: _id,
  };
};
