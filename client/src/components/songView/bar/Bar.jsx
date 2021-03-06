import React from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import {
  BarContainer,
  BarMetre,
  BeatContainer,
  BeatsContainer,
  BeatText,
} from './bar.styles';

const Bar = ({
  barId,
  bars,
  beats,
  countOpen,
  currentBeat,
  handsOpen,
  prevBar,
}) => {
  const { metre, subdivision, measure } = bars[barId];
  const prevBarMetre = prevBar ? bars[prevBar].metre : null;
  const metreInfo = metreList[metre];

  const filteredBeats = measure.reduce((acc, beat, i) => {
    const { value, sound, hand } = beats[beat];
    if (value <= subdivision) {
      const isBeatPlaying = beat === currentBeat;

      acc.push(
        <BeatContainer
          key={beat}
          value={value}
          addMarginLeft={i && subdivision === 4}
        >
          {countOpen && <div>{metreInfo.count[i]}</div>}
          <BeatText isBeatPlaying={isBeatPlaying} value={value}>
            {sound !== '-' && sound.join('+')}
          </BeatText>
          {handsOpen && <div>{handShortByValue[hand]}</div>}
        </BeatContainer>
      );
    }

    return acc;
  }, []);

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
  countOpen: ui.countOpen,
  currentBeat: ui.currentBeat,
  handsOpen: ui.handsOpen,
});

export default connect(mapStateToProps)(Bar);
