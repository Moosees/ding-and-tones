import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDropdown } from '../../../redux/ui/ui.actions';

const useSongIsPlaying = () => {
  const dispatch = useDispatch();
  const { isSongPlaying } = useSelector(({ ui }) => ({
    isSongPlaying: ui.isSongPlaying,
  }));

  useEffect(() => {
    if (!isSongPlaying) return;

    dispatch(setCurrentDropdown(null));
  }, [isSongPlaying, dispatch]);
};

export default useSongIsPlaying;
