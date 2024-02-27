import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';

const useResetCurrentBeat = () => {
  const dispatch = useDispatch();
  const currentBeat = useSelector(({ ui }) => ui.currentBeat);
  const currentSound = useSelector(({ ui }) => ui.currentSound);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentSound.length) {
        dispatch(setCurrentlyPlaying({ currentBeat: null, currentSound: [] }));
      }
    }, 750);

    return () => clearTimeout(timeout);
  }, [dispatch, currentBeat, currentSound]);
};

export default useResetCurrentBeat;
