import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import {
  BeatsContainer,
  BeatContainer,
  BeatText,
  MetreContainer,
  BarContainer,
} from './bar.styles';

const Bar = ({ barId, bars, beats }) => {
  const { metre, subdivision, lengthInBeats, measure } = bars[barId];
  const barMetre = metreList[metre];
  // const {
  //   name,
  //   template,
  //   lengthInBeats,
  //   minSubdivision,
  //   subdivisionCount,
  // } = metreList[metre];

  const filteredBeats = measure
    .map((beat) => {
      const { value, sound } = beats[beat];
      return value <= subdivision ? (
        <BeatContainer key={beat} value={value}>
          {sound}
        </BeatContainer>
      ) : null;
    })
    .filter((beat) => beat);

  return (
    <BarContainer>
      <div>{barMetre.name}</div>
      <BeatsContainer>{filteredBeats}</BeatsContainer>
    </BarContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  bars: song.bars,
  beats: song.beats,
});

export default connect(mapStateToProps)(Bar);
