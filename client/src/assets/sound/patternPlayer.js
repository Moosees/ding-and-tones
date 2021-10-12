import { store } from '../../redux/store';
import {
  setCurrentlyPlaying,
  setIsSongPlaying,
} from '../../redux/ui/ui.actions';

const resetSongUiState = () => {
  store.dispatch(
    setCurrentlyPlaying({
      currentBeat: null,
      currentBar: null,
      currentSound: [],
    })
  );
  store.dispatch(setIsSongPlaying(false));
};

const playBeat = ({ uiUpdates, duration, mode, play }) =>
  new Promise((resolve) => {
    store.dispatch(setCurrentlyPlaying(uiUpdates));
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
