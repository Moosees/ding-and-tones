import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
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

const Songwriter = ({ getSongById, isFetching }) => {
  const { songId } = useParams();

  useEffect(() => {
    if (songId) getSongById(songId);
  }, [songId, getSongById]);

  return (
    <SongContainer>
      {isFetching ? (
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
  isFetching: song.ui.isFetching,
});

export default connect(mapStateToProps, { getSongById })(Songwriter);
