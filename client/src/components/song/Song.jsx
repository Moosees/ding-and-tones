import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSongById } from '../../redux/song/song.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import SongControls from '../songControls/SongControls';
import Songwriter from '../songwriter/Songwriter';
import { BottomSection, SongContainer, TopSection } from './song.styles';
import PrintArrangement from '../printArrangement/PrintArrangement';

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
    <SongContainer>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <TopSection>{<SongControls />}</TopSection>
          <DividerLine />
          <BottomSection>
            {isEditingSong ? <Songwriter /> : <PrintArrangement />}
          </BottomSection>
        </>
      )}
    </SongContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  isEditingSong: ui.isEditingSong,
  songUi: song.ui,
});

export default connect(mapStateToProps, { getSongById })(Song);
