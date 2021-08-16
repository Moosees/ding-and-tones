import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSongById } from '../../redux/song/song.actions';
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

const Song = ({ getSongById, isEditingSong, notes, songUi }) => {
  const borderRef = useRef(null);
  const { songId } = useParams();
  const { replace } = useHistory();
  const [newId, setNewId] = useState(false);

  const { isDeleting, isFetching, isSaving } = songUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (!songId && songUi.songId && !isWorking) {
      replace(`/song/${songUi.songId}`);
    }
  }, [isWorking, replace, songId, songUi.songId]);

  useEffect(() => {
    const getSongByUrl = async () => {
      const url = await getSongById(songId, true);
      replace(url);
      setNewId(false);
    };

    if (!newId && songId && !songUi.songId && !isWorking) {
      setNewId(true);
      getSongByUrl();
    }
  }, [getSongById, isWorking, newId, replace, songId, songUi.songId]);

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

export default connect(mapStateToProps, { getSongById })(Song);
