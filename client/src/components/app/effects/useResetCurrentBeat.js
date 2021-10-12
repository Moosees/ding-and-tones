import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';

const useResetCurrentBeat = () => {
  const dispatch = useDispatch();
  const { currentBeat, currentSound } = useSelector(({ ui }) => ({
    currentBeat: ui.currentBeat,
    currentSound: ui.currentSound,
  }));

  useEffect(() => {
    console.log('reset current beat timer started');
    const timeout = setTimeout(() => {
      if (currentSound.length) {
        console.log('resetting current beat');
        dispatch(setCurrentlyPlaying({ currentBeat: null, currentSound: [] }));
      }
    }, 750);

    return () => clearTimeout(timeout);
  }, [dispatch, currentBeat, currentSound]);
};

export default useResetCurrentBeat;
