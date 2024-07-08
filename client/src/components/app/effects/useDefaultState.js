import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useLazyGetScaleByIdQuery } from '../../../redux/scale/scale.api';
import { useLazyGetSongByIdQuery } from '../../../redux/song/song.api';

const useDefaultState = () => {
  const fetchSessionTried = useSelector(({ user }) => user.fetchSessionTried);
  const location = useLocation();
  const [getSongById] = useLazyGetSongByIdQuery();
  const [getScaleById] = useLazyGetScaleByIdQuery();

  useEffect(() => {
    if (!fetchSessionTried) {
      return;
    }

    const [, route, id] = location.pathname.split('/');

    if (route === 'song' && id) {
      getSongById({ songId: id, getScale: true, editSong: false });
      return;
    }

    if (route === 'scale' && id) {
      getScaleById({ scaleId: id });
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSessionTried]);
};

export default useDefaultState;
