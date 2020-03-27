import React, { memo } from 'react';
import { connect } from 'react-redux';
import { chordList } from '../../helpers/chords.data';
import { findAllChords } from '../../helpers/chords.helpers';

const ChordsList = memo(({ scale, setChordFocus }) => {
  const chords = findAllChords(scale, chordList);

  return (
    <ul>
      {chords.map((chord, i) => (
        <li key={i} onClick={() => setChordFocus(chord)}>
          {chord.name}
        </li>
      ))}
    </ul>
  );
});

const mapStateToProps = ({ scale }) => ({
  scale: scale.scaleFull
});

export default connect(mapStateToProps)(ChordsList);
