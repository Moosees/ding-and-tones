import React from 'react';
import { connect } from 'react-redux';
import { helpTopics } from '../../assets/help';
import useDimensions from '../../hooks/useDimensions';
import Buttons from '../shared/button/Buttons';
import BtnHelp from '../shared/button/Help';
import DividerLine from '../shared/dividerLine/DividerLine';
import ScrollBox from '../shared/scrollBox/ScrollBox';
import PlayButton from '../songControls/playButton/PlayButton';
import ChordInterval from './ChordInterval';
import DrumMode from './DrumMode';
import { IntervalList } from './intervals.styles';
import ScaleInterval from './ScaleInterval';

const Intervals = ({ displayedChord, displayedNote, round, scale }) => {
  const { isMobile } = useDimensions();

  const intervals =
    scale.length && displayedChord
      ? displayedChord.intervals.map((interval, i) => (
          <ChordInterval
            key={i}
            interval={interval}
            note={displayedChord.notes[i]}
          />
        ))
      : scale[displayedNote].intervalMap.map((interval, i) => {
          const { isExtra, localIndex } = scale[i];
          const number = isExtra ? `b${localIndex + 1}` : localIndex;

          return (
            <ScaleInterval
              key={i}
              scaleIndex={i}
              interval={interval}
              number={number}
            />
          );
        });

  return (
    <IntervalList>
      <Buttons>
        {isMobile && <PlayButton light />}
        <BtnHelp topic={helpTopics.INTERVALS} />
      </Buttons>
      <DrumMode />
      <DividerLine small />
      <ScrollBox>{intervals}</ScrollBox>
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  round: scale.notes.round,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Intervals);
