// import axios from 'axios';
import React from 'react';
// import { useParams } from 'react-router-dom';
import DividerLine from '../../components/dividerLine/DividerLine';
import SongArrangement from '../../components/songArrangement/SongArrangement';
import SongControls from '../../components/songControls/SongControls';
import SongInfo from '../../components/songInfo/SongInfo';
import {
  BottomSection,
  SongContainer,
  TopPart,
  TopSection,
} from './songwriter.styles';

const Songwriter = () => {
  // const { songId } = useParams();

  // if (songId) {
  //   axios
  //     .get(`/song/id/${songId}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         // const {bars, scale, song} = res.data
  //         // loadSong(song, bars)
  //         // if user want scale: loadScale({scaleSimple: scale})
  //       }
  //     })
  //     .catch((error) => console.error(error));
  // }

  return (
    <SongContainer>
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
    </SongContainer>
  );
};

export default Songwriter;
