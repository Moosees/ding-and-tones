import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedNote } from '../../../redux/drum/drum.actions';

const Mutant = ({
  audioPath,
  color,
  displayedChord,
  hasFocus,
  note,
  noteIndex,
  position,
  setDisplayedNote,
  showNote,
  text,
}) => {
  const handlePlay = () => {
    new Audio(`${audioPath}/${note}.mp3`).play();
  };

  // const handleIntervals = () => {
  //   setDisplayedNote(noteIndex);
  // };

  return <div onClick={handlePlay}>{text}</div>;
};

const mapStateToProps = ({ drum }) => ({
  audioPath: drum.audioPath,
  displayedChord: drum.displayedChord,
});

export default connect(mapStateToProps, { setDisplayedNote })(Mutant);
