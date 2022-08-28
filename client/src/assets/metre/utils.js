import { subdivisions } from './subdivisions';
import { metreList } from './metre';

export const getSubDivisionOptions = (isBar, metre, beatIndex) => {
  const baseKey = `base${metreList[metre].metreBase}`;
  const lengthKey = `length${metreList[metre].beatLengths[beatIndex]}`;
  const currentSubdivisions = subdivisions[baseKey][lengthKey];

  return Object.keys(currentSubdivisions)
    .reduce((acc, key) => {
      if (isBar && !currentSubdivisions[key].isBarMetre) {
        return acc;
      }

      return [
        ...acc,
        { value: parseInt(key), label: currentSubdivisions[key].label },
      ];
    }, [])
    .sort((a, b) => a.value - b.value);
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
  const { count, values, beatLength } = beatTemplate;

  return count.map((rawCount, i) => {
    const parsedCount = rawCount === 'X' ? `${beatIndex + 1}` : rawCount;

    return {
      count: parsedCount,
      value: values[i],
      beatLength: beatLength[i],
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
  let length = 0;

  subdivision.forEach((beat) => {
    length += metreList[metre].templates[beat].values.length;
  });

  return length;
};

export const compareSubdivisionLength = (a, b, metre) => {
  console.log({ a, b, metre });
  return getSubdivisionLength(b, metre) - getSubdivisionLength(a, metre);
};
