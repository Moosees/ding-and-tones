import { Howl, Howler } from 'howler';

let howl;

const useSound = () => {
  if (!howl) howl = new Howl({ src: ['audio/pan/C3.mp3'] });

  return howl;
};

export default useSound;
