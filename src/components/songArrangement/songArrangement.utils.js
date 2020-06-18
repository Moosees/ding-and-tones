// All possible sounds available on current scale
export const createOptions = (scale) => {
  const options = {
    single: [
      { label: 'Pause', value: '-' },
      { label: 'Tak', value: 'T' },
    ],
  };
  for (let i = 0; i < scale.length; ++i) {
    options.single.push({
      label: `${i}-${scale[i]}`,
      value: `${i}`,
    });
  }
  return options;
};
