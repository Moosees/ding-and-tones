import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { createDefaultSong, defaultScale } from '../../../assets/defaultData';
import { getScaleById, loadScale } from '../../../redux/scale/scale.actions';
import { loadSongFromState } from '../../../redux/song/song.actions';
import { useLazyGetSongByIdQuery } from '../../../redux/song/song.api';

const useDefaultState = () => {
  const dispatch = useDispatch();
  const fetchSessionTried = useSelector(({ user }) => user.fetchSessionTried);
  const location = useLocation();
  const [getSongById] = useLazyGetSongByIdQuery();

  useEffect(() => {
    if (!fetchSessionTried) {
      return;
    }

    const [, route, id] = location.pathname.split('/');

    if (route === 'song' && id) {
      // dispatch(getSongById(id, true, true));
      getSongById({ songId: id, firstLoad: true, getScale: true });
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
