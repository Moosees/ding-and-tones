import { beatsList } from './beats';
import { metreList } from './metre';

export const getSubDivisionOptions = (isBar, metre, beatIndex) => {
  const baseKey = `base${metreList[metre].minSubdivision}`;
  const lengthKey = `length${metreList[metre].beatLengths[beatIndex]}`;
  const subdivisions = beatsList[baseKey][lengthKey];

  return Object.keys(subdivisions)
    .reduce((acc, key) => {
      if (isBar && !subdivisions[key].isBarMetre) {
        return acc;
      }

      return [...acc, { value: parseInt(key), label: subdivisions[key].label }];
    }, [])
    .sort((a, b) => a.value - b.value);
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
  console.log('createBarTemplate', { metre, subdivision });
  const barTemplates = metreList[metre].templates;

  const template = subdivision.reduce((acc, beatSubdivision, i) => {
    const beatTemplates = barTemplates[beatSubdivision];

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
