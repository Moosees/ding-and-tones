import React from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import {
  BarContainer,
  BarMetre,
  BeatCircle,
  BeatCircleWrapper,
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

  const filteredBeats = measure.reduce((acc, { beatId, count }, i) => {
    if (!beatId) return acc;

    const { value, sound, hand } = beats[beatId];
    if (value <= subdivision) {
      const isBeatPlaying = beatId === currentBeat;

      acc.push(
        <BeatContainer
          key={beatId}
          value={value}
          addMarginLeft={i && subdivision === 4}
        >
          {countOpen && <BeatText>{metreInfo.count[i]}</BeatText>}
          <BeatCircleWrapper>
            <BeatCircle isBeatPlaying={isBeatPlaying} value={value}>
              <BeatText>{sound !== '-' && sound.join('+')}</BeatText>
            </BeatCircle>
          </BeatCircleWrapper>
          {handsOpen && <BeatText>{handShortByValue[hand] || ' '}</BeatText>}
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
