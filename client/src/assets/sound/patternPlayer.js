import {
  stopSongPlayback,
  updateSongPlayer,
} from '../../redux/song/song.slice';
import { store } from '../../redux/store';

const playBeat = ({ songPlayerUpdate, duration, mode, play }) =>
  new Promise((resolve) => {
    store.dispatch(updateSongPlayer(songPlayerUpdate));
    if (!mode || mode === 'c') play();

    setTimeout(() => resolve(), duration);
  });

export const playPattern = async (pattern) => {
  for (let beat of pattern) {
    if (!store.getState().ui.isSongPlaying) break;
    await playBeat(beat);
  }

  store.dispatch(stopSongPlayback());
};
