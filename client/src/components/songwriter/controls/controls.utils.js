import { v4 as uuid } from 'uuid';
import { metreList } from '../../../assets/metre';

export const createNewBar = (metre, subdivision) => {
  const { template, minSubdivision } = metreList[metre];
  const barId = uuid();
  const measure = [];
  const beats = {};

  template.forEach((value) => {
    const beatId = uuid();
    measure.push(beatId);
    beats[beatId] = {
      sound: value === 4 ? '0' : '-',
      value,
    };
  });

  const bar = {
    metre,
    subdivision: Math.max(subdivision, minSubdivision),
    repeats: 1,
    measure,
  };

  return { barId, bar, beats };
};
