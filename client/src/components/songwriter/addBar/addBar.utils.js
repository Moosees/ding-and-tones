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

export const createNewBar = (metre, subdivisions) => {
  const barTemplate = createBarTemplate(metre, subdivisions);
  const barId = uuid();
  const measure = [];
  const beats = {};

  for (const { beatStart } of barTemplate) {
    const beatId = uuid();
    measure.push(beatId);
    beats[beatId] = {
      sound: beatStart ? ['0'] : ['-'],
      mode: 'c',
    };
  }

  const bar = {
    metre,
    subdivisions,
    repeats: 1,
    measure,
  };

  return { barId, bar, beats };
};
