import { Howl, Howler } from 'howler';

export const cleanupHowls = () => {
  Howler.stop();
};

export const playHowl = (howl) => {
  console.log(Howler);
  // if (howl.playing()) howl.stop().play();
  if (howl.playing()) howl.seek(0);
  else howl.play();
};

export const createHowls = () => {
  const howls = [
    // new Howl({ src: ['audio/test/C3.wav'] }),
    // new Howl({ src: ['audio/test/E3.wav'] }),
    new Howl({ src: ['audio/pan/C3.mp3'] }),
    new Howl({ src: ['audio/pan/E3.mp3'] }),
  ];

  const howlCbs = [
    {
      key: 72,
      play: () => playHowl(howls[0]),
    },
    {
      key: 74,
      play: () => playHowl(howls[1]),
    },
  ];

  return { howls, howlCbs };
};
