import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { DrumContainer, DrumSvg, ExtraNotesContainer } from './drum.styles';
import {
  getChordColor,
  getNoteColor,
  getNoteText,
  getPositionMap,
} from './drum.utils';
import ExtraNotes from './tonefield/ExtraNotes';
import Tonefield from './tonefield/Tonefield';

const Drum = ({
  displayedChord,
  displayedNote,
  drumMode,
  extra,
  layout,
  round,
  scale,
  style,
}) => {
  const positionMap = useMemo(() => getPositionMap(layout, round.length), [
    layout,
    round.length,
  ]);

  const { roundTonefields, extraTonefields } = scale.reduce(
    (acc, note, i) => {
      const showNote =
        !displayedChord || displayedChord.notes.includes(note.noteShort);
      const isExtraNote = i >= round.length;

      const tonefield = isExtraNote ? (
        <ExtraNotes
          key={`${note.note}${i}`}
          hasFocus={i === displayedNote}
          note={note.note}
          showNote={showNote}
          text={
            showNote
              ? getNoteText(
                  note.note,
                  i,
                  scale[displayedNote].intervalMap,
                  drumMode,
                  displayedChord,
                  (i - round.length + 1) * -1
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
      ) : (
        <Tonefield
          key={`${note.note}${i}`}
          hasFocus={i === displayedNote}
          isDing={i === 0}
          note={note.note}
          showNote={showNote}
          position={positionMap[i]}
          text={
            showNote
              ? getNoteText(
                  note.note,
                  i,
                  scale[displayedNote].intervalMap,
                  drumMode,
                  displayedChord,
                  i
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

      acc[isExtraNote ? 'extraTonefields' : 'roundTonefields'].push(tonefield);

      return acc;
    },
    { roundTonefields: [], extraTonefields: [] }
  );

  return (
    <DrumContainer style={style}>
      {extra.length > 0 && (
        <ExtraNotesContainer>{extraTonefields}</ExtraNotesContainer>
      )}
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
        {roundTonefields}
      </DrumSvg>
    </DrumContainer>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  drumMode: drum.drumMode,
  extra: scale.notes.extra,
  layout: scale.info.layout,
  round: scale.notes.round,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Drum);
