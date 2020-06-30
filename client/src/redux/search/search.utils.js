export const deleteFoundScale = (scaleId, state) => {
  console.log({ scaleId, state });

  const scalesFiltered = state.filter((scale) => scale.scaleId !== scaleId);
  console.log({ scalesFiltered });

  return scalesFiltered;
};
