import { v4 as uuid } from 'uuid';
import { metreList } from '../../../assets/metre';

export const createNewBar = (metre, subdivision) => {
  const { template, metreBase, count } = metreList[metre];
  const barId = uuid();
  const measure = [];
  const beats = {};

  template.forEach((value, i) => {
    const beatId = uuid();
    measure.push({ beatId, count: count[i], value });
    beats[beatId] = {
      sound: value === 4 ? ['0'] : ['-'],
      mode: 'c',
      value,
    };
  });

  const bar = {
    metre,
    subdivision: Math.max(subdivision, metreBase),
    repeats: 1,
    measure,
  };

  return { barId, bar, beats };
};
