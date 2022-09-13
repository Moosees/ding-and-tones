import { v4 as uuid } from 'uuid';
import { createBarTemplate, metreList } from '../../../assets/metre';

export const songToBarSubdivision = (metre, subdivision) => {
  const beatGroups = metreList[metre].beatLengths.length;
  return Array(beatGroups).fill(subdivision);
};

export const createNewBar = (metre, subdivision) => {
  const barTemplate = createBarTemplate(metre, subdivision);
  const barId = uuid();
  const measure = [];
  const beats = {};

  for (const { beatStart, value } of barTemplate) {
    const beatId = uuid();
    measure.push(beatId);
    beats[beatId] = {
      sound: beatStart ? ['0'] : ['-'],
      mode: 'c',
      value,
    };
  }

  const bar = {
    metre,
    subdivision,
    repeats: 1,
    measure,
  };

  return { barId, bar, beats };
};
