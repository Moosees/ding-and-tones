import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanupAllHowls,
  createAllHowls,
} from '../../../redux/howls/howls.actions';

const useHowls = () => {
  const dispatch = useDispatch();
  const allSoundOptions = useSelector(({ ui }) => ui.soundOptions.allSounds);

  useEffect(() => {
    dispatch(createAllHowls(allSoundOptions));

    return () => dispatch(cleanupAllHowls());
  }, [allSoundOptions, dispatch]);
};

export default useHowls;
