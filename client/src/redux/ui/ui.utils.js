export const updateMutedBars = (mutedBars, barId) => {
  return { ...mutedBars, [barId]: !mutedBars[barId] };
};
