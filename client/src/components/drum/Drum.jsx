import React from 'react';
import { connect } from 'react-redux';
import { setCurrentlyPlaying } from '../../redux/ui/ui.actions';
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
  howlOptionCbs,
  scale,
  setCurrentlyPlaying,
  sharpNotes,
  style,
}) => {
  const handlePlay = (soundOption, currentHand = 1) => {
    setCurrentlyPlaying({ currentHand, currentSound: [soundOption] });
    howlOptionCbs[soundOption].play();
  };

  const { ding, round, extra } = scale.reduce(
    (acc, note, i) => {
      const showNote =
        !displayedChord || displayedChord.notes.includes(note.noteShort);

      const isPlaying = currentSound.includes(note.option);

      const hasFocus = i === displayedNote;

      const text = showNote
        ? getNoteText(
            note.note,
            i,
            scale[displayedNote].intervalMap,
            drumMode,
            displayedChord,
            note.option,
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
        handlePlay: () => handlePlay(note.option),
      };
      console.log(note.type);

      acc[note.type].push(tonefieldData);

      return acc;
    },
    { ding: [], round: [], extra: [] }
  );

  return (
    <DrumContainer style={style}>
      <DrumWrapper>
        {extra.map((data, i) => (
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
          <Tak hand={2} handlePlay={() => handlePlay('t', 2)} />
          <Tak hand={1} handlePlay={() => handlePlay('T', 1)} />
          {[...ding, ...round].map((data, i) => (
            <Tonefield key={i} {...data} />
          ))}
        </DrumSvg>
      </DrumWrapper>
    </DrumContainer>
  );
};

const mapStateToProps = ({ drum, howls, scale, ui }) => ({
  displayedChord: drum.displayedChord,
  displayedNote: drum.displayedNote,
  drumMode: drum.drumMode,
  howlOptionCbs: howls.optionCbs,
  sharpNotes: scale.info.sharpNotes,
  scale: scale.parsed.pitched,
  currentSound: ui.currentSound,
  isEditingExtraPos: ui.isEditingExtraPos,
});

export default connect(mapStateToProps, { setCurrentlyPlaying })(Drum);
