import React from 'react';
import { connect } from 'react-redux';
import Tonefield from '../tonefield/Tonefield';
import { DrumSvg } from './drum.styles';
import { getTonefieldColor, getTonefieldText } from './drum.utils';

const Drum = ({ scale, chordFocus }) => {
  const tonefields = scale.map((note, i) => {
    const pos = (360 / (scale.length - 1)) * (i - 1);

    return (
      <Tonefield
        key={note.note}
        note={note}
        isDing={i === 0}
        position={pos}
        text={getTonefieldText(note, chordFocus)}
        color={getTonefieldColor(note, chordFocus)}
      />
    );
  });

  return (
    <DrumSvg viewBox="-10 -10 20 20">
      <circle r="10" cx="0" cy="0" fill="grey" />
      {tonefields}
    </DrumSvg>
  );
};

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleFull
});

export default connect(mapStateToProps)(Drum);
