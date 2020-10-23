import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import {
  BarContainer,
  BarMetre,
  BeatContainer,
  BeatsContainer,
} from './bar.styles';

const Bar = ({ barId, bars, beats, prevBar }) => {
  const { metre, subdivision, measure } = bars[barId];
  const prevBarMetre = prevBar ? bars[prevBar].metre : null;
  const metreInfo = metreList[metre];

  const filteredBeats = measure
    .filter((beat) => beats[beat].value <= subdivision)
    .map((beat, i) => {
      const { value, sound } = beats[beat];
      return (
        <BeatContainer
          key={beat}
          value={value}
          addMarginLeft={i && subdivision === 4}
        >
          {sound !== '-' && sound}
        </BeatContainer>
      );
    });

  return (
    <BarContainer>
      <BarMetre>
        {(!prevBarMetre || prevBarMetre !== metre) && metreInfo.name}
      </BarMetre>
      <BeatsContainer>{filteredBeats}</BeatsContainer>
    </BarContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  bars: song.bars,
  beats: song.beats,
});

export default connect(mapStateToProps)(Bar);
