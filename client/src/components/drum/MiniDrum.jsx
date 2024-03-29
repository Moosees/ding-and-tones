import React from 'react';
import { useSelector } from 'react-redux';
import { DrumSvg, MiniDrumContainer } from './drum.styles';
import MiniExtra from './tonefield/MiniExtra';
import MiniTonefield from './tonefield/MiniTonefield';

const MiniDrum = ({ noExtraTones, showNoteList }) => {
  const { sharpNotes, dings, round, extra, positionMap } = useSelector(
    ({ scale }) => ({
      sharpNotes: scale.info.sharpNotes,
      dings: scale.notes.dings,
      round: scale.notes.round,
      extra: scale.notes.extra,
      positionMap: scale.parsed.positions,
    })
  );

  const dingRound = [...dings, ...round];

  const roundTonefields = positionMap.map((tonefield, i) => {
    return (
      <MiniTonefield
        key={i}
        note={dingRound[i]}
        position={positionMap[i]}
        isDing={i === 0}
        showNote={
          !showNoteList ||
          showNoteList.includes(
            dingRound[i].substring(0, dingRound[i].length - 1)
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
