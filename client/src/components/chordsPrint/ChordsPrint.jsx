import React from 'react';
import ChordList from './chordList/ChordList';
import Scale from './scale/Scale';

const ChordsPrint = () => {
  return (
    <div>
      <Scale />
      <ChordList />
    </div>
  );
};

export default ChordsPrint;
