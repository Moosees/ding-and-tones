import React from 'react';
import { connect } from 'react-redux';
import { metreList } from '../../../assets/metre';
import {
  BarContainer,
  BarMetre,
  BeatContainer,
  BeatsContainer,
} from './bar.styles';

const Bar = ({ barId, bars, beats, currentBeat, prevBar }) => {
  const { metre, subdivision, measure } = bars[barId];
  const prevBarMetre = prevBar ? bars[prevBar].metre : null;
  const metreInfo = metreList[metre];

  const filteredBeats = measure
    .filter((beat) => beats[beat].value <= subdivision)
    .map((beat, i) => {
      const { value, sound } = beats[beat];
      const isBeatPlaying = beat === currentBeat;
      return (
        <BeatContainer
          key={beat}
          value={value}
          isBeatPlaying={isBeatPlaying}
          addMarginLeft={i && subdivision === 4}
        >
          <span>{sound !== '-' && sound.join('+')}</span>
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

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  beats: song.beats,
  currentBeat: ui.currentBeat,
});

export default connect(mapStateToProps)(Bar);
