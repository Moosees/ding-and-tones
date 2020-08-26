import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSongById } from '../../redux/song/song.actions';
import Arrangement from '../arrangement/Arrangement';
import DividerLine from '../dividerLine/DividerLine';
import Loading from '../loading/Loading';
import Controls from './controls/Controls';
import Info from './info/Info';
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
              <Info />
            </TopPart>
            <DividerLine vertical small />
            <TopPart>
              <Controls />
            </TopPart>
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
