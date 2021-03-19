import React from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { metreList } from '../../../assets/metre';
import {
  BarDivider,
  BarMetre,
  BeatCircle,
  BeatCircleWrapper,
  BeatContainer,
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
        <BeatContainer key={beatId} value={value}>
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
    <>
      {(!prevBarMetre || prevBarMetre !== metre) && (
        <>
          <BarMetre>
            {metreInfo.name.split('/').map((substring) => (
              <span>{substring}</span>
            ))}
          </BarMetre>
          <BarDivider />
        </>
      )}

      {filteredBeats}
      <BarDivider />
    </>
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
