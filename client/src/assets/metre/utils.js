import { barSubdivisionOptions, subdivisions } from './subdivisions';
import { metreList } from './metre';

const getSubdivisionOptionsForBar = (metre) => {
  const baseKey = `base${metreList[metre].metreBase}`;
  const beatLengths = metreList[metre].beatLengths;

  const customOption = {
    label: '',
    value: 'custom',
    hidden: true,
  };

  const barOptions = barSubdivisionOptions[baseKey].map((option, i) => {
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
  const currentSubdivisions = subdivisions[baseKey][lengthKey];

  return Object.keys(currentSubdivisions)
    .reduce(
      (acc, key) => [
        ...acc,
        { value: parseInt(key), label: currentSubdivisions[key].label },
      ],
      []
    )
    .sort((a, b) => a.value - b.value);
};

export const getSubDivisionOptions = (isBar, metre, beatIndex) => {
  return isBar
    ? getSubdivisionOptionsForBar(metre)
    : getSubdivisionOptionsForBeat(metre, beatIndex);
};

export const getMetreTemplates = (metre) => {
  const { metreBase, beatLengths } = metreList[metre];

  const baseKey = `base${metreBase}`;

  return beatLengths.map((length) => {
    const lengthKey = `length${length}`;
    return subdivisions[baseKey][lengthKey];
  });
};

const parseBeatTemplates = (beatTemplate, beatIndex) => {
  const { count, values, beatLength, groupStart, groupEnd, triplets } =
    beatTemplate;

  return count.map((rawCount, subIndex) => {
    const parsedCount = rawCount === 'X' ? `${beatIndex + 1}` : rawCount;

    return {
      count: parsedCount,
      value: values[subIndex],
      beatLength: beatLength[subIndex],
      tripletStatus: triplets[subIndex],
      groupStart: groupStart.includes(subIndex),
      groupEnd: groupEnd.includes(subIndex),
    };
  });
};

export const createBarTemplate = (metre, subdivision) => {
  const metreTemplates = getMetreTemplates(metre);
  console.log('createBarTemplate', { metre, subdivision, metreTemplates });

  const template = subdivision.reduce((acc, beatSubdivision, i) => {
    const beatTemplates = metreTemplates[i][beatSubdivision];

    return [...acc, ...parseBeatTemplates(beatTemplates, i)];
  }, []);

  console.log({ template });
  return template;
};

export const getSubdivisionLength = (subdivision, metre) => {
  const metreTemplates = getMetreTemplates(metre);
  let length = 0;

  for (const [i, beat] of subdivision.entries()) {
    length += metreTemplates[i][beat].values.length;
  }

  return length;
};

export const compareSubdivisionLength = (a, b, metre) => {
  console.log({ a, b, metre });
  return getSubdivisionLength(b, metre) - getSubdivisionLength(a, metre);
};
