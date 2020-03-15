import React from 'react';
import Tonefield from '../tonefield/Tonefield';
import { DrumContainer } from './drum.styles';
import { intervals } from '../../helpers/intervals.data';

const getTonefieldText = (note, chordFocus) => {
  if (!chordFocus || chordFocus.chord.notes.includes(note.noteShort)) {
    return note.note;
  } else {
    return '';
  }
};

const getTonefieldColor = (note, chordFocus) => {
  if (!chordFocus) return '#222';
  if (chordFocus.chord.notes.includes(note.noteShort)) {
    const interval = intervals[chordFocus.foundNotes[note.note]];
    return interval.color;
  } else {
    return '#666';
  }
};

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
    <DrumContainer viewBox="-10 -10 20 20">
      <circle r="10" cx="0" cy="0" fill="grey" />
      {tonefields}
    </DrumContainer>
  );
};
export default Drum;
