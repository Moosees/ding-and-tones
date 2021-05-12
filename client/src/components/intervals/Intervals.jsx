import React from 'react';
import { connect } from 'react-redux';
import DividerLine from '../shared/dividerLine/DividerLine';
import ScrollBox from '../shared/scrollBox/ScrollBox';
import ChordInterval from './ChordInterval';
import DrumMode from './DrumMode';
import { IntervalList } from './intervals.styles';
import ScaleInterval from './ScaleInterval';

const Intervals = ({ displayedChord, displayedNote, round, scale }) => {
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
          const isExtraNote = i >= round.length;
          return (
            <ScaleInterval
              key={i}
              scaleIndex={i}
              interval={interval}
              number={isExtraNote ? `b${i - round.length + 1}` : i}
            />
          );
        });

  return (
    <IntervalList>
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
  scale: scale.notes.scaleFull.all,
});

export default connect(mapStateToProps)(Intervals);
