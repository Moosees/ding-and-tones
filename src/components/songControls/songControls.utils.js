import { v4 as uuid } from 'uuid';
import { metreList } from '../../metre.data';

const createNewBeat = (partsPerBeat) => {
  const newBeat = [];

  for (let i = 0; i < partsPerBeat; ++i) {
    newBeat.push({ beatId: uuid(), sound: i === 0 ? '0' : 'P' });
  }

  return newBeat;
};

export const createNewBar = (metre, subdivision) => {
  const { template, minSubdivision } = metreList[metre];
  const newMeasure = [];

  template.forEach((defaultParts) => {
    const partsPerBeat = defaultParts * (subdivision / minSubdivision);
    newMeasure.push(createNewBeat(partsPerBeat));
  });

  return {
    barId: uuid(),
    metre,
    subdivision,
    repeats: 1,
    lengthInBeats: metreList[metre].lengthInBeats,
    measure: newMeasure,
  };
};
