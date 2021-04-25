import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedNote } from '../../../redux/drum/drum.actions';
import { ExtraContainer } from './tonefield.styles';

const ExtraNote = ({
  audioPath,
  color,
  hasFocus,
  note,
  position,
  showNote,
  text,
}) => {
  const handlePlay = () => {
    new Audio(`${audioPath}/${note}.mp3`).play();
  };

  return (
    <ExtraContainer
      color={color}
      showNote={showNote}
      hasFocus={hasFocus}
      onClick={showNote ? handlePlay : null}
    >
      {text}
    </ExtraContainer>
  );
};

const mapStateToProps = ({ drum }) => ({
  audioPath: drum.audioPath,
});

export default connect(mapStateToProps, { setDisplayedNote })(ExtraNote);
