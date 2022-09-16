import { v4 as uuid } from 'uuid';
import {
  subdivisionOptions,
  createBarTemplate,
  metreList,
} from '../../../assets/metre';

export const songToBarSubdivision = (songMetre, songSubdivision) => {
  const { beatLengths } = metreList[songMetre];
  const metreGroup = songMetre.slice(0, 1);

  const { subdivisionByLength } = subdivisionOptions[metreGroup].find(
    ({ value }) => value === songSubdivision
  );

  return beatLengths.map((length) => subdivisionByLength[length]);
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
