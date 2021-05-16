import React from 'react';
import { connect } from 'react-redux';
import { DrumSvg, MiniDrumContainer } from './drum.styles';
import MiniExtra from './tonefield/MiniExtra';
import MiniTonefield from './tonefield/MiniTonefield';

const MiniDrum = ({ notes, showNoteList, positionMap }) => {
  const { round, extra } = notes;

  const roundTonefields = positionMap.map((tonefield, i) => {
    return (
      <MiniTonefield
        key={i}
        note={round[i]}
        position={positionMap[i]}
        isDing={i === 0}
        showNote={
          !showNoteList ||
          showNoteList.includes(round[i].substring(0, round[i].length - 1))
        }
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
      />
    );
  });

  return (
    <MiniDrumContainer>
      {extraTonefields}
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

const mapStateToProps = ({ scale }) => ({
  notes: scale.notes,
  positionMap: scale.ui.positionMap,
});

export default connect(mapStateToProps)(MiniDrum);
