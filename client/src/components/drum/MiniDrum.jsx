import React from 'react';
import { useSelector } from 'react-redux';
import { DrumSvg, MiniDrumContainer } from './drum.styles';
import MiniExtra from './tonefield/MiniExtra';
import MiniTonefield from './tonefield/MiniTonefield';

const MiniDrum = ({ noExtraTones, showNoteList }) => {
  const sharpNotes = useSelector(({ scale }) => scale.info.sharpNotes);
  const dings = useSelector(({ scale }) => scale.notes.dings);
  const round = useSelector(({ scale }) => scale.notes.round);
  const extra = useSelector(({ scale }) => scale.notes.extra);
  const positions = useSelector(({ scale }) => scale.parsed.positions);

  const dingRound = [...dings, ...round];

  const roundTonefields = positions.map((position, i) => {
    return (
      <MiniTonefield
        key={dingRound[i]}
        note={dingRound[i]}
        position={position}
        isDing={i === 0}
        showNote={
          !showNoteList ||
          showNoteList.includes(
            dingRound[i].substring(0, dingRound[i].length - 1),
          )
        }
        sharpNotes={sharpNotes}
      />
    );
  });

  const extraTonefields = extra.map((extra, i) => {
    return (
      <MiniExtra
        key={i}
        extra={extra}
        showNote={
          !showNoteList ||
          showNoteList.includes(extra.note.substring(0, extra.note.length - 1))
        }
        sharpNotes={sharpNotes}
      />
    );
  });

  return (
    <MiniDrumContainer>
      {!noExtraTones && extraTonefields}
      <DrumSvg viewBox="-10 -10 20 20">
        <circle
          r="9.2"
          cx="0"
          cy="0"
          fill="none"
          stroke="#000"
          strokeWidth="0.4"
        />
        {roundTonefields}
      </DrumSvg>
    </MiniDrumContainer>
  );
};

export default MiniDrum;
