import React, { memo } from 'react';
import { connect } from 'react-redux';
import { setDisplayedChord } from '../../redux/drum/drum.actions';

const ChordList = memo(({ setDisplayedChord, foundChords }) => {
  return (
    <ul>
      {foundChords.map((chord, i) => (
        <li key={i} onClick={() => setDisplayedChord(chord)}>
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
  setDisplayedChord,
})(ChordList);
