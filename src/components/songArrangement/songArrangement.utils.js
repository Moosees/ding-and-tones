// All possible sounds available on current scale
export const createOptions = (scale) => {
  const options = {
    single: [
      { label: 'Pause', labelShort: '', value: 'P' },
      { label: 'Tak', labelShort: 'T', value: 'T' },
    ],
  };
  for (let i = 0; i < scale.length; ++i) {
    options.single.push({
      label: `${i}-${scale[i]}`,
      labelShort: `${i}`,
      value: `${i}`,
    });
  }
  return options;
};
