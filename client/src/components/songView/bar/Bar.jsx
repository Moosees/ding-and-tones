import React, { Fragment } from 'react';
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
  BeatTextSpacer,
} from './bar.styles';

const Bar = ({
  barId,
  barMetreOffset,
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

  const filteredBeats = measure.reduce((acc, { beatId, count, value }, i) => {
    if (!beatId) return acc;

    if (value <= subdivision) {
      const { sound, hand } = beats[beatId];
      const isBeatPlaying = beatId === currentBeat;

      acc.push(
        <BeatContainer key={beatId} value={value}>
          {countOpen && <BeatText>{metreInfo.count[i]}</BeatText>}
          <BeatCircleWrapper>
            <BeatCircle isBeatPlaying={isBeatPlaying} value={value}>
              {sound.map((note, i) => (
                <Fragment key={i}>
                  <BeatText length={sound.length}>
                    {note !== '-' && note}
                  </BeatText>
                  {sound[i + 1] ? <BeatTextSpacer>∘</BeatTextSpacer> : null}
                </Fragment>
              ))}
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
        <BarMetre offset={barMetreOffset}>
          {metreInfo.name.split('/').map((substring, i) => (
            <span key={i}>{substring}</span>
          ))}
        </BarMetre>
      )}
      {filteredBeats}
      <BarDivider />
    </>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  bars: song.bars,
  beats: song.beats,
  barMetreOffset: ui.barMetreOffset,
  countOpen: ui.countOpen,
  currentBeat: ui.currentBeat,
  handsOpen: ui.handsOpen,
});

export default connect(mapStateToProps)(Bar);
