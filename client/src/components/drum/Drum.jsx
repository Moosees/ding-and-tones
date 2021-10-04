import React from 'react';
import { connect } from 'react-redux';
import useHowls from '../../hooks/useHowls';
import { setCurrentBeat } from '../../redux/ui/ui.actions';
import { DrumContainer, DrumSvg, DrumWrapper } from './drum.styles';
import { getChordColor, getNoteColor, getNoteText } from './drum.utils';
import ExtraNote from './tonefield/ExtraNote';
import Tak from './tonefield/Tak';
import Tonefield from './tonefield/Tonefield';

const Drum = ({
  currentSound,
  displayedChord,
  displayedNote,
  drumMode,
  extra,
  round,
  scale,
  setCurrentBeat,
  sharpNotes,
  style,
}) => {
  const { howlOptionCbs } = useHowls();

  const handlePlay = (soundOption) => {
    setCurrentBeat(null, [soundOption]);
    howlOptionCbs[soundOption].play();
  };

  const { roundTonefields, extraTonefields } = scale.reduce(
    (acc, note, i) => {
      const showNote =
        !displayedChord || displayedChord.notes.includes(note.noteShort);

      const noteNumber = note.isExtra
        ? `b${note.localIndex + 1}`
        : '' + note.localIndex;

      const isPlaying = currentSound.includes(noteNumber);

      const hasFocus = i === displayedNote;

      const text = showNote
        ? getNoteText(
            note.note,
            i,
            scale[displayedNote].intervalMap,
            drumMode,
            displayedChord,
            noteNumber,
            sharpNotes
          )
        : '';

      const color = showNote
        ? displayedChord
          ? getChordColor(note.note, displayedChord.notesInScale)
          : getNoteColor(i, scale[displayedNote].intervalMap)
        : '#666';

      const tonefieldData = {
        showNote,
        hasFocus,
        text,
        color,
        localIndex: note.localIndex,
        isPlaying,
        handlePlay: () => handlePlay(noteNumber),
      };

      acc[note.isExtra ? 'extraTonefields' : 'roundTonefields'].push(
        tonefieldData
      );

      return acc;
    },
    { roundTonefields: [], extraTonefields: [] }
  );

  return (
    <DrumContainer style={style}>
      <DrumWrapper>
        {extraTonefields.map((data, i) => (
          <ExtraNote key={i} {...data} />
        ))}
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
          <Tak hand="L" handlePlay={() => handlePlay('t')} />
          <Tak hand="R" handlePlay={() => handlePlay('T')} />
          {roundTonefields.map((data, i) => (
            <Tonefield key={i} {...data} />
          ))}
        </DrumSvg>
      </DrumWrapper>
    </DrumContainer>
  );
};

const mapStateToProps = ({ drum, scale, ui }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  drumMode: drum.drumMode,
  sharpNotes: scale.info.sharpNotes,
  extra: scale.notes.extra,
  round: scale.notes.round,
  scale: scale.notes.scaleFull,
  currentSound: ui.currentSound,
  isEditingExtraPos: ui.isEditingExtraPos,
});

export default connect(mapStateToProps, { setCurrentBeat })(Drum);
