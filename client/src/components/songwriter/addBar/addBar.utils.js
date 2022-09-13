import { v4 as uuid } from 'uuid';
import { createBarTemplate, metreList } from '../../../assets/metre';

export const createNewBar = (metre, songSubdivision) => {
  const beatGroups = metreList[metre].beatLengths.length;
  const subdivision = Array(beatGroups).fill(songSubdivision);
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
