import React from 'react';
import { Footer } from '../songView/songView.styles';
import ChordList from './chordList/ChordList';
import Scale from './scale/Scale';

const ChordsPrint = () => {
  return (
    <>
      <Scale />
      <ChordList />
      <Footer>Chord sheet created with DingAndTones.com</Footer>
    </>
  );
};

export default ChordsPrint;
