import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { createDefaultSong, defaultScale } from '../../../assets/defaultData';
import { getScaleById, loadScale } from '../../../redux/scale/scale.actions';
import {
  getSongById,
  loadSongFromState,
} from '../../../redux/song/song.actions';

const useDefaultState = () => {
  const dispatch = useDispatch();
  const fetchSessionTried = useSelector(({ user }) => user.fetchSessionTried);
  const location = useLocation();

  useEffect(() => {
    if (!fetchSessionTried) {
      return;
    }

    const [, route, id] = location.pathname.split('/');

    if (route === 'song' && id) {
      dispatch(getSongById(id, true, true));
      return;
    }

    if (route === 'scale' && id) {
      dispatch(loadSongFromState(createDefaultSong(), true));
      dispatch(getScaleById(id, true));
      return;
    }

    dispatch(loadScale(defaultScale, true));
    dispatch(loadSongFromState(createDefaultSong(), true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, fetchSessionTried]);
};

export default useDefaultState;
