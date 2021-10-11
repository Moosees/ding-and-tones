import { store } from '../../redux/store';
import {
  setCurrentlyPlaying,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';

const resetSongUiState = () => {
  store.dispatch(setCurrentlyPlaying({ beatId: null, barId: null }));
  store.dispatch(setIsSongPlaying(false));
};

const playBeat = ({ barId, beatId, duration, mode, play, sound }) =>
  new Promise((resolve) => {
    store.dispatch(
      setCurrentlyPlaying({
        barId: barId || null,
        beatId: beatId || null,
        sound: sound,
      })
    );
    if (!mode || mode === 'c') play();

    setTimeout(() => resolve(), duration);
  });

export const playPattern = async (pattern) => {
  for (let beat of pattern) {
    if (!store.getState().ui.isSongPlaying) break;
    await playBeat(beat);
  }

  resetSongUiState();
};
