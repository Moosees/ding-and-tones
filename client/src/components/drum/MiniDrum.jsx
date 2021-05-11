import React from 'react';
import { connect } from 'react-redux';
import { DrumSvg } from './drum.styles';
import MiniExtra from './tonefield/MiniExtra';
import MiniTonefield from './tonefield/MiniTonefield';

const MiniDrum = ({ notes, positionMap }) => {
  const { round, extra } = notes;

  const roundTonefields = positionMap.map((tonefield, i) => {
    return (
      <MiniTonefield
        key={i}
        note={round[i]}
        position={positionMap[i]}
        isDing={i === 0}
      />
    );
  });

  const extraTonefields = extra.map((extra, i) => {
    return <MiniExtra key={i} extra={extra} />;
  });

  return (
    <div style={{ position: 'relative' }}>
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
    </div>
  );
};

const mapStateToProps = ({ scale }) => ({
  notes: scale.notes,
  positionMap: scale.ui.positionMap,
});

export default connect(mapStateToProps)(MiniDrum);
