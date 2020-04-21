import React from 'react';
import { connect } from 'react-redux';
import { findChordsInScale } from '../../redux/chords/chords.actions';

const ChordControls = ({ scale, chordList, findChordsInScale }) => {
  return (
    <button onClick={() => findChordsInScale(scale, chordList)}>
      Find chords
    </button>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  chordList: chords.chordList,
  scale: scale.scaleFull,
});

export default connect(mapStateToProps, {
  findChordsInScale,
})(ChordControls);
