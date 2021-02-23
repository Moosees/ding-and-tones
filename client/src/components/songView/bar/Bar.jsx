import React from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import {
  BarContainer,
  BarMetre,
  BeatContainer,
  BeatsContainer,
  BeatText
} from './bar.styles';

const Bar = ({ barId, bars, beats, currentBeat, handsOpen, prevBar }) => {
  const { metre, subdivision, measure } = bars[barId];
  const prevBarMetre = prevBar ? bars[prevBar].metre : null;
  const metreInfo = metreList[metre];

  const filteredBeats = measure
    .filter((beat) => beats[beat].value <= subdivision)
    .map((beat, i) => {
      const { value, sound, hand } = beats[beat];
      const isBeatPlaying = beat === currentBeat;
      return (
        <BeatContainer
          key={beat}
          value={value}
          addMarginLeft={i && subdivision === 4}
        >
          <BeatText isBeatPlaying={isBeatPlaying} value={value}>
            {sound !== '-' && sound.join('+')}
          </BeatText>
          {handsOpen && <div>{handShortByValue[hand]}</div>}
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
  handsOpen: ui.handsOpen,
});

export default connect(mapStateToProps)(Bar);
