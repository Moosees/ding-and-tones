export const audioSources = [
  { option: 1, label: 'Tonguepan', path: '/audio/tongue' },
  { option: 2, label: 'Handpan', path: '/audio/pan' },
];

export const getAudioSrc = (option) => audioSources[option - 1];
