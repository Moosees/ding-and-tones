import React, { memo } from 'react';
import { connect } from 'react-redux';
import { displayChordOnDrum } from '../../redux/chords/chords.actions';

const ChordList = memo(({ displayChordOnDrum, foundChords }) => {
  return (
    <ul>
      {foundChords.map((chord, i) => (
        <li key={i} onClick={() => displayChordOnDrum(chord)}>
          {chord.name} ({chord.notes.join('-')})
        </li>
      ))}
    </ul>
  );
});

const mapStateToProps = ({ chords }) => ({
  foundChords: chords.foundChords,
});

export default connect(mapStateToProps, {
  displayChordOnDrum,
})(ChordList);
