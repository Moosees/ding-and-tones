export const deleteFoundScale = (scaleId, state) => {
  return state.filter((scale) => scale.scaleId !== scaleId);
};
