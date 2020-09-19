import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSongById } from '../../redux/song/song.actions';
import Arrangement from '../arrangement/Arrangement';
import DividerLine from '../shared/dividerLine/DividerLine';
import Loading from '../shared/loading/Loading';
import Controls from './controls/Controls';
import Info from './info/Info';
import {
  BottomSection,
  SongContainer,
  TopColumn,
  TopSection,
} from './songwriter.styles';

const Songwriter = ({ getSongById, songUi }) => {
  const { songId } = useParams();
  const { push, replace } = useHistory();

  useEffect(() => {
    if (!songId && songUi.songId && !songUi.isFetching)
      replace(`/song/${songUi.songId}`);
  }, [replace, songId, songUi.isFetching, songUi.songId]);

  useEffect(() => {
    if (songId && songUi.songId !== songId && !songUi.isFetching) {
      push('/song');
      getSongById(songId);
    }
  }, [getSongById, push, songId, songUi.isFetching, songUi.songId]);

  return (
    <SongContainer>
      {songUi.isFetching ? (
        <Loading />
      ) : (
        <>
          <TopSection>
            <TopColumn>
              <Info />
            </TopColumn>
            <DividerLine vertical small />
            <TopColumn>
              <Controls />
            </TopColumn>
          </TopSection>
          <DividerLine />
          <BottomSection>
            <Arrangement />
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
