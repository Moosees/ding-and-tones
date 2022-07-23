export const checkHowlsReadyStatus = (scale, howls) => {
  const parsedScale = ['t', 'T', ...scale.map(({ note }) => note)];

  return parsedScale.every((note) => howls[note]?.status === 'ready');
};
