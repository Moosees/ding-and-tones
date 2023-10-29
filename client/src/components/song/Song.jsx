import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setCurrentDropdown } from '../../redux/ui/ui.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import ScrollBox from '../shared/scrollBox/ScrollBox';
import SongControls from '../songControls/SongControls';
import SongView from '../songView/SongView';
import Songwriter from '../songwriter/Songwriter';
import {
  SongContainer,
  SongEditContainer,
  SongViewContainer,
} from './song.styles';

const Song = ({ notes }) => {
  const borderRef = useRef(null);
  const { songId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { localSongId, isDeleting, isFetching, isSaving, isEditingSong } =
    useSelector(({ song, ui }) => ({
      localSongId: song.ui.songId,
      isDeleting: song.ui.isDeleting,
      isFetching: song.ui.isFetching,
      isSaving: song.ui.isSaving,
      isEditingSong: ui.isEditingSong,
    }));

  useEffect(() => {
    const isWorking = isDeleting || isFetching || isSaving;

    if (!songId && localSongId && !isWorking) {
      navigate(`/song/${localSongId}`, { replace: true });
    }
  }, [isDeleting, isFetching, isSaving, navigate, songId, localSongId]);

  useEffect(() => {
    // close dropdown when navigating away from song route or showing tablature
    if (!isEditingSong) {
      dispatch(setCurrentDropdown(null));
    }

    return () => dispatch(setCurrentDropdown(null));
  }, [isEditingSong, dispatch]);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : isEditingSong ? (
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
