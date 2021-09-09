import { Howl, Howler } from 'howler';
import { useCallback, useMemo } from 'react';

const useSound = () => {
  const cleanup = useCallback(() => {
    Howler.stop();
  }, []);

  const playHowl = (howl) => {
    if (howl.playing()) {
      howl.stop();
    }
    howl.play();
  };

  const howls = useMemo(
    () => [
      new Howl({ src: ['audio/test/C3.wav'] }),
      new Howl({ src: ['audio/test/E3.wav'] }),
    ],
    []
  );

  const howlCbs = useMemo(
    () => [
      {
        key: 72,
        play: () => playHowl(howls[0]),
      },
      {
        key: 74,
        play: () => playHowl(howls[1]),
      },
    ],
    [howls]
  );

  return { howlCbs, cleanup };
};

export default useSound;
