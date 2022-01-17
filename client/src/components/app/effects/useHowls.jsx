import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanupAllHowls,
  createAllHowls,
} from '../../../redux/howls/howls.actions';

const useHowls = () => {
  const dispatch = useDispatch();
  const { dings, round, extra } = useSelector(({ scale }) => scale.notes);

  useEffect(() => {
    dispatch(createAllHowls());

    return () => dispatch(cleanupAllHowls());
  }, [dings, round, extra, dispatch]);
};

export default useHowls;
