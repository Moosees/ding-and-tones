import React from 'react';
import { connect } from 'react-redux';
import { DrumContainer, DrumSvg, DrumWrapper } from './drum.styles';
import MiniExtra from './tonefield/MiniExtra';
import MiniTonefield from './tonefield/MiniTonefield';

const MiniDrum = ({ notes, positionMap }) => {
  const { round, extra } = notes;
  console.log({ round, extra });
  const roundTonefields = positionMap.map((tonefield, i) => {
    return <MiniTonefield key={i} position={positionMap[i]} isDing={i === 0} />;
  });

  const extraTonefields = extra.map((note, i) => {
    return <MiniExtra key={i} note={note} />;
  });

  return (
    <DrumContainer>
      <DrumWrapper>
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
      </DrumWrapper>
    </DrumContainer>
  );
};

const mapStateToProps = ({ scale }) => ({
  notes: scale.notes,
  positionMap: scale.ui.positionMap,
});

export default connect(mapStateToProps)(MiniDrum);
