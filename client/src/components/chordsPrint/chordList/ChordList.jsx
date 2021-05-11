import React from 'react';
import { connect } from 'react-redux';
import Chord from './Chord';
import { ChordListContainer } from './chordList.styles';

const ChordList = ({ printList }) => {
  console.log({ printList });
  return (
    <ChordListContainer>
      {printList.map((chord, i) => (
        <Chord key={i} chord={chord} />
      ))}
    </ChordListContainer>
  );
};

const mapStateToProps = ({ chords }) => ({
  printList: chords.printList,
});

export default connect(mapStateToProps)(ChordList);
