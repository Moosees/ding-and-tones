import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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

const Song = ({ isEditingSong, notes, songUi }) => {
  const borderRef = useRef(null);
  const { songId } = useParams();
  const navigate = useNavigate();

  const { isDeleting, isFetching, isSaving } = songUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (!songId && songUi.songId && !isWorking) {
      navigate(`/song/${songUi.songId}`, { replace: true });
    }
  }, [isWorking, navigate, songId, songUi.songId]);

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

const mapStateToProps = ({ song, ui }) => ({
  songUi: song.ui,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps)(Song);
