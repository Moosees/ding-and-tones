exports.parseScaleResponse = (scaleObject, userId) => {
  const { _id, info, notes, author } = scaleObject;
  const { dings, round, extra } = notes;

  return {
    info,
    isOwner: userId && author ? userId.equals(author) : false,
    notes: { dings: dings || [], round: round || [], extra: extra || [] },
    scaleId: _id,
  };
};
