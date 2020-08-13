import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import DividerLine from '../../components/dividerLine/DividerLine';
import Loading from '../../components/loading/Loading';
import SongArrangement from '../../components/songArrangement/SongArrangement';
import SongControls from '../../components/songControls/SongControls';
import SongInfo from '../../components/songInfo/SongInfo';
import { getSongById } from '../../redux/song/song.actions';
import {
  BottomSection,
  SongContainer,
  TopPart,
  TopSection,
} from './songwriter.styles';

const Songwriter = ({ getSongById, songUi }) => {
  const { songId } = useParams();
  const { replace } = useHistory();

  useEffect(() => {
    if (!songId && songUi.songId) replace(`/song/${songUi.songId}`);
  }, [replace, songId, songUi.songId]);

  useEffect(() => {
    if (songId && songUi.songId !== songId && !songUi.isFetching)
      getSongById(songId);
  }, [getSongById, songId, songUi.isFetching, songUi.songId]);

  return (
    <SongContainer>
      {songUi.isFetching ? (
        <Loading />
      ) : (
        <>
          <TopSection>
            <TopPart>
              <SongInfo />
            </TopPart>
            <DividerLine vertical small />
            <TopPart>
              <SongControls />
            </TopPart>
          </TopSection>
          <DividerLine />
          <BottomSection>
            <SongArrangement />
          </BottomSection>
        </>
      )}
    </SongContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  songUi: song.ui,
});

export default connect(mapStateToProps, { getSongById })(Songwriter);
