import React from 'react';
import { connect } from 'react-redux';
import Tonefield from '../tonefield/Tonefield';
import { DrumSvg } from './drum.styles';
import {
  getChordColor,
  getChordText,
  getNoteColor,
  getNoteText,
} from './drum.utils';

const Drum = ({ scale, displayedChord, displayedNote, showIntervals }) => {
  const tonefields = scale.map((note, i) => {
    const pos = (360 / (scale.length - 1)) * (i - 1);

    return (
      <Tonefield
        key={`${note.note}${i}`}
        note={i}
        isDing={i === 0}
        position={pos}
        // Use later for displaying current focus
        hasFocus={!displayedChord && i === displayedNote}
        text={
          displayedChord
            ? getChordText(note, displayedChord)
            : getNoteText(i, scale[displayedNote].intervalMap, showIntervals)
        }
        color={
          displayedChord
            ? getChordColor(note, displayedChord)
            : getNoteColor(i, scale[displayedNote].intervalMap)
        }
      />
    );
  });

  return (
    <DrumSvg viewBox="-10 -10 20 20">
      <circle r="10" cx="0" cy="0" fill="grey" />
      {tonefields}
    </DrumSvg>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  showIntervals: drum.showIntervals,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Drum);
