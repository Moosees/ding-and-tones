import React from 'react';
import { connect } from 'react-redux';
import { setDisplayedNote } from '../../../redux/drum/drum.actions';
import { ExtraContainer } from './tonefield.styles';

const ExtraNote = ({
  audioPath,
  color,
  extra,
  hasFocus,
  localIndex,
  note,
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
      position={extra[localIndex].pos}
      onClick={showNote ? handlePlay : null}
    >
      {text}
    </ExtraContainer>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  audioPath: drum.audioPath,
  extra: scale.notes.extra,
});

export default connect(mapStateToProps, { setDisplayedNote })(ExtraNote);
