import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDropdown } from '../../../redux/song/song.slice';

const useSongIsPlaying = () => {
  const dispatch = useDispatch();
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

  useEffect(() => {
    if (!isSongPlaying) return;

    dispatch(setCurrentDropdown({ beatId: null }));
  }, [dispatch, isSongPlaying]);
};

export default useSongIsPlaying;
