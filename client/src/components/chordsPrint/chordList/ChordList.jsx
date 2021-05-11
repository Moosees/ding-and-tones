import React from 'react';
import { connect } from 'react-redux';
import Chord from './Chord';

const ChordList = ({ printList }) => {
  console.log({ printList });
  return (
    <div>
      <Chord />
    </div>
  );
};

const mapStateToProps = ({ chords }) => ({
  printList: chords.printList,
});

export default connect(mapStateToProps)(ChordList);
