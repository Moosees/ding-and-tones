import React from 'react';
import { connect } from 'react-redux';
import { findChordsInScale } from '../../redux/chords/chords.actions';

const FindChords = ({ scale, chordList, findChordsInScale }) => {
  return (
    <button onClick={() => findChordsInScale(scale, chordList)}>
      Find Chords
    </button>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.scaleFull
});

export default connect(mapStateToProps, {
  findChordsInScale
})(FindChords);
