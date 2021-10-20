import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { defaultScale } from '../../../assets/defaultData';
import { loadScale } from '../../../redux/scale/scale.actions';

const useDefaultState = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const [, route, id] = location.pathname.split('/');
    if (route !== 'scale' || (route === 'scale' && !id))
      dispatch(loadScale(defaultScale));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
};

export default useDefaultState;
