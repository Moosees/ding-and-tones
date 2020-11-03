import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { DrumContainer, DrumSvg } from './drum.styles';
import {
  getChordColor,
  getNoteColor,
  getNoteText,
  getPositionMap,
} from './drum.utils';
import Tonefield from './tonefield/Tonefield';

const Drum = ({
  displayedChord,
  displayedNote,
  layout,
  scale,
  showIntervals,
  style,
}) => {
  const positionMap = useMemo(() => getPositionMap(layout, scale.length), [
    layout,
    scale.length,
  ]);

  const tonefields = scale.map((note, i) => {
    const showNote =
      !displayedChord || displayedChord.notes.includes(note.noteShort);
    return (
      <Tonefield
        key={`${note.note}${i}`}
        hasFocus={i === displayedNote}
        isDing={i === 0}
        note={note.note}
        noteIndex={i}
        showNote={showNote}
        position={positionMap[i]}
        text={
          showNote
            ? getNoteText(
                note.note,
                i,
                scale[displayedNote].intervalMap,
                showIntervals,
                displayedChord
              )
            : ''
        }
        color={
          showNote
            ? displayedChord
              ? getChordColor(note.note, displayedChord.notesInScale)
              : getNoteColor(i, scale[displayedNote].intervalMap)
            : '#666'
        }
      />
    );
  });

  return (
    <DrumContainer style={style}>
      <DrumSvg viewBox="-10 -10 20 20">
        <defs>
          <radialGradient id="drumGradient">
            <stop offset="0%" stopColor="#8998aa" />
            <stop offset="98%" stopColor="#626280" />
            <stop offset="100%" stopColor="#222" />
          </radialGradient>
          <filter id="drumShadow">
            <feDropShadow
              dx="0"
              dy="0.5"
              stdDeviation="0.25"
              floodColor="#000050"
              floodOpacity="0.25"
            />
          </filter>
        </defs>
        <circle
          r="9.2"
          cx="0"
          cy="0"
          fill="url(#drumGradient)"
          filter="url(#drumShadow)"
        />
        {tonefields}
      </DrumSvg>
    </DrumContainer>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  showIntervals: drum.showIntervals,
  layout: scale.info.layout,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Drum);
