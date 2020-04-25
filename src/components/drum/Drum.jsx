import React from 'react';
import { connect } from 'react-redux';
import Tonefield from '../tonefield/Tonefield';
import { DrumSvg } from './drum.styles';
import { getTonefieldColor, getTonefieldText } from './drum.utils';

const Drum = ({ scale, displayedChord, displayedNote }) => {
  const tonefields = scale.map((note, i) => {
    const pos = (360 / (scale.length - 1)) * (i - 1);

    return (
      <Tonefield
        key={`${note.note}${i}`}
        note={note}
        isDing={i === 0}
        position={pos}
        text={getTonefieldText(note, displayedChord, displayedNote)}
        color={getTonefieldColor(note, displayedChord, displayedNote)}
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

const mapStateToProps = ({ drum, scale }) => ({
  displayedChord: drum.displayedChord,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps)(Drum);
