import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { DrumContainer, DrumSvg, MutantContainer } from './drum.styles';
import {
  getChordColor,
  getNoteColor,
  getNoteText,
  getPositionMap,
} from './drum.utils';
import Mutant from './tonefield/Mutant';
import Tonefield from './tonefield/Tonefield';

const Drum = ({
  displayedChord,
  displayedNote,
  drumMode,
  layout,
  mutant,
  round,
  scale,
  style,
}) => {
  const positionMap = useMemo(() => getPositionMap(layout, round.length), [
    layout,
    round.length,
  ]);

  const { roundTonefields, mutantTonefields } = scale.reduce(
    (acc, note, i) => {
      const showNote =
        !displayedChord || displayedChord.notes.includes(note.noteShort);
      const isMutantNote = i >= round.length;

      const tonefield = isMutantNote ? (
        <Mutant
          key={`${note.note}${i}`}
          hasFocus={i === displayedNote}
          note={note.note}
          noteIndex={i}
          showNote={showNote}
          text={
            showNote
              ? getNoteText(
                  note.note,
                  i,
                  scale[displayedNote].intervalMap,
                  drumMode,
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
      ) : (
        <Tonefield
          key={`${note.note}${i}`}
          hasFocus={i === displayedNote}
          isDing={i === 0}
          note={note.note}
          noteIndex={i}
          showNote={showNote}
          position={
            isMutantNote ? mutant[i - round.length].pos : positionMap[i]
          }
          text={
            showNote
              ? getNoteText(
                  note.note,
                  i,
                  scale[displayedNote].intervalMap,
                  drumMode,
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

      acc[isMutantNote ? 'mutantTonefields' : 'roundTonefields'].push(
        tonefield
      );

      return acc;
    },
    { roundTonefields: [], mutantTonefields: [] }
  );

  return (
    <DrumContainer style={style}>
      {mutant.length > 0 && (
        <MutantContainer>{mutantTonefields}</MutantContainer>
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
  layout: scale.info.layout,
  mutant: scale.notes.mutant,
  round: scale.notes.round,
  scale: scale.notes.scaleFull,
});

export default connect(mapStateToProps)(Drum);
