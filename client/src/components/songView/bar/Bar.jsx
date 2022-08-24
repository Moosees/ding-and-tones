import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { handShortByValue } from '../../../assets/constants';
import { createBarTemplate, metreList } from '../../../assets/metre';
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
  const { nameShort } = metreList[metre];

  const barTemplate = createBarTemplate(metre, subdivision);
  console.log({ measure, barTemplate });

  const filteredBeats = measure.reduce((acc, beatId, i) => {
    const { count, value } = barTemplate[i];
    const { sound, hand } = beats[beatId];
    const isBeatPlaying = beatId === currentBeat;

    acc.push(
      <BeatContainer key={beatId} value={value}>
        {countOpen && <BeatText>{count}</BeatText>}
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

    return acc;
  }, []);

  return (
    <>
      {(!prevBarMetre || prevBarMetre !== metre) && (
        <BarMetre offset={barMetreOffset}>
          {nameShort.split('/').map((substring, i) => (
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
