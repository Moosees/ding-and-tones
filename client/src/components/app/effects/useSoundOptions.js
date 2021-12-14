import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSoundOptions } from '../../../redux/ui/ui.actions';

const useSoundOptions = () => {
  const dispatch = useDispatch();
  const { audioPath, notes } = useSelector(({ howls, scale }) => ({
    audioPath: howls.info.audioSrc.path,
    notes: scale.notes,
  }));

  useEffect(() => {
    dispatch(setSoundOptions(notes.round, notes.extra));
  }, [dispatch, audioPath, notes.round, notes.extra]);
};

export default useSoundOptions;
