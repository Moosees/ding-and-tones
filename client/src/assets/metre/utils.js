import { subdivisionOptions, beatSubdivisionTemplates } from './subdivisions';
import { metreList } from './metre';

export const getMetreOptions = () => {
  const metreGroupIndexes = {
    s: 0,
    c: 1,
    x: 2,
  };

  return Object.keys(metreList).reduce(
    (acc, key) => {
      const { name } = metreList[key];
      const index = metreGroupIndexes[key.slice(0, 1)];

      acc[index].options.push({ value: key, label: name });

      return acc;
    },
    [
      {
        group: 'Simple metre',
        options: [],
      },
      {
        group: 'Compound metre',
        options: [],
      },
      {
        group: 'Complex metre',
        options: [],
      },
    ],
  );
};

const getSubdivisionOptionsForBar = (metre) => {
  const { beatLengths } = metreList[metre];
  const group = metre.slice(0, 1);

  const customOption = {
    label: '',
    value: 'custom',
    hidden: true,
  };

  const barOptions = subdivisionOptions[group].map((option) => {
    const value = beatLengths
      .map((length) => option.subdivisionByLength[length])
      .join('-');
    return { label: option.label, value };
  });

  return [customOption, ...barOptions];
};

const getSubdivisionOptionsForBeat = (metre, beatIndex) => {
  const baseKey = `base${metreList[metre].metreBase}`;
  const lengthKey = `length${metreList[metre].beatLengths[beatIndex]}`;
  const currentTemplates = beatSubdivisionTemplates[baseKey][lengthKey];

  return Object.keys(currentTemplates)
    .reduce(
      (acc, key) => [
        ...acc,
        { value: parseInt(key), label: currentTemplates[key].label },
      ],
      [],
    )
    .sort((a, b) => a.value - b.value);
};

export const getSubdivisionOptionsForSong = (metre) => {
  const group = metre.slice(0, 1);

  return subdivisionOptions[group].map(({ label, value }) => ({
    label,
    value,
  }));
};

export const getSubdivisionOptions = (type, metre, beatIndex) => {
  const typeCbs = {
    bar: () => getSubdivisionOptionsForBar(metre),
    beat: () => getSubdivisionOptionsForBeat(metre, beatIndex),
    song: () => getSubdivisionOptionsForSong(metre),
  };

  return typeCbs[type]();
};

export const getMetreTemplates = (metre) => {
  const { metreBase, beatLengths } = metreList[metre];

  const baseKey = `base${metreBase}`;

  return beatLengths.map((length) => {
    const lengthKey = `length${length}`;
    return beatSubdivisionTemplates[baseKey][lengthKey];
  });
};

const parseBeatTemplates = (beatTemplate, beatIndex, lastGroup) => {
  const { count, values, beatLength, groupEnd, triplets } = beatTemplate;

  let currentGroup = lastGroup;

  const parsedBeats = count.map((rawCount, subIndex) => {
    const parsedCount = rawCount === 'X' ? `${beatIndex + 1}` : rawCount;

    const data = {
      count: parsedCount,
      value: values[subIndex],
      beatLength: beatLength[subIndex],
      tripletStatus: triplets[subIndex],
      group: currentGroup,
      beatStart: subIndex === 0,
    };

    groupEnd.includes(subIndex) && ++currentGroup;

    return data;
  });

  return { currentGroup, parsedBeats };
};

export const createBarTemplate = (metre, subdivisions) => {
  const metreTemplates = getMetreTemplates(metre);
  let lastGroup = 0;

  const template = subdivisions.reduce((acc, beatSubdivision, i) => {
    const beatTemplates = metreTemplates[i][beatSubdivision];
    const { currentGroup, parsedBeats } = parseBeatTemplates(
      beatTemplates,
      i,
      lastGroup,
    );

    lastGroup = currentGroup;

    return [...acc, ...parsedBeats];
  }, []);

  return template;
};

export const getSubdivisionsLength = (subdivisions, metre) => {
  const metreTemplates = getMetreTemplates(metre);
  let length = 0;

  for (const [i, beat] of subdivisions.entries()) {
    length += metreTemplates[i][beat].values.length;
  }

  return length;
};

export const compareSubdivisionsLength = (a, b, metre) => {
  return getSubdivisionsLength(b, metre) - getSubdivisionsLength(a, metre);
};
