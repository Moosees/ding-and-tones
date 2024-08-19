import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyGetSongByIdQuery } from '../../redux/api/api.slice';
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

  const borderRef = useRef(null);
  const { songId } = useParams();
  const navigate = useNavigate();

  const [getSongById, { isLoading, isFetching, isUninitialized }] =
    useLazyGetSongByIdQuery();

  useEffect(() => {
    if (isLoading || isFetching) return;
    if (localSongId && songId && localSongId === songId) return;

    if (isUninitialized && songId && !localSongId) {
      getSongById({ songId, getScale: true, editSong: false });
    } else {
      // NOTE: workaround to handle empty param returning the string 'null'
      navigate(`/song${localSongId ? '/' + localSongId : ''}`, {
        replace: true,
      });
    }
  }, [
    navigate,
    songId,
    localSongId,
    isLoading,
    getSongById,
    isFetching,
    isUninitialized,
  ]);

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
