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
  const { replace } = useHistory();

  const { isDeleting, isFetching, isSaving } = songUi;
  const isWorking = isDeleting || isFetching || isSaving;

  useEffect(() => {
    if (!songId && songUi.songId && !isWorking)
      replace(`/song/${songUi.songId}`);
  }, [isWorking, replace, songId, songUi.songId]);

  useEffect(() => {
    if (songId && songUi.songId !== songId && !isWorking) getSongById(songId);
  }, [isWorking, getSongById, songId, songUi.songId]);

  return (
    <SongContainer>
      {isFetching ? (
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
