import React from 'react';
import { connect } from 'react-redux';
import Chord from './Chord';

const ChordList = ({ printList }) => {
  return (
    <>
      {printList.map((chord, i) => (
        <Chord key={i} chord={chord} />
      ))}
    </>
  );
};

const mapStateToProps = ({ chords }) => ({
  printList: chords.printList,
});

export default connect(mapStateToProps)(ChordList);
