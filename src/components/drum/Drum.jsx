import React, { useState } from 'react';
import { connect } from 'react-redux';
import Tonefield from '../tonefield/Tonefield';
import { DrumSvg } from './drum.styles';
import {
  getChordColor,
  getChordText,
  getNoteColor,
  getNoteText,
  getPositionMap,
} from './drum.utils';
import { useEffect } from 'react';

const Drum = ({
  layout,
  scale,
  displayedChord,
  displayedNote,
  showIntervals,
}) => {
  const [positionMap, setPositionMap] = useState(null);
  useEffect(() => {
    setPositionMap(getPositionMap(layout, scale.length));
  }, [layout, scale]);

  const getToneFields = () =>
    scale.map((note, i) => (
      <Tonefield
        key={`${note.note}${i}`}
        noteIndex={i}
        isDing={i === 0}
        position={positionMap[i]}
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
    ));

  return (
    <DrumSvg viewBox="-10 -10 20 20" transform="rotate(90)">
      <circle r="10" cx="0" cy="0" fill="grey" />
      {/* loading spinner? */}
      {positionMap && getToneFields()}
    </DrumSvg>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  showIntervals: drum.showIntervals,
  layout: scale.layout,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Drum);
