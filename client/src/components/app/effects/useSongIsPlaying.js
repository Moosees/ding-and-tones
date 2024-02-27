import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDropdown } from '../../../redux/ui/ui.actions';

const useSongIsPlaying = () => {
  const dispatch = useDispatch();
  const isSongPlaying = useSelector(({ ui }) => ui.isSongPlaying);

  useEffect(() => {
    if (!isSongPlaying) return;

    dispatch(setCurrentDropdown(null));
  }, [dispatch, isSongPlaying]);
};

export default useSongIsPlaying;
