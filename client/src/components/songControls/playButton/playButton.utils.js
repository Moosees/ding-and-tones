export const checkHowlsReadyStatus = (scale, status) => {
  const parsedScale = ['t', 'T', ...scale.map(({ note }) => note)];

  return parsedScale.every((note) => status[note] === 'ready');
};
