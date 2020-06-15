import React from 'react';
import DividerLine from '../../components/dividerLine/DividerLine';
import SongArrangement from '../../components/songArrangement/SongArrangement';
import SongControls from '../../components/songControls/SongControls';
import SongInfo from '../../components/songInfo/SongInfo';
import {
  BottomSection,

  SongContainer,
  TopPart,
  TopSection
} from './songwriter.styles';

const Songwriter = () => {
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
