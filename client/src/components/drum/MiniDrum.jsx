import React from 'react';
import { connect } from 'react-redux';
import { DrumContainer, DrumSvg, DrumWrapper } from './drum.styles';
import MiniTonefield from './tonefield/MiniTonefield';

const MiniDrum = ({ positionMap }) => {
  const roundTonefields = positionMap.map((tonefield, i) => {
    return <MiniTonefield key={i} position={positionMap[i]} isDing={i === 0} />;
  });

  return (
    <DrumContainer>
      <DrumWrapper>
        {/* {extraTonefields} */}
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
  positionMap: scale.ui.positionMap,
});

export default connect(mapStateToProps)(MiniDrum);
