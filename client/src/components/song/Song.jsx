import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setCurrentDropdown } from '../../redux/song/song.slice';
import DividerLine from '../shared/dividerLine/DividerLine';
import ScrollBox from '../shared/scrollBox/ScrollBox';
import SongControls from '../songControls/SongControls';
import SongView from '../songView/SongView';
import Songwriter from '../songwriter/Songwriter';
import {
  SongContainer,
  SongEditContainer,
  SongViewContainer,
} from './song.styles';

const Song = () => {
  const dispatch = useDispatch();
  const localSongId = useSelector(({ song }) => song.refs.songId);
  const isEditingSong = useSelector(({ song }) => song.ui.isEditingSong);
  // const { localSongId, isDeleting, isFetching, isSaving, isEditingSong } =
  //   useSelector(({ song, ui }) => ({
  //     localSongId: song.ui.songId,
  //     isDeleting: song.ui.isDeleting,
  //     isFetching: song.ui.isFetching,
  //     isSaving: song.ui.isSaving,
  //     isEditingSong: ui.isEditingSong,
  //   }));

  const borderRef = useRef(null);
  const { songId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // const isWorking = isDeleting || isFetching || isSaving;

    // if (!songId && localSongId && !isWorking) {
    if (!songId && localSongId) {
      navigate(`/song/${localSongId}`, { replace: true });
    }
    // }, [isDeleting, isFetching, isSaving, navigate, songId, localSongId]);
  }, [navigate, songId, localSongId]);

  useEffect(() => {
    // close dropdown when navigating away from song route
    return () => dispatch(setCurrentDropdown({ beatId: null }));
  }, [dispatch]);

  return (
    <>
      {isEditingSong ? (
        <SongContainer>
          <SongControls />
          <DividerLine small />
          <SongEditContainer ref={borderRef}>
            <ScrollBox>
              <Songwriter borderRef={borderRef} />
            </ScrollBox>
          </SongEditContainer>
        </SongContainer>
      ) : (
        <SongViewContainer>
          <ScrollBox>
            <SongView />
          </ScrollBox>
        </SongViewContainer>
      )}
    </>
  );
};

export default Song;
