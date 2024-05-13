import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { defaultScale } from '../../../assets/defaultData';
import { getScaleById, loadScale } from '../../../redux/scale/scale.actions';
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
      getSongById({ songId: id, getScale: true });
      return;
    }

    if (route === 'scale' && id) {
      dispatch(getScaleById(id, true));
      return;
    }

    dispatch(loadScale(defaultScale, true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, fetchSessionTried]);
};

export default useDefaultState;
