import React from 'react';
import { useSelector } from 'react-redux';
import Chord from './Chord';

const ChordList = () => {
  const printList = useSelector(({ chords }) => chords.printList);
  const sharpNotes = useSelector(({ scale }) => scale.info.sharpNotes);

  return (
    <>
      {printList.map((chord, i) => (
        <Chord key={i} chord={chord} sharpNotes={sharpNotes} />
      ))}
    </>
  );
};

export default ChordList;
