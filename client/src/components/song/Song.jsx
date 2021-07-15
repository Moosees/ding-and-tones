import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSongById } from '../../redux/song/song.actions';
import { setSoundOptions } from '../../redux/ui/ui.actions';
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
  TopSection,
} from './song.styles';

const Song = ({
  audioPath,
  getSongById,
  isEditingSong,
  notes,
  setSoundOptions,
  songUi,
}) => {
  const borderRef = useRef(null);
  const { songId } = useParams();
  const { replace } = useHistory();

  const { isDeleting, isFetching, isSaving } = songUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (!songId && songUi.songId && !isWorking)
      replace(`/song/${songUi.songId}`);
  }, [isWorking, replace, songId, songUi.songId]);

  useEffect(() => {
    if (songId && !songUi.songId && !isWorking) {
      getSongById(songId, true);
    }
  }, [isWorking, getSongById, songId, songUi.songId]);

  useEffect(() => {
    setSoundOptions(notes.round, notes.extra);
  }, [audioPath, notes.round, notes.extra, setSoundOptions]);

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : isEditingSong ? (
        <SongContainer>
          <TopSection>
            <SongControls />
          </TopSection>
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

const mapStateToProps = ({ drum, scale, song, ui }) => ({
  audioPath: drum.audioPath,
  notes: scale.notes,
  songUi: song.ui,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { getSongById, setSoundOptions })(Song);
