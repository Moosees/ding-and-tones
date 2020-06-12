import { v4 as uuid } from 'uuid';
import { metreList } from '../../metre.data';

export const createNewBar = (metre, subdivision) => {
  const { template, minSubdivision } = metreList[metre];
  const newMeasure = template.map((value) => ({
    beatId: uuid(),
    sound: value === 4 ? '0' : 'P',
    value,
  }));

  return {
    barId: uuid(),
    data: {
      metre,
      subdivision: Math.max(subdivision, minSubdivision),
      repeats: 1,
      lengthInBeats: metreList[metre].lengthInBeats,
    },
    measure: newMeasure,
  };
};
