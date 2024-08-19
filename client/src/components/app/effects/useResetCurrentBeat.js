import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSongPlayer } from '../../../redux/song/song.slice';

const useResetCurrentBeat = () => {
  const dispatch = useDispatch();
  const currentBeat = useSelector(({ song }) => song.songPlayer.currentBeat);
  const currentSound = useSelector(({ song }) => song.songPlayer.currentSound);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentSound.length) {
        dispatch(updateSongPlayer({ currentBeat: null, currentSound: [] }));
      }
    }, 750);

    return () => clearTimeout(timeout);
  }, [dispatch, currentBeat, currentSound]);
};

export default useResetCurrentBeat;
