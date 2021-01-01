import React from 'react';
import { connect } from 'react-redux';
import DividerLine from '../shared/dividerLine/DividerLine';
import ChordInterval from './ChordInterval';
import ScaleMode from './DrumMode';
import { IntervalList } from './intervals.styles';
import ScaleInterval from './ScaleInterval';

const Intervals = ({ displayedChord, displayedNote, scale }) => {
  return (
    <IntervalList>
      <ScaleMode />
      <DividerLine small />
      {scale.length && displayedChord
        ? displayedChord.intervals.map((interval, i) => (
            <ChordInterval
              key={i}
              interval={interval}
              note={displayedChord.notes[i]}
            />
          ))
        : scale[displayedNote].intervalMap.map((interval, i) => (
            <ScaleInterval key={i} scaleIndex={i} interval={interval} />
          ))}
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Intervals);
