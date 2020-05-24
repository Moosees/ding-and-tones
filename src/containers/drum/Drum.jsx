import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Tonefield from '../../components/tonefield/Tonefield';
import { DrumContainer, DrumSvg } from './drum.styles';
import {
  getChordColor,
  getNoteColor,
  getNoteText,
  getPositionMap,
} from './drum.utils';

const Drum = ({
  layout,
  scale,
  displayedChord,
  displayedNote,
  showIntervals,
}) => {
  const positionMap = useMemo(() => getPositionMap(layout, scale.length), [
    layout,
    scale,
  ]);

  const tonefields = scale.map((note, i) => {
    const showNote =
      !displayedChord || displayedChord.notes.includes(note.noteShort);
    return (
      <Tonefield
        key={`${note.note}${i}`}
        noteIndex={i}
        isDing={i === 0}
        position={positionMap[i]}
        hasFocus={i === displayedNote}
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
    <DrumContainer>
      <DrumSvg viewBox="-10 -10 20 20" transform="rotate(90)">
        <defs>
          <radialGradient id="drumGradient">
            <stop offset="0%" stopColor="#8998aa" />
            <stop offset="98%" stopColor="#626280" />
            <stop offset="100%" stopColor="#222" />
          </radialGradient>
          <filter id="drumShadow">
            <feDropShadow
              dx="0.5"
              dy="0"
              stdDeviation="0.25"
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
  layout: scale.layout,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Drum);
