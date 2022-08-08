export const audioSources = [
  { label: 'Tonguepan', path: '/audio/tongue' },
  { label: 'Handpan', path: '/audio/pan' },
];

export const getAudioSrc = (option) => {
  if (option === 2) return audioSources[1];

  return audioSources[0];
};
