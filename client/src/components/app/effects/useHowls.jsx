import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanupAllHowls,
  createAllHowls
} from '../../../redux/howls/howls.actions';

const useHowls = () => {
  const dispatch = useDispatch();
  const { round, extra } = useSelector(({ scale }) => scale.notes);

  useEffect(() => {
    dispatch(createAllHowls());

    return () => dispatch(cleanupAllHowls());
  }, [round, extra, dispatch]);
};

export default useHowls;
