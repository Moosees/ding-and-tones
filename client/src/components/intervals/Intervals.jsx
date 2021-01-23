import React from 'react';
import { connect } from 'react-redux';
import DividerLine from '../shared/dividerLine/DividerLine';
import ScrollBox from '../shared/scrollBox/ScrollBox';
import ChordInterval from './ChordInterval';
import DrumMode from './DrumMode';
import { IntervalList } from './intervals.styles';
import ScaleInterval from './ScaleInterval';

const Intervals = ({ displayedChord, displayedNote, scale }) => {
  return (
    <IntervalList>
      <DrumMode />
      <DividerLine small />
      <ScrollBox>
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
      </ScrollBox>
    </IntervalList>
  );
};

const mapStateToProps = ({ scale, drum }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Intervals);
