import React from 'react';
import { connect } from 'react-redux';
import Chord from './Chord';

const ChordList = ({ printList, sharpNotes }) => {
  return (
    <>
      {printList.map((chord, i) => (
        <Chord key={i} chord={chord} sharpNotes={sharpNotes} />
      ))}
    </>
  );
};

const mapStateToProps = ({ chords, scale }) => ({
  printList: chords.printList,
  sharpNotes: scale.info.sharpNotes,
});

export default connect(mapStateToProps)(ChordList);
