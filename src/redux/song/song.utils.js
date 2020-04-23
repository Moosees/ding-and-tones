import { v4 as uuid } from 'uuid';

export const copyToEndOfArrangement = (barId, arrangement) => {
  const barCopy = { barId, arrangementId: uuid() };

  return [...arrangement, barCopy];
};

export const copyToNextInArrangement = (barId, previousId, arrangement) => {
  const barCopy = { barId, arrangementId: uuid() };
  const previousIndex = arrangement.findIndex(
    (bar) => bar.arrangementId === previousId
  );

  return [
    ...arrangement.slice(0, previousIndex + 1),
    barCopy,
    ...arrangement.slice(previousIndex + 1),
  ];
};

export const deleteFromArrangement = (arrangementId, arrangement) => {
  return arrangement.filter((bar) => bar.arrangementId !== arrangementId);
};

export const updateBarInArrangement = (
  arrangementId,
  newBarId,
  arrangement
) => {
  return arrangement.map((bar) =>
    bar.arrangementId === arrangementId ? { ...bar, barId: newBarId } : bar
  );
};
