import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSongById } from '../../redux/song/song.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import SongControls from '../songControls/SongControls';
import SongView from '../songView/SongView';
import Songwriter from '../songwriter/Songwriter';
import {
  BottomSection,
  SongContainer,
  SongViewContainer,
  TopSection,
} from './song.styles';

const Song = ({ getSongById, isEditingSong, songUi }) => {
  const { songId } = useParams();
  const { replace } = useHistory();

  const { isDeleting, isFetching, isSaving } = songUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (!songId && songUi.songId && !isWorking)
      replace(`/song/${songUi.songId}`);
  }, [isWorking, replace, songId, songUi.songId]);

  useEffect(() => {
    if (songId && songUi.songId !== songId && !isWorking)
      getSongById(songId, true);
  }, [isWorking, getSongById, songId, songUi.songId]);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : isEditingSong ? (
        <SongContainer>
          <TopSection>{<SongControls />}</TopSection>
          <DividerLine />
          <BottomSection>
            <Songwriter />
          </BottomSection>
        </SongContainer>
      ) : (
        <SongViewContainer>
          <SongView />
        </SongViewContainer>
      )}
    </>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  isEditingSong: ui.isEditingSong,
  songUi: song.ui,
});

export default connect(mapStateToProps, { getSongById })(Song);
