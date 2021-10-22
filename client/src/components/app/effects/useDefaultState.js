import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { defaultScale, defaultSong } from '../../../assets/defaultData';
import { getScaleById, loadScale } from '../../../redux/scale/scale.actions';
import { loadSong } from '../../../redux/song/song.actions';

const useDefaultState = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const [, route, id] = location.pathname.split('/');

    if (route === 'song' && id) {
      //fetch song (and scale)
      return;
    }

    if (route === 'scale' && id) {
      dispatch(loadSong(defaultSong, true));
      dispatch(getScaleById(id));
      return;
    }

    dispatch(loadScale(defaultScale, true));
    dispatch(loadSong(defaultSong, true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
};

export default useDefaultState;
