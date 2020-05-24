import React from 'react';
import ChordControls from '../../components/chordControls/ChordControls';
import ChordList from '../../components/chordList/ChordList';
import DividerLine from '../../components/dividerLine/DividerLine';

const Chords = () => {
  return (
    <>
      <ChordControls />
      <DividerLine />
      <ChordList />
    </>
  );
};

export default Chords;
